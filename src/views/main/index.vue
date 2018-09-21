<template>
<div style="text-align:center;">

  <el-collapse v-model="activeNames" >

    <el-collapse-item title="Vuex" name="1">
       <h2>{{msg}}</h2>
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

    <el-collapse-item title="Upload" name="2">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          <hr>
        </el-upload>
    </el-collapse-item>

    <el-collapse-item title="面包屑" name="4">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
    </el-collapse-item>


    <el-collapse-item title="步骤" name="5">
          <el-steps :active="0" finish-status="success">
            <el-step title="步骤 1"></el-step>
            <el-step title="步骤 2"></el-step>
            <el-step title="步骤 3"></el-step>
          </el-steps>
          <hr>
          <el-steps :space="200" :active="10" finish-status="success">
            <el-step title="已完成"></el-step>
            <el-step title="进行中"></el-step>
            <el-step title="进行中"></el-step>
            <el-step title="进行中"></el-step>
            <el-step title="进行中"></el-step>
            <el-step title="进行中"></el-step>
            <el-step title="进行中"></el-step>
            <el-step title="进行中"></el-step>
            <el-step title="进行中"></el-step>
            <el-step title="步骤 3"></el-step>
          </el-steps>

    </el-collapse-item>

      <el-collapse-item title="time left" name="7">
             {{timeLeftString}}
      </el-collapse-item>

      <el-collapse-item title="date-picker" name="8">
            <el-date-picker
              v-model="expiredDate"
              type="datetime"
              placeholder="选择日期"
              value-format="yyyy-MM-dd HH:mm:ss">
          </el-date-picker>
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
<hr>
<!-- <el-button :type="getButtonType()" @click="handleShow">测试</el-button> -->

<el-button :type="getButtonType()" @click="handleToUrl(item.url)" v-for="(item,index) in buttons" :key="index">{{item.title}}</el-button><br><br>



</div>
</template>

<script>
/**
 * 一: 访问状态对象.state
      状态对象给赋值给内部对象, 也就是把 store/index里中的值赋值给模板里 data 中的值, 有3种方式:
      1: 通过 computed 的计算属性直接赋值. computed属性可以在输出前，对data里的值进行改变
      2: 通过mapState的对象进行赋值.
      3: 通过mapState的数组来进行赋值.

  二: mutation修改状态- ($store.commit())
    Vuex提供commit方法来修改状态
    但是我们不喜欢看到 $store.commit这样的调用方式,我们更希望使用直接的方式比如 add,reduce
      1: 引入mapMutations (import mapMutations) from 'vuex'
      2: 在methods里 ...mapMutation(['add','reduce']);

  三: getters 计算过滤属性. 可以看作是在数据获取之前进行的一次再编辑,相当于对数据的一个过滤和加工.(可以看作是store.js的计算属性)

  四: actions 与 mutation 功能基本一样, 不同的是
        1: action 是异步更改 state 的状态.
        2: mutation 是同步更改 state 的状态.

  五: module模块组.
      随着项目的复杂度增加, 我们共享的状态越来越多, 所以就需要我们把状态的各种操作进行一个分组, 分组后再进行按组编写.
      =================>>>>>>>> 状态管理器的模块组操作.
      之前的状态属性都是在   $store.state.count
      如果有了新的模块, 则是 $store.state.aModule.count

 */
import $store from "@/store";
import {getDaysLater} from "@/utils/date";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  name: "test",
  data() {
    return {
      switchFlag:true,
      color:"",
      activeNames:[],
      msg: "Vuex demo",
      timeLeft: 0,
      timeInterval: "",
      imageUrl: "",
      active:0,
      expiredDate:"",

      buttons:[
        {url:"Layout",title:"Layout"},
        {url:"countTime",title:"倒计时"},
        {url:"immutable",title:"immutable"},
        {url:"echarts",title:"echarts"},
        {url:"table",title:"table"},
        {url:"notice",title:"notice"},
        {url:"card",title:"card"},
        {url:"mutiselect",title:"mutiselect"},
        {url:"slot",title:"slot"},
        {url:"validate",title:"validate"},
        {url:"array",title:"array"},
        {url:"basicForm",title:"basicForm"},
        {url:"directives",title:"directives"},
        {url:"transition",title:"transition"},
        {url:"mixin",title:"mixin"},
      ]
    };
  },
  computed: {
    timeLeftString() {
      if (this.timeLeft <= 0) {
        return "已过期";
      }
      let day = Math.floor(this.timeLeft / 86400);
      let hour = Math.floor((this.timeLeft % 86400) / 3600);
      let min = Math.floor(((this.timeLeft % 86400) % 3600) / 60);
      let sec = Math.floor(((this.timeLeft % 86400) % 3600) % 60);
      return (
        day +
        "天  " +
        (hour < 10 ? "0" : "") +
        hour +
        ": " +
        (min < 10 ? "0" : "") +
        min +
        ": " +
        (sec < 10 ? "0" : "") +
        sec
      );
    },
    // 获取state属性方式-1
    countByReturn() {
      return this.$store.state.count + " [    return this.$store.state.count]";
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
    getButtonType(){
      let btnType = ["primary","info","warning","success","danger"];
      let index = Math.floor(Math.random() * 5);
      return btnType[index]
    },
    
    getDateTime(){
      let endT = new Date('2019-06-20 12:00:00');
      let nowT = new Date();
      if (endT > nowT) {
        this.timeLeft = Math.floor((endT.getTime() - nowT.getTime()) / 1000);
      } else {
        this.timeLeft = 0;
      }
    },
    
    ...mapMutations(["add", "reduce"]),
    ...mapActions(["addAction", "reduceAction"]),
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },

    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    handleShow() {
      this.$alert("hello", "I am title", {
        confirmButtonText: "确定",
        callback: action => {}
      });
    },
    handleToUrl(target){
      this.$router.replace("/" + target);
    },
    countDownTime() {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.timeInterval);
      }
    },
  },
  mounted() {
    // loading.close();
    this.expiredDate = getDaysLater(3,18);
  },
  created(){
    // 获取当前项目的剩余时间. this.timeLeft
    this.getDateTime();

    // 绑定循环方法,每隔一秒去检查当前剩余时间
    // this.timeLeft--
    // 剩余时间大于0，--继续循环
    // 剩余时间等于0, --跳出interval事件.
    /** computed中timeLeftString的值 根据this.timeLeft时刻更新:
     *  等于0:  已过期
     *  大于0: 计算出剩时间
     * **/
    this.timeInterval = setInterval(this.countDownTime, 1000);
  }
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
