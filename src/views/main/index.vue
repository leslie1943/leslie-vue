<template>
<div style="text-align:center;">
  <el-collapse v-model="activeNames" >
    <el-collapse-item title="Vuex" name="1">
        <hr>
        <h3>{{$store.state.count}}</h3>

        <!-- action()是触发mutation执行，并改变state -->
        <!-- mutation也可以被直接commit('m_name',value)-->

        <div>
            <el-button type="primary" @click="$store.commit('add',2)">add with parameters=2</el-button>
            <el-button type="primary" @click="$store.commit('reduce',2)">reduce with parameters=2</el-button>
            <hr>
            <el-button type="primary" @click="add(3)">add from mapMutations=3</el-button>
            <el-button type="primary" @click="reduce(3)">reduce from mapMutations=3</el-button>

            <hr>
            <el-button type="primary" @click="addAction">add from mapAction=4</el-button>
            <el-button type="primary" @click="reduceAction">reduce from mapAction=4</el-button>
        </div>
        <hr>
        <h3>{{countByReturn}}</h3>
        <hr>
        <h3>{{countByMapState}}</h3>
        <hr>
        <h3>{{count + '[...mapState(["count"])]'}} </h3>
    </el-collapse-item>

      <el-collapse-item title="Switch" name="11">
          <el-switch
          v-model="switchFlag"
          active-color="#13ce66"
          inactive-color="#13ce66"
          active-text="快捷菜单"
          inactive-text="功能菜单">
        </el-switch>
      </el-collapse-item>

  </el-collapse>

</div>
</template>

<script>

import $store from "@/store";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  name: "test",
  data() {
    return {
      switchFlag:true,
      activeNames:[],
    };
  },
  computed: {
    // 获取state属性方式-1
    countByReturn() {
      return this.$store.state.count + " [return this.$store.state.count]";
    },
    // 获取state属性方式-2
    ...mapState({
      countByMapState: state => {
        return ( state.count +
          `[    ...mapState({
            countByMapState:(state) =>{
              return state.count'
            }
          })],`
        );
      }
    }),
    // 获取state属性方式-3
    ...mapState(["count"]),
    ...mapGetters(["count"]) 
  },
  methods: {
    ...mapMutations(["add", "reduce"]),
    ...mapActions(["addAction", "reduceAction"]),
  },
};
</script>
<style scoped>
  .ground-route-table,
  .ground-route-table-samll {
    width: 100%;
    border: 1px solid #dfe6ec;
    border-collapse: collapse;
    table-layout:fixed;
    word-break:break-all;
  }
  .ground-route-table td{
    border: 1px solid #dfe6ec;    
  }
</style>
