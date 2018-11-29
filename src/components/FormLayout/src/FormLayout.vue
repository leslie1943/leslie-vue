<template>
  <div class="formLayout-container" :style="layoutMarginTop">

      <el-row>
        <!-- 左边标题区域 -->
        <div class="formLayout-left">
          <el-col class="left-column" :span="3">
            <span v-if="leftTitle" class="left-prefix">▎</span>
            <span v-if="leftTitle" class="left-text">{{leftTitle}}</span>
          </el-col>
        </div>

        <!-- 右边表单内容区域 -->
        <div class="formLayout-right">
          
          <el-col :span="21" class="right-row">
            <slot name="right"></slot>

            <!-- ########### 底分割线 ########### -->
            <hr>
          </el-col>
        </div>
      
      </el-row>
  </div>
</template>

<script>
export default {
  name: "FormLayout",
  props:{
    leftTitle: String,
    marginTop: String,
  },
  computed:{
    layoutMarginTop(){
      return this.marginTop ? 'margin-top:'+ this.marginTop+';' : 'margin-top:20px;';
    }
  }
};
</script>
<style lang="scss">
.formLayout-container{
  
  // 左侧样式
  .formLayout-left{
    .left-column{
      margin-top: 10px;
    }
    .left-prefix{
      color: rgb(90, 170, 250);
      font-size: 16px;
    }
    .left-text{
      font-size: 16px;
      color: #353535;
      font-weight:bold;
    }
  }

  //右侧样式
  .formLayout-right{
    margin-top: 5px;
    .right-row {
      .el-row {
        margin-bottom: 6px;
      }
    }
  }
  
}
</style>
