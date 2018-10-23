<template>
<div class="temp-main-container">
  <div style="padding-top:20px;padding-bottom:20px;">
    <el-table
      :data="tableData"
      style="width: 100%">

      <el-table-column
        prop="field1"
        label="申购单"
        width="180">
      </el-table-column>

      <el-table-column
        prop="field2"
        label="申请单位/联系人"
        width="180">
      </el-table-column>

      <el-table-column
        prop="field3"
        label="申请时间">
      </el-table-column>

      <el-table-column
        prop="field4"
        label="终审时间">
      </el-table-column>

      <el-table-column
        prop="field5"
        label="预算">
      </el-table-column>

      <el-table-column
        prop="field6"
        label="采购方式">
      </el-table-column>

      <el-table-column
        prop="field7"
        label="申购进度">
      </el-table-column>

      <el-table-column
        prop="field8"
        label="采购单">
      </el-table-column>

      <el-table-column
        prop="field9"
        label="采购状态">
      </el-table-column>

      <el-table-column
        prop="field10"
        label="操作">
      </el-table-column>

    </el-table>
  </div>
  <to-home></to-home>
</div>
</template>

<script>
export default {
    data() {
      return {
        tableData: [{
            field1: '2016-05-02',
            field2: '王小虎',
            field3: '上海市普陀区金沙江路 1518 弄'
          }, {
            field1: '2016-05-04',
            field2: '王小虎',
            field3: '上海市普陀区金沙江路 1517 弄'
          }, {
            field1: '2016-05-01',
            field2: '王小虎',
            field3: '上海市普陀区金沙江路 1519 弄'
          }, {
            field1: '2016-05-03',
            field2: '王小虎',
            field3: '上海市普陀区金沙江路 1516 弄'
          }]
      }
    },
  }
</script>

<style lang="scss">
  .temp-main-container{
    .el-table th{
      background: #e1effd;
    }
  }
</style>
