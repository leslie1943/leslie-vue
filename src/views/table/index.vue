<template>
    <div style="text-align:center;">
        <el-collapse>
          <el-collapse-item name="1" title="报价比较数据-自定义table">
            <div style="width:100%;">
            <!-- 循环table -->
            <table v-for="(table,t) in tableData.tables" :key="t" class="ground-route-table">
              <thead>
                <!-- #################### -->
                <tr v-if="t===0" style="background-color:#EBEEF5;">
                  <th width="20%" colspan="2">采购需求</th>
                  <th v-for="(name,n) in tableData.names" :key="n">{{name}}</th>
                </tr>
                <!-- #################### -->
                <tr v-else>
                    <th width="20%" colspan="2"> </th>
                    <th v-for="(name,n) in tableData.names" :key="n"></th>
                </tr>
              </thead>

              <tbody>
                <!-- #################### -->
                <tr v-if="t===0">
                   <td width="20%" style="background-color:#EBEEF5;" colspan="2" ><strong>总报价</strong></td>
                   <td v-for="(price,p) in tableData.totalPrice" :key="p">{{price}}</td>
                </tr>

                <!-- #################### -->
                <tr v-for="(row,r) in table.rows" :key="r">
                  <td 
                    width="2%"
                    style="background-color:#EBEEF5;" 
                    v-if="r===0" :rowspan="table.rowspan" 
                    v-html="printDemandFirst(row.demandName,table.quantity,table.unit)">
                  </td>

                  <td
                    width="18%"
                    :style="{'text-align':'left','background-color': r < table.rowspan - 1 ? '' :'#EBEEF5'}" 
                    v-html="printdemandPara(row.demandPara,r)">
                  </td>

                  <td 
                    style="text-align:center;" 
                    v-for="(provider,p) in row.demandProviders" 
                    :key="p" 
                    v-html="printdemandProviders(provider)">
                  </td>
                </tr>

              </tbody>

            </table>

            </div>
          </el-collapse-item>


          <el-collapse-item name="2" title="报价比较数据-element table">

            <el-table
              :data="labels"
              :span-method="mergeTableCell"
              border
              style="width: 100%"
              >

              <el-table-column
              align="center"
              header-align="center"
              fixed
                prop="id"
                label="采购需求"
                width="180">
              </el-table-column>

              <el-table-column
                align="left"
                header-align="center"
                fixed
                prop="params"
                label="采购详细"
                width="180">
              </el-table-column>

              <el-table-column v-for="(supplier,n) in suppliers" :key="n"
                align="center"
                header-align="center"
                :label="supplier"
                width="180">
                <template slot-scope="scope">
                   <span :id="scope.$index + '-' + n" v-html="printData(scope.$index, n)"></span>
                </template>
              </el-table-column>

            </el-table>
          </el-collapse-item>
      </el-collapse>
      <hr class="split-line">
      报价供应商：{{api_suppliers}}
      <hr class="split-line">
      行头信息：{{api_labels}}
      <hr class="split-line">
      合并规则：{{api_mergeArray}}
      <hr class="split-line">
      表内数据：{{this.api_metricsData}}
      <hr class="split-line">
      <el-button type="primary" size="small" @click="goHome">首页</el-button>
    </div>
</template>

<script>
import { getTableData } from "./overview";
import { getApiData } from "./apiData";

export default {
  data() {
    return {
      tableData: getTableData().pureData,

      api_suppliers: [], 
      api_labels: [],
      api_mergeArray:[],
      api_metricsData:{},

      //
      labels: getTableData().labels,
      suppliers: getTableData().suppliers,
      metricsData: getTableData().metricsData,
      mergeArray: getTableData().mergeArray,
    };
  },
  methods: {
    goHome() {
      this.$router.replace("/");
    },
    // ############################################################# Element table #############################################################
    mergeTableCell({ row, column, rowIndex, columnIndex }) {
     //第一行数据
      if (rowIndex === 0) {
        //第一列: 合并第一行的第1个和第二个单元格
        if(columnIndex === 0){
          return {
            rowspan: 1,
            colspan: 2
          }
        }
        // 第二列: 隐藏，保证后续不串行
        else if(columnIndex === 1){
          return {
            rowspan:0,
            colspan:0,
          }
        }
      }
      //其他行数据
      else {
        if (columnIndex === 0) {
          for(let i = 0; i<this.mergeArray.length;i++){
            if(rowIndex === this.mergeArray[i].rowIndex){
              return {
                rowspan: this.mergeArray[i].rowSpan,
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

    printData(row,n){
      let res = this.metricsData[row + "-" + n];
      if(res){
        if(Array.isArray(res)){
          let r = "";
          for(let i = 0; i<res.length; i++){
            r += "<img style='padding-left:10px;height:40px;width:40px;' src='"+res[i]+"'>";
          }
          return r;
        }else if(typeof res === "object"){
          
        }else{
          return res;
        }
      }else{
        return row + "-" + n
      }
    },

    // ############################################################# System table #############################################################
    printDemandFirst(data, count, unit) {
      let res = "";
      res +=
        count +
        "<br/>" +
        unit.split("").join("<br/>") +
        "<br/>" +
        "●" +
        "<br/>";
      res += data.split("").join("<br/>");
      return res;
    },

    // 详细参数
    printdemandPara(data, index) {
      let res = "";
      if (index === 0) {
        res =
          "<strong><span>品牌、规格型号:<br>" +
          data.join("<br/>") +
          "</span></strong>";
        return res;
      } else if (index === 1) {
        res =
          "<strong><span>技术参数及设置要求:<br>" +
          data.join("<br/>") +
          "</span></strong>";
        return res;
      } else if (index === 2) {
        res =
          "<strong><span>售后服务要求:<br>" +
          data.join("<br/>") +
          "</span></strong>";
        return res;
      } else {
        return "<strong>" + data + "</strong>";
      }
    },

    // 报价详细
    printdemandProviders(data) {
      if (Array.isArray[data]) {
      } else if (typeof data === "object") {
        let res = "";
        if (data.flag === 1) {
          res = "<span style='color:#00cc00'>" + "√  满足" + "</span>";
          res += "<hr class='split-line'>";
          res += "<span>" + data.desc + "</span>";
          return res;
        } else if (data.flag === 2) {
          res = "<span style='color:#ff0000;'>" + "×  不满足" + "</span>";
          res += "<hr class='split-line'>";
          res += "<span>" + data.desc + "</span>";
          return res;
        } else if (data.flag === 3) {
          res = "<span>" + data.item + "</span>";
          res += "<hr class='split-line'>";
          res += "<span>" + data.desc + "</span>";
          return res;
        }
      } else if (typeof data === "string") {
        return data;
      }
    }
  },

// ############################################################# Data process #############################################################

  mounted() {
    let g_rowIndex = 1;
    
    // api_suppliers , api_labels , api_mergeArray , api_metricsData
    const res = getApiData().result;

    // ♦♦♦♦♦♦ 报价数据 ♦♦♦♦♦♦
    const array_biddingBaseListVOS = res.biddingBaseListVOS;

    // 报价供应商 - 报价列表
    let firstRow_sumBidding = [];
    for(let i = 0; i < array_biddingBaseListVOS.length;i++){
      this.api_suppliers.push(array_biddingBaseListVOS[i].baseVo.supplierName);
      firstRow_sumBidding.push(array_biddingBaseListVOS[i].baseVo.sumBadding);
    }
    
    // 行头信息
    this.api_labels = [{id: '总报价',params: ''}];

    // ♦♦♦♦♦♦ 清单列表-每一个需求清单数据 ♦♦♦♦♦♦
    const array_projectItemsList = res.shoppingList.projectItemsList;

    // 循环每个清单，得到行表头信息 && 合并规则
    for(let i = 0; i < array_projectItemsList.length;i++){
      let i_rowSpan = 5;
      //  ⭐⭐⭐ 每个清单 ⭐⭐⭐
      let each_item = array_projectItemsList[i];
      
      //  清单基础信息 - model
      let itemModel = each_item.projectItems;

      //  物品名称
      let itemName = itemModel.materialName;

      //  参考品牌型号
      let brandModel = each_item.projectItemBrandList;
      let res_brandModel = "";
      for(let m = 0; m < brandModel.length; m++){
        res_brandModel += "品牌型号" + m +"：" + brandModel[m].brand + " - " + brandModel[m].spec;
      }
      this.api_labels.push( {id: itemName, params: `参考品牌型号:` + res_brandModel});


      //   供应商报价（单价）
      this.api_labels.push( {id: itemName, params: `供应商报价（单价）`});

      //  技术参数及配置要求：
      this.api_labels.push( {id: itemName, params: `技术参数及配置要求：` + itemModel.config});

      //  售后服务要求：
      this.api_labels.push( {id: itemName, params: `售后服务要求：` + itemModel.afterSales});

      //  ⭐⭐证件部分⭐⭐
      let certModel = each_item.projectItemCertList;
      for(let c = 0; c < certModel.length; c++){
        this.api_labels.push( {id: itemName, params: certModel[c].certTypeCode + " - " + certModel[c].certTypeName});
        i_rowSpan++;
      }
      //  投标备注
      this.api_labels.push( {id: itemName, params: `投标备注`});

      // 清单中的合并规则
      if(i === 0){
        this.api_mergeArray.push( {rowIndex:1, rowSpan : i_rowSpan});
        g_rowIndex += i_rowSpan; 
      }else{
        this.api_mergeArray.push( {rowIndex: g_rowIndex, rowSpan : i_rowSpan});
        g_rowIndex += i_rowSpan; 
      }
    }

    // ######################################################## 供应商资质
    //  ♦♦♦♦♦♦ 证件数据 ♦♦♦♦♦♦
    const supplierCertList = res.sourceRule.supplierCertList;
    for(var p = 0; p < supplierCertList.length; p++){
      this.api_labels.push( {id: "供应商证件", params: supplierCertList[p].certTypeCode + " - " + supplierCertList[p].certTypeName});
    }
    this.api_mergeArray.push( {rowIndex: g_rowIndex, rowSpan : supplierCertList.length});

    // ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ 表内数据 ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
    const col = this.api_suppliers.length;

    // 💗💗💗💗💗💗💗💗💗 表内数据: 第一行. 💗💗💗💗💗💗💗💗💗
    for(let i = 0 ;i < col; i++){
      this.api_metricsData[0 + "-" + i] = firstRow_sumBidding[i];
    }

    let cert_row_index = 1;

    // 💗💗💗💗💗💗💗💗💗 表内数据: 详情行. 💗💗💗💗💗💗💗💗💗
    const row_items = ["itemBrandRemark","selfQuotation","configMatch","afterSalesMatch","biddingItemCerts","remark"];
    
    // 💗💗💗 循环所有清单详细 start 💗💗💗
    for(let i = 0; i < array_biddingBaseListVOS.length;i++){
      
      // 每一个供应商报价详情
      let each_supplier_bidding = array_biddingBaseListVOS[i];

      // 每一个供应商报价详情的详情列表：多个商品的报价集合
      let array_biddinglist = each_supplier_bidding.supplierCertAndDetail.biddinglist;

      //计数器
      let row_index = 1;

      // 每一个供应商报价详情的详情列表 第m个商品的详情
      for(let m = 0; m < array_biddinglist.length; m++){
        // 循环固定的行参数
        for(let n = 0; n < row_items.length; n++){
          //固定行:品牌
          if(row_items[n] === "itemBrandRemark"){
            this.api_metricsData[row_index + "-" + i] = array_biddinglist[m].itemBrandRemark;
            row_index++;
          }
          //固定行:报价
          else if(row_items[n] === "selfQuotation"){
            this.api_metricsData[row_index + "-" + i] = array_biddinglist[m].selfQuotation;
            row_index++;
          }
          //固定行:配置参数
          else if(row_items[n] === "configMatch"){
            this.api_metricsData[row_index + "-" + i] = array_biddinglist[m].configMatch;
            row_index++;
          }
          //固定行:售后
          else if(row_items[n] === "afterSalesMatch"){
            this.api_metricsData[row_index + "-" + i] = array_biddinglist[m].afterSalesMatch;
            row_index++;
          }
          //动态行：商品资质证件
          else if(row_items[n] === "biddingItemCerts"){
            let certs = array_biddinglist[m].biddingItemCerts
            for(let cer = 0; cer < certs.length; cer++){
              this.api_metricsData[row_index + "-" + i] = certs[cer];
              row_index++;
            }
          }
          //固定行:报价备注
          else if(row_items[n] === "remark"){
            this.api_metricsData[row_index + "-" + i] = array_biddinglist[m].remark;
            row_index++;
            
            //得到资质证件的行index
            cert_row_index = row_index;
          }
        }
      }
    }
    // 💗💗💗 循环所有清单详细 finish 💗💗💗

    // 💗💗💗 资质证件 💗💗💗
   
    // 供应商资质证件 - 行属性
    const last_some_index = cert_row_index;

    for(let e = 0; e < array_biddingBaseListVOS.length; e++){
      let cert_row_index = last_some_index;
      //当前供应商的资质证件-多行
      let array_supplierCerts = array_biddingBaseListVOS[e].biddingCertList;
      for(let f = 0; f < array_supplierCerts.length;f++){
        this.api_metricsData[cert_row_index + "-" + f] = array_supplierCerts[f];
        cert_row_index++;
      }
    }
  },
};
</script>

<style >
.ground-route-table {
  width: 100%;
  border: 1px solid #dfe6ec;
  border-collapse: collapse;
  table-layout: fixed;
  word-break: break-all;
}
.ground-route-table td {
  border: 1px solid #dfe6ec;
  word-wrap: break-word;
}

.split-line {
  color: #9c9c9c;
  opacity: 0.2;
}
</style>
