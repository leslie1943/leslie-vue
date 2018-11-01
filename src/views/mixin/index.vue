<template>
<div style="text-align:center;">
  
  <div><el-button type="success" @click="showSuccess">show Moon be defined in mixin</el-button></div>
  <div>show success 被定义在本组件中, 调用的数据源-Moon 被定义在混入对象中.</div>
  <hr>
  <div><el-button type="info" @click="showInfo">show Leslie be defined in parent</el-button></div>
  <div>show info 被定义在混入对象中, 调用的数据源-Leslie被定义在本组件中.</div>
  <hr>
  <div><el-button type="danger" @click="showError">show Sun be defined in parent</el-button></div>
  <div>show error 被定义在混入对象中, 调用的数据源-Sun 被定义在本组件中.</div>
  <hr>
  <div>被定义在本组件中的data.leslie{{this.$data.leslie}}</div>
  <div>被定义在混入对象的data.moon{{this.$data.moon}}</div>
</div>
</template>

<script>
import mixMoon from './mixMoon';
import mixSun from './mixSun';

export default {
  // 混入模式,两个对象键名冲突时，取组件对象的键值对
  // 混入对象 vs 组件 => 两个对象键名冲突时，取组件对象的键值对
  mixins: [mixMoon,mixSun],
  data(){
    return {
      leslie:{
        name: "suzhen",
        age: 20,
        company: 'ViewHigh'
      }
    }
  },
  methods:{
    showSuccess(){
      this.$message({
        type:'success',
        message: this.moon,
      });
    },
  }
}
</script>

