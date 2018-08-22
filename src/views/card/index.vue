<template>
    <div>
    <br><br><br><hr>
    <el-row>
      <el-col :offset="4" :span="16">
        <el-card >
          <!-- 图片+秒数+上次登录时间 -->
          <el-row>
            <el-col :span="2">
              <img  src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1589877540,728185689&fm=27&gp=0.jpg" style="height:60px;width:60px;">
            </el-col>

            <el-col :span="15">
              <div><span style="font-size: 20px;color: #333333;">四川大学华西医院</span></div>
              <div style="margin-top: 14px;">
                <span style="font-size: 14px;color: #333333;">科室-刘培江</span>  
                <span style="font-size: 12px;color: #999999;">上次登录时间：2018-05-29  10：23：00</span>
              </div>
            </el-col>
          </el-row>

           <!-- 标签 -->
           <el-row>
             <el-col :offset="2" :span="20" style="margin-top: 14px;">
               <el-button type="primary" size="mini">管理员</el-button>
               <el-button type="primary" size="mini">物资设备部</el-button>
               <el-button type="primary" size="mini">科室</el-button>
               <el-button type="primary" size="mini">科口</el-button>
             </el-col>
           </el-row>

        </el-card>
      </el-col>
    </el-row>
    <br><br>
    <!-- 数据模块 -->
      <el-row :gutter="14">
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
    <!-- 待办事项 -->
    <br><br>
    <el-row>
      <el-col :offset="4" :span="16">
        <el-card >
          <el-row>
            <span style="color:#5aaafa;font-size: 16px;">▎</span>
            <span class="title-left">待办事项</span>
          </el-row>

          <el-row style="margin-top:10px;margin-left:20px">
            有<strong> 2 </strong>条待处理的采购单记录,点击<el-button type="text" @click="handdleGoHome">查看</el-button>
          </el-row>

          <el-row style="margin-top:10px;margin-left:20px">
            有<strong> 1 </strong>条待处理的申购单记录,点击<el-button type="text" @click="handdleGoHome">查看</el-button>
          </el-row>

          <el-row style="margin-top:10px;margin-left:20px">
            有<strong> 5 </strong>条待审核的供应商记录,点击<el-button type="text" @click="handdleGoHome">查看</el-button>
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

<style >
  .box-card {
    width: 240px;
    height: 100px;
  }
  .title-left{
    font-weight: bold;
  }

</style>
