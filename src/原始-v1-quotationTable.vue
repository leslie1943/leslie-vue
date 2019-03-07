<template>
  <div class="quotationTable" v-loading="tableLoading" v-if="showComparisonFlag">
    <div class="listTitle">
      <span class="pending-prefix">▎</span>
      <span class="style-span-bp">报价明细汇总</span>
      <el-tooltip
        class="item"
        effect="dark"
        content="光标移入报价明细区, 可使用 ▲ ▼ ◀ ▶ 键实现滚屏查看"
        placement="right"
      >
        <span class="style-span-info">
          <i class="el-icon-info"/>&nbsp;根据总报价情况，最多显示前10家供应商
        </span>
      </el-tooltip>
    </div>
    <!-- height="425" -->
    <el-table :data="api_labels" :span-method="mergeTableCell" border class="style-table">
      <!-- label="采购需求" -->
      <el-table-column align="center" header-align="center" fixed label width="40">
        <template slot-scope="scope">
          <span v-html="scope.row.id"/>
        </template>
      </el-table-column>

      <el-table-column
        align="left"
        header-align="center"
        fixed
        prop="params"
        label="采购需求"
        width="180"
      >
        <template slot-scope="scope">
          <span v-html="scope.row.params"/>
        </template>
      </el-table-column>

      <el-table-column
        v-for="(supplier,n) in api_suppliers"
        :key="n"
        align="center"
        header-align="center"
        :label="supplier"
        :width="api_suppliers.length > 3 ? '220' :''"
      >
        <template slot-scope="scope">
          <span
            @click="handleViewImage"
            :id="scope.$index + '-' + n"
            v-html="printData(scope.$index, n)"
          />
        </template>
      </el-table-column>
    </el-table>

    <!-- 查看图片 -->
    <el-dialog :modal-append-to-body="false" :visible.sync="previewDialogVisible">
      <img width="100%" :src="previewDialogImageUrl">
    </el-dialog>

    <!-- 查看长文本 -->
    <el-dialog
      :title="dialogLongTitle"
      :modal-append-to-body="false"
      :visible.sync="dialogLongTextVisible"
    >
      <span>{{dialogLongText}}</span>
    </el-dialog>
  </div>

  <div class="quotationTable" v-else>
    <div class="listTitle">
      <span class="style-detail">报价明细</span>
    </div>
    <div class="empty-section">
      <el-table :data="fakeData" :show-header="false"/>
    </div>
  </div>
</template>

<script>

// import {getOriginalDataModel} from "./originalDataModel";
import { toRMB } from '@/utils'
import { convertTag } from '@/utils/util'
import { createNamespacedHelpers, mapGetters } from 'vuex'
const { mapActions: quotationAction } = createNamespacedHelpers('quotation')
const { mapActions: dictionaryAction } = createNamespacedHelpers('dictionary')
export default {
  name: 'QuotationTable',
  props: {
    baseId: Number
  },
  data() {
    return {
      tableLoading: true,
      api_suppliers: [], // 报价供应商列表
      api_labels: [], // 行头列表
      api_mergeArray: [], // 合并规则列表
      api_metricsData: {}, // 数据对象
      showComparisonFlag: false, // 是否显示开标一览表
      previewDialogImageUrl: '',
      previewDialogVisible: false,
      dialogLongTextVisible: false,
      dialogLongText: '',
      dialogLongTitle: '',
      fakeData: []
    }
  },
  methods: {
    // 获取报价一览.
    ...quotationAction(['getQuotationTable']),
    ...dictionaryAction(['getSubCertType']),

    // 格式化第一列: 竖向排列
    formatFirstColumn(s) {
      return s.split('').join('<br/>')
    },

    // 格式化长文本
    formatLongText(s, title) {
      let temp = s
      if (s.length <= 50) {
        return s + ''
      } else {
        // initEvent参数: 分别表示事件名称,是否可以冒泡,是否阻止事件的默认操作
        s = s.substring(0, 48) + '... '
        // ⛔ DO NOT DELETE BELOW CODE ⛔
        s = s + `<a href="#" style="text-decoration:none;color:#5AAAFA"
        onclick="javascript:
        var event = document.createEvent('Event');
        event.dialogText = '` + temp + `'
        event.dialogTitle = '` + title + `'
        event.initEvent('show-more', true, true);
        document.dispatchEvent(event)">更多</a>`
        return s
      }
    },

    // 格式化品牌型号，按照规则截断+...
    formatBrandSpeci(index, brand, speci) {
      // const cut = 17;
      let r =
        "<span style='color:#999999;font-size:12px'>品牌型号" +
        index +
        ':</span><br/>'
      brand = brand + ''
      speci = speci + ''

      r += "<span style='color:#454545;font-size:12px' >" + brand + '</span>'
      r += '<br/>'
      r += "<span style='color:#454545;font-size:12px'>" + speci + '</span>'

      // if (brand.length >= cut || speci.length >= cut || (brand + speci).length > cut) {
      //   r += "<span style='color:#454545;font-size:12px' title='" + brand + "'>" + (brand.length >= cut ? brand.substring(
      //     0, cut) + "..." : brand) + "</span>";
      //   r += "<br/>";
      //   r += "<span style='color:#454545;font-size:12px' title='" + speci + "'>" + (speci.length >= cut ? speci.substring(
      //     0, cut) + "..." : speci) + "</span>";
      // } else {
      //   r += "<span style='color:#454545;font-size:12px' title='" + (brand + (brand && speci ? " , " : "") + speci) +
      //     "'>" + (brand + (brand && speci ? " , " : "") + speci) + "</span>";
      // }
      return r
    },

    // 满足/部分满足 + 补充说明
    formatTwoLine(matchFlag, remark) {
      return (
        (matchFlag == 1
          ? "<span style='color:#FF4949;'>正偏离</span>"
          : "<span style='color:#2CA02C;'>无偏离</span>") +
        '<br/>' +
        (remark
          ? "<span style='color:#999999;font-size:12px;'>偏离说明: </span>" +
          "<span style='font-size:12px;' >" +
          remark +
          '</span>'
          : '')
      )
    },

    // 查看证件大图
    handleViewImage(event) {
      if (event.target.nodeName.toUpperCase() == 'IMG') {
        this.previewDialogVisible = true
        this.previewDialogImageUrl = event.target.src
      }
    },

    // 数据表合并方法
    mergeTableCell({ row, column, rowIndex, columnIndex }) {
      // 第一行数据
      if (rowIndex == 0) {
        // 第一列: 合并第一行的第1个和第二个单元格
        if (columnIndex == 0) {
          return {
            rowspan: 1,
            colspan: 2
          }
        } else if (columnIndex == 1) {
          // 第二列: 隐藏，保证后续不串行
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      } else {
        // 其他行数据
        if (columnIndex == 0) {
          for (let i = 0; i < this.api_mergeArray.length; i++) {
            if (rowIndex == this.api_mergeArray[i].rowIndex) {
              return {
                rowspan: this.api_mergeArray[i].rowSpan,
                colspan: 1
              }
            }
          }
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    },

    // 按照坐标系显示数据
    printData(row, n) {
      let res = this.api_metricsData[row + '-' + n]
      if (res) {
        if (Array.isArray(res)) {
          // Print nothing, no such case currently.
        } else if (typeof res === 'object') {
          if (res.certUrls) {
            if (res.certUrls.length > 0) {
              let r = ''
              for (let i = 0; i < res.certUrls.length; i++) {
                r +=
                  "<img style='cursor:pointer;padding-left:10px;height:30px;width:30px;' src='" +
                  res.certUrls[i] +
                  "'>"
              }
              return r
            } else {
              return '未上传'
            }
          } else {
            return '未上传'
          }
        } else {
          return res
        }
      } else {
        // return row + "-" + n
        return '无'
      }
    },

    getParentCertName(childCode) {
      // 子证件所在对象
      let childCert = this.subCertType.find(item => {
        return item.certificateTypeCode == childCode
      })

      // 返回父证件名称
      return this.subCertType.find(item => {
        return item.certificateTypeCode == childCert.parentType
      }).certificateTypeName
    }
  },
  mounted() {
    this.getQuotationTable({
      baseId: this.baseId
    }).then(() => {
      let g_rowIndex = 1

      const res = this.quotationTable

      // 显示开标一览表
      this.showComparisonFlag =
        res.biddingBaseListVOS.length > 0
      // const res = getOriginalDataModel().result;

      /**
       * shoppingList.projectItemsList: 购物清单信息.
       * sourceRule.supplierCertList: 需求单供应商资质要求.
       * biddingBaseListVOS: 报价数据列表: baseVo + biddingCertList+supplierCertAndDetail(.biddinglist)
       */

      const array_biddingBaseListVOS = res.biddingBaseListVOS

      // ######################################## SECTION_1 start ########################################
      // 报价供应商 - 报价列表 => TARGET_DATA_1: 供应商(api_suppliers)和第一行数据firstRow_sumBidding
      let firstRow_sumBidding = []
      for (let i = 0; i < array_biddingBaseListVOS.length; i++) {
        this.api_suppliers.push(
          array_biddingBaseListVOS[i].baseVo.supplierName
        )
        firstRow_sumBidding.push(array_biddingBaseListVOS[i].baseVo.sumBadding)
      }
      // ######################################## SECTION_1 finish ########################################

      // ######################################## SECTION_2 行头信息 start ########################################

      // ########## SECTION_2_0 数据第一行
      this.api_labels = [
        {
          id: '<span style="padding-left:16px;color:#000000;">总报价</span>',
          params: ''
        }
      ]

      // ########## SECTION_2_1 供应商资质

      // ♦♦♦♦♦♦ 清单列表-每一个需求清单原始要求数据 ♦♦♦♦♦♦
      const array_projectItemsList = res.shoppingList.projectItemsList

      // 循环每个清单, 得到行表头信息 && 合并规则 => TARGET_DATA_2:
      for (let i = 0; i < array_projectItemsList.length; i++) {
        let i_rowSpan = 5
        //  每个清单
        let each_item = array_projectItemsList[i]

        //  清单基础信息 - model
        let itemModel = each_item.projectItems

        //  物品名称
        let itemName = this.formatFirstColumn(
          // itemModel.quantity + itemModel.unit + "●" + convertTag(itemModel.materialName)
          itemModel.quantity + itemModel.unit + '●' + itemModel.materialName
        )

        //  参考品牌型号___ model
        let brandModel = each_item.projectItemBrandList

        // 参考品牌型号___ 获取所有品牌型号
        let res_brandModel = ''
        // 参考品牌型号___ 品牌型号的数量判断
        let brandSpeciCount = 0
        for (let c = 0; c < brandModel.length; c++) {
          if (brandModel[c].brand || brandModel[c].speci) {
            brandSpeciCount++
          }
        }
        // 参考品牌型号___ 品牌型号个数大于1
        if (brandSpeciCount > 1) {
          let brandSpeciIndex = 1
          for (let m = 0; m < brandModel.length; m++) {
            if (brandModel[m].brand || brandModel[m].speci) {
              res_brandModel +=
                this.formatBrandSpeci(
                  brandSpeciIndex,
                  convertTag(brandModel[m].brand),
                  convertTag(brandModel[m].speci)
                ) + '<br/>'
              brandSpeciIndex++
            }
          }
        } else {
          // 参考品牌型号___ 品牌型号个数小于等于1
          for (let m = 0; m < brandModel.length; m++) {
            if (brandModel[m].brand || brandModel[m].speci) {
              res_brandModel +=
                this.formatBrandSpeci(
                  '',
                  convertTag(brandModel[m].brand),
                  convertTag(brandModel[m].speci)
                ) + '<br/>'
            }
          }
        }
        // 参考品牌型号___ 表头拼接品牌型号
        this.api_labels.push({
          id: itemName,
          params:
            '<span style="color:#000000;">参考品牌型号:</span><br/>' +
            res_brandModel
        })

        //   供应商报价（单价）
        this.api_labels.push({
          id: itemName,
          params: '<span style="color:#000000;">供应商报价(单价)</span>'
        })

        //  技术参数及配置要求：
        this.api_labels.push({
          id: itemName,
          // params: '<span style="color:#333333">技术参数及配置要求:</span><br/>' +
          //   "<span style='color:#999999;font-size:12px' title='" + convertTag(itemModel.config) + "'>" +
          //   this.formatLongText(convertTag(itemModel.config)) +
          //   "</span>"
          params:
            '<span style="color:#333333">技术参数及配置要求:</span><br/>' +
            "<span style='color:#999999;font-size:12px'>" +
            this.formatLongText(convertTag(itemModel.config), '技术参数及配置要求') +
            '</span>'
        })

        //  售后服务要求：
        this.api_labels.push({
          id: itemName,
          // params: '<span style="color:#333333">质保与售后服务:</span><br/>' +
          //   "<span style='color:#999999;font-size:12px' title='" + convertTag(itemModel.afterSales) + "'>" + (itemModel.afterSales ?
          //     this.formatLongText(convertTag(itemModel.afterSales)) : "无") + "</span>"
          params:
            '<span style="color:#333333">质保与售后服务:</span><br/>' +
            "<span style='color:#999999;font-size:12px'>" +
            (itemModel.afterSales
              ? this.formatLongText(convertTag(itemModel.afterSales), '质保与售后服务')
              : '无') +
            '</span>'
        })

        //  证件部分
        let certModel = each_item.projectItemCertList
        for (let c = 0; c < certModel.length; c++) {
          this.api_labels.push({
            id: itemName,
            params:
              '<span style="color:#000000;">' +
              this.getParentCertName(certModel[c].certTypeCode) +
              ' - ' +
              certModel[c].certTypeName +
              '</span>'
          })
          i_rowSpan++
        }
        //  备注
        this.api_labels.push({
          id: itemName,
          params: '<span style="color:#000000;">投标备注</span>'
        })

        // 清单中的合并规则
        if (i == 0) {
          this.api_mergeArray.push({
            rowIndex: 1,
            rowSpan: i_rowSpan
          })
          g_rowIndex += i_rowSpan
        } else {
          this.api_mergeArray.push({
            rowIndex: g_rowIndex,
            rowSpan: i_rowSpan
          })
          g_rowIndex += i_rowSpan
        }
      }
      // ########## SECTION_2_2 供应商资质
      // 供应商资质证件(项目级别)
      const array_supplierCertList = res.sourceRule.supplierCertList
      for (var p = 0; p < array_supplierCertList.length; p++) {
        this.api_labels.push({
          id: this.formatFirstColumn('供应商证件'),
          params:
            this.getParentCertName(array_supplierCertList[p].certTypeCode) +
            ' - ' +
            array_supplierCertList[p].certTypeName
        })
      }
      this.api_mergeArray.push({
        rowIndex: g_rowIndex,
        rowSpan: array_supplierCertList.length
      })
      // ######################################## SECTION_2 finish ########################################

      // ######################################## SECTION_3 表内数据 start ########################################
      const col = this.api_suppliers.length

      // ########## SECTION_3_0 表内数据: 第一行
      for (let i = 0; i < col; i++) {
        this.api_metricsData[0 + '-' + i] = toRMB(firstRow_sumBidding[i])
      }

      // ########## SECTION_3_1 表内数据: 详情行
      let cert_row_index = 1
      //  表内数据: 详情行.
      const row_items = [
        'itemBrandRemark',
        'selfQuotation',
        'configMatch',
        'afterSalesMatch',
        'biddingItemCerts',
        'remark'
      ]

      //  循环所有清单详细 start
      for (let i = 0; i < array_biddingBaseListVOS.length; i++) {
        // 每一个供应商报价详情
        let each_supplier_bidding = array_biddingBaseListVOS[i]

        // 每一个供应商报价详情的详情列表：多个商品的报价集合
        let array_biddinglist =
          each_supplier_bidding.supplierCertAndDetail.biddinglist

        // 计数器
        let row_index = 1

        // 每一个供应商报价详情的详情列表 第m个商品的详情
        for (let m = 0; m < array_biddinglist.length; m++) {
          // 循环固定的行参数
          for (let n = 0; n < row_items.length; n++) {
            // 固定行:品牌
            if (row_items[n] == 'itemBrandRemark') {
              this.api_metricsData[row_index + '-' + i] =
                array_biddinglist[m].chooseBrand ||
                  array_biddinglist[m].chooseSpeci
                  ? convertTag(array_biddinglist[m].chooseBrand) +
                  ' ' +
                  convertTag(array_biddinglist[m].chooseSpeci)
                  : convertTag(array_biddinglist[m].itemBrandRemark)
              row_index++
            } else if (row_items[n] == 'selfQuotation') {
              // 固定行:报价
              this.api_metricsData[row_index + '-' + i] = toRMB(
                array_biddinglist[m].selfQuotation
              )
              row_index++
            } else if (row_items[n] == 'configMatch') {
              // 固定行:配置参数
              this.api_metricsData[row_index + '-' + i] = this.formatTwoLine(
                convertTag(array_biddinglist[m].configMatch),
                convertTag(array_biddinglist[m].configRemark)
              )

              row_index++
            } else if (row_items[n] == 'afterSalesMatch') {
              // 固定行:售后
              this.api_metricsData[row_index + '-' + i] = this.formatTwoLine(
                convertTag(array_biddinglist[m].afterSalesMatch),
                convertTag(array_biddinglist[m].afterSalesRemark)
              )

              row_index++
            } else if (row_items[n] == 'biddingItemCerts') {
              // 动态行：商品资质证件
              let certs = array_biddinglist[m].biddingItemCerts
              for (let cer = 0; cer < certs.length; cer++) {
                this.api_metricsData[row_index + '-' + i] = certs[cer]
                row_index++
              }
            } else if (row_items[n] == 'remark') {
              // 固定行:报价备注
              this.api_metricsData[row_index + '-' + i] = convertTag(
                array_biddinglist[m].remark
              )
              row_index++

              // 得到资质证件的行index
              cert_row_index = row_index
            }
          }
        }
      }
      //  循环所有清单详细 finish

      // ########## SECTION_3_2 表内数据: (前提条件)项目单对供应商资质证件有要求的情况下

      if (array_supplierCertList.length > 0) {
        /**
         * cert_init_row: 保证循环行恒定不变
         * 20-0↓    ↓20-1   ↓20-2
         * 21-0↓  → ↓21-1 → ↓21-2
         * 22-0↓    ↓22-1   ↓22-2
         */
        const cert_init_row = cert_row_index
        // 循环供应商报价实体_数组
        for (let col = 0; col < array_biddingBaseListVOS.length; col++) {
          let cert_row_index = cert_init_row
          // 当前供应商的资质证件, 如果为空则不输出
          let array_currentSupplierCerts = array_biddingBaseListVOS[col]
            .biddingCertList
            ? array_biddingBaseListVOS[col].biddingCertList
            : []
          // 循环 当前供应商的每个资质证件
          for (let i = 0; i < array_currentSupplierCerts.length; i++) {
            // 当前循环到的证件赋值
            this.api_metricsData[cert_row_index + '-' + col] =
              array_currentSupplierCerts[i]
            // 参见 资质证件 start 处 注释
            cert_row_index++
          }
        }
      }
      // ######################################## SECTION_3 finish ########################################
      this.tableLoading = false
    })
  },

  created() {
    this.getSubCertType()
    document.addEventListener('show-more', (e) => {
      // console.info(e)
      this.dialogLongTextVisible = true
      this.dialogLongText = e.dialogText
      this.dialogLongTitle = e.dialogTitle
    }, false)
  },

  computed: {
    ...mapGetters(['quotationTable', 'subCertType'])
  }
}
</script>

<style lang="scss" scoped>
.quotationTable {
  margin-top: 20px;
  .listTitle {
    font-size: $font-size-h3;
    margin-bottom: 10px;
  }
  .split-line {
    color: $color-font-val-enabled;
    opacity: 0.2;
  } // ::-webkit-scrollbar {
  //   width: 2px;
  // }
  .empty-section {
    .el-table {
      border: 0px solid $color-table-th;
    }
  }
  .pending-prefix {
    color: $color-primary;
    font-size: $font-size-h3;
  }
  .style-span-bp {
    font-weight: 600;
  }
  .style-span-info {
    font-size: $font-size-body-small;
    color: $color-font-val-enabled;
  }
  .style-table {
    width: 100%;
  }
  .style-detail {
    font-weight: 600;
  }
}
</style>
