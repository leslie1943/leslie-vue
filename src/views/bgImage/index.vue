<template>
<div style="text-align:center;">
    <!-- <div class="pic-background">
      <div class="text">test</div>
    </div>
    <hr> -->

    <div>
      <viewer :images="attachments">
        <img style="width:100px;height:100px;margin-left:20px;" v-for="(item,index) in attachments" :src="item" :key="index">
      </viewer>
    </div>

  </div>
</template>

<script>
export default {
  name:"",
  data(){
    return {
      attachments: ['https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4234257934,4023069950&fm=11&gp=0.jpg','https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2450135132,223357671&fm=11&gp=0.jpg','https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1211825820,3533057619&fm=11&gp=0.jpg','https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=165417048,465766309&fm=11&gp=0.jpg','https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=900672615,541234079&fm=11&gp=0.jpg'] 
    }
  },
}
</script>

<style lang="scss">
  .text{
    font-size: 40px;
    color: yellow;
  }
  .pic-background{
    text-align: center;
    background-image: url("~@/assets/good.png");
    background-repeat: no-repeat;
    height: 654px;
    width: 1200px;
  }
</style>
