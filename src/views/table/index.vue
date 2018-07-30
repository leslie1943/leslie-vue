<template>
    <div style="text-align:center;">
        <el-collapse>
          <el-collapse-item name="1" title="报价比较数据">

            <table width="auto" v-for="(table,t) in tableData.tables" :key="t" class="ground-route-table">
              <thead>
                <tr v-if="t===0" style="background-color:#409EFF;">
                  <td width="5%">采购需求</td>
                  <td width="25%">采购详细</td>
                  <td v-for="(name,n) in tableData.names" :key="n">{{name}}</td>
                </tr>

                <tr v-else>
                    <td width="5%"> </td>
                    <td width="25%"> </td>
                    <td v-for="(name,n) in tableData.names" :key="n"></td>
                </tr>
              </thead>

              <tbody>
                <tr v-for="(row,r) in table.rows" :key="r">
                  <td v-if="r===0" :rowspan="table.rowspan">{{row.demandName}}</td>
                  <td style="text-align:left;">{{row.demandPara}}</td>
                  <td style="text-align:left;" v-for="(provider,p) in row.demandProviders" :key="p">{{provider}}</td>
                </tr>
              </tbody>

            </table>
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
      tableData: getTableData()
    };
  },
  methods:{
    goHome(){
      this.$router.replace('/');
    }
  }
};
</script>

<style scoped>
  .ground-route-table,
  .ground-route-table-samll {
    width: 100%;
    border: 1px solid #dfe6ec;
    border-collapse: collapse;
    table-layout:fixed;
    word-break:break-all;
  }
  .ground-route-table td{
    border: 1px solid #dfe6ec;    
  }

  
</style>
