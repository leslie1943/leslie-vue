<template>
<div style="text-align:center;">
    <div class="pic-background">
      <div class="text">test</div>
    </div>
    <!-- Back -->
    <to-home></to-home>
  </div>
</template>

<script>
export default {
  name:"",
  data(){
    return {
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
