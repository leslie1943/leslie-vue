<template>
    <div>
    <br><br><br><hr>
    <!-- 数据模块 -->
     <el-row :gutter="12">
        <el-col :offset="4" :span="4">
          <SimpleCard cardBottomColor="#F56C6C" cardTitle="已发布需求" cardShowText="20" cardShowUnit="笔"></SimpleCard>
        </el-col>

        <el-col :span="4">
          <SimpleCard cardBottomColor="#FF9E00" cardTitle="已成交" cardShowText="12" cardShowUnit="笔"></SimpleCard>
        </el-col>

        <el-col :span="4">
          <SimpleCard cardBottomColor="#90D24D" cardTitle="成交率" cardShowText="60%" cardShowUnit=""></SimpleCard>
        </el-col>

        <el-col :span="4">
          <SimpleCard cardBottomColor="#4486F6" cardTitle="成交金额" cardShowText="4.2" cardShowUnit="万元"></SimpleCard>
        </el-col>
    </el-row>
    <!-- 数据列表 -->
    <br><br><br>
    <el-row>
      <el-col :offset="4" :span="16">
        <el-card >
          <el-row>
            <span style="color:#5aaafa;font-size: 16px;">▎</span>
            <span class="title-left">待办事项</span>
          </el-row>

          <el-row style="margin-top:10px;margin-left:20px">
            有2条待处理的采购单记录，点击<el-button type="text" @click="handdleGoHome">查看</el-button>
          </el-row>

          <el-row style="margin-top:10px;margin-left:20px">
            有1条待处理的申购单记录，点击<el-button type="text" @click="handdleGoHome">查看</el-button>
          </el-row>

          <el-row style="margin-top:10px;margin-left:20px">
            有5条待审核的供应商记录，点击<el-button type="text" @click="handdleGoHome">查看</el-button>
          </el-row>

        </el-card>
      </el-col>
    </el-row>

  <hr>
  <div style="text-align:center;"><el-button type="primary" size="small" @click="handdleGoHome">首页</el-button></div>
  </div>
</template>

<script>
import SimpleCard from '@/components/work-bench/simple-card';
export default {
  components:{SimpleCard},
  methods:{
    handdleGoHome() {
      this.$router.replace("/");
    },
  }
};
</script>

<style>
  .box-card {
    width: 240px;
    height: 100px;
  }
</style>
