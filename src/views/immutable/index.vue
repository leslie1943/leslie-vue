<template>
    <div style="text-align:center;">
        <el-collapse v-model="activeNames" >
            <el-collapse-item title="Immutable data" name="1">
                <p>Immutable Data 就是一旦创建,就不能再被更改的数据.</p> 
                <p>对 Immutable 对象的任何修改或添加删除操作都会返回一个新的 Immutable 对象..</p> 
                <p>Immutable 实现的原理是 Persistent Data Structure（持久化数据结构）,</p> 
                <p>也就是使用旧数据创建新数据时,要保证旧数据同时可用且不变.</p> 
                <p>同时为了避免 deepCopy 把所有节点都复制一遍带来的性能损耗,</p> 
                <p>Immutable 使用了 Structural Sharing（结构共享）,即如果对象树中一个节点发生变化,</p> 
                <p>只修改这个节点和受它影响的父节点,其它节点则进行共享</p> 
            </el-collapse-item>
        </el-collapse>
        <div>
        </div>
        <p>Vuex里的原始值: {{immutableData}}</p> 
        <hr>
        <p>使用Immutable处理的值: {{this.personIM}}</p>
        <hr>
        <p>使用SImmutable处理的值:{{this.personSI}}</p>
    </div>
</template>

<script>

import immutable from "immutable";
import SImmutable from "seamless-immutable";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
        activeNames:[],
        personIM:{},
        personSI:{}
    };
  },
  created() {
    // --------------------- immutable --------------------------------
    // Use immutable get data from vuex.
    console.info(" ################ immutable ################ ");
    this.personIM = immutable.fromJS(this.immutableData);
    console.info(this.personIM.getIn(["name"]));
    console.info(this.personIM.getIn(["mobile"]));
    // >>>>>>>>>>>>>>>>>>> 使用 setIn 赋值
    this.personIM = this.personIM.setIn(["name"],"张三");
    this.personIM = this.personIM.setIn(["mobile"],"1234567890");
    // >>>>>>>>>>>>>>>>>>> 使用 getIn 取值
    console.info(this.personIM.getIn(["name"]));
    console.info(this.personIM.getIn(["mobile"]));

    // ------------------- seamless-immutable -------------------------
    // Use SImmutable get data from vuex.
    console.info(" ################ SImmutable ################ ");
    this.personSI = SImmutable(this.immutableData);
    console.info(this.personSI.name);
    console.info(this.personSI.mobile);
    // >>>>>>>>>>>>>>>>>>> 使用 merge 赋值
    this.personSI = this.personSI.merge({name:"李四"});
    this.personSI = this.personSI.merge({mobile:"9876543210"});
    // >>>>>>>>>>>>>>>>>>> 使用 . 取值
    console.info(this.personSI.name);
    console.info(this.personSI.mobile);
  },
  computed: {
    ...mapGetters(["immutableData"]) // state.immutable.immutableData: {name: "suzhen",tel: "13478452949"}
  }
};
</script>

<style >
.el-collapse-item__header{
    background-color:#409EFF;
}
</style>
