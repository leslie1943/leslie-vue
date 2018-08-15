<template>
    <div>
    <!-- <div style="text-align:center;"> -->
        <el-card class="box-card" :style="currentBottomColor">
          <div><span class="card-title">{{cardTitle}}</span></div>
          <div><span class="card-show-text">{{cardShowText}}</span> <span>{{cardShowUnit}}</span></div>
        </el-card>
    </div>
</template>

<script>
export default {
    name:"SimpleCard",
    props:{
        cardBottomColor :String,
        cardTitle :String,
        cardShowText :String,
        cardShowUnit :String,
    },
    computed:{
        currentBottomColor(){
            return "border-bottom:8px solid " + this.cardBottomColor;
        }
    }
};
</script>

<style>
  .box-card {
    width: 240px;
    height: 100px;
  }
  .card-title{
    font-size:16px;
    color: #303133;
    font-weight:bold;
  }
  .card-show-text{
      font-size:32px;
      color: #303133;
      font-weight:bold;
      line-height:57px;
  }
</style>
