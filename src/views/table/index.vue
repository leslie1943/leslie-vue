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
              :data="sysData"
              :span-method="arraySpanMethod"
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

              <el-table-column v-for="(name,n) in names" :key="n"
                align="center"
                header-align="center"
                :label="name"
                width="180">
                <template slot-scope="scope">
                   <span v-html="printData(scope.$index, n)"></span>
                    <!-- {{scope.$index + "-" + n}} -->
                </template>
              </el-table-column>

            </el-table>

           
          </el-collapse-item>
      </el-collapse>
      <hr>
      <el-button type="primary" size="small" @click="goHome">首页</el-button>
    </div>
</template>

<script>
import { getTableData } from "./overview";

export default {
  data() {
    return {
      tableData: getTableData().pureData,
      sysData: getTableData().sysData,
      colSpans: getTableData().colSpans,
      names: getTableData().names,
      metricsData: getTableData().metricsData
    };
  },
  methods: {
    goHome() {
      this.$router.replace("/");
    },
    // ############################################################# Element table #############################################################
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
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
         let i = 0;
         if(columnIndex === 0){
           if((rowIndex - 1) % this.colSpans[i] === 0){
             i++;
             return {
              rowspan: this.colSpans[i - 1],
              colspan: 1
            };
           }else{
              return {
                rowspan: 0,
                colspan: 0
            };
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
  }
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
