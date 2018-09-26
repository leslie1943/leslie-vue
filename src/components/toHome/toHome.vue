<template>
<div>
  <hr>
  <div style="text-align:center;"><el-button type="primary" size="small" @click="handdleGoHome">首页</el-button></div>
  </div>
</template>

<script>

export default {
  name: "toHome",
  methods:{
    handdleGoHome() {
      this.$router.replace("/");
    },
  }
};
</script>