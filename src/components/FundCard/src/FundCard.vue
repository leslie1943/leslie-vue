<template>
  <div class="fundcard-container">
    <el-row style="font-size:22px;">
      本文关键字 ":class" / ":style"
    </el-row>
    <hr>
     <el-row style="font-size:22px;">
       obj_A:{
        name:"suzhen"
      },
      obj_B:{
        age:20
      },
      obj_C:{},<br>
       this.obj_C = {...this.obj_A, ...this.obj_B} <br>
      this.obj_C = {{obj_C}}
    </el-row>
    <hr>
    <el-row >
      <el-col :span="8" v-for="(card, index) in cardList" :key="index">
        <el-card  :body-style="{ padding: '0px' }">
          <div class="card">
            <div class="rankBg">
              <div class="rank">{{index+1}}</div>
            </div>
            <div v-show="!disabled" class="close" @click="handleClose">x</div>
            <div class="card-content">
              <div :class="!disabled ? 'editTitle' : 'viewTitle'">{{card.fundName}}</div>
              <div :class="!disabled ? 'editTitle' : 'viewTitle'">经费编号: {{card.fundNo}}</div>
              <div :class="!disabled ? 'editTitle' : 'viewTitle'">申购金额: {{card.fundAccount}}元</div>
              <div :class="!disabled ? 'editTitle' : 'viewTitle'">成交金额: {{card.totalMoney}}</div>
              <div :style="!disabled ? editStyle : viewStyle">测试Style文字</div>
            </div>
          </div>
        </el-card>
        </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  name: "FundCard",
  data(){
    return {
      obj_A:{
        name:"suzhen"
      },
      obj_B:{
        age:20
      },
      obj_C:{

      },
      disabled: false,
      cardList:[
        {fundName:"华西医院救助项目",fundNo:"223011313131312",fundAccount:1000,totalMoney:1000},
        {fundName:"华西医院救助项目",fundNo:"223011313131312",fundAccount:1000,totalMoney:1000},
      ],
      editStyle:{
        color: '#0E66C1',
        fontSize: '14px;'
      },
      viewStyle:{
        color: '#B3257C',
        fontSize: '12px;'
      }
    }
  },
  methods:{
    handleClose(){
      this.disabled = !this.disabled;
    }
  },
  created(){
    this.obj_C = {...this.obj_A, ...this.obj_B}
  }
};
</script>
<style lang="scss">
.fundcard-container{
  .card {
    position: relative;
    border: 1px solid #C0CCDA;
    .rankBg {
      position: absolute;
      transform: rotate(-45deg);
      width: 72px;
      top: -17px;
      left: -23px;
      height: 33px;
      background-color: #DEE2E7;
      text-align: center;
    }
    .rank {
      transform: rotate(45deg);
      top: 26px;
      position: relative;
      padding-right:40px;
    }
    .close {
      cursor: pointer;
      position: absolute;
      right: 0;
      top: 0;
      padding-right: 15px;
      color: #20A0FF;
      font-size: 16px;
    }
    .card-content {
      padding: 5px 30px;
    }
    .editTitle{
      font-size: 20px;
      color:#0E66C1;
    }
    .viewTitle{
      font-size: 22px;
      color:grey;
    }
    
  }
}
</style>
