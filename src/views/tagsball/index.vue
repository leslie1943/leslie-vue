<template>
  <div style="text-align:center;">
    <div :style="{color:tagColor}">{{tagColor}}</div>
    <hr>
    <!-- radius 要和 width/height 配合使用. -->
    <tags-ball v-bind:style="tagStyle" font="30px monaco"  color="#297FB4" :radius="300" :width='600' :height='600' :stop="stopFlag" :tags='tags'/>
    <hr>
    <el-row>
      <el-col :span="24">
        <el-button :type="btnType" @click="stop" :icon="iconType">{{btnText}}</el-button>
      </el-col>
    </el-row>
    <!-- Back -->
    <to-home></to-home>
  </div>
</template>

<script>
export default {
  data(){
    return{
      stopFlag: false,
      btnText:"Stop",
      tags:["安琪拉","白起","不知火舞","妲己","狄仁杰","典韦","韩信","老夫子","刘邦","刘禅","鲁班七号","墨子","孙膑","孙尚香","孙悟空","项羽","亚瑟","周瑜","庄周","蔡文姬","甄姬","廉颇","程咬金","后羿","扁鹊钟无艳","小乔","王昭君","虞姬","李元芳","张飞","刘备","牛魔张良","兰陵王","露娜","貂蝉","达摩","曹操","芈月","荆轲","高渐离","钟馗","花木兰","关羽","李白","宫本武藏","吕布","嬴政","娜可露露","武则天","赵云","姜子牙","哪吒","诸葛亮","黄忠","大乔","东皇太一","庞统","干将莫邪","鬼谷子","女娲"],

      tagStyle:{
        border: '0px dashed black'
      },
      btnType:"primary",
      iconType: "el-icon-loading",
      bundleIntervalEvent: "",
      tagColor:"#297FB4",
    }
  },
  methods:{
    stop(){
      this.iconType = this.iconType === "el-icon-loading" ? "el-icon-caret-right" : "el-icon-loading";
      this.btnType = this.btnType === "primary" ? "danger" : "primary";
      this.btnText = this.btnText === "Start" ? "Stop" : "Start";
      this.stopFlag = !this.stopFlag;
    },
    intervalEvent(){
      let r = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      this.tagColor = "rgb(" + r + "," + b + "," + g + ")";
    }
  },
  created(){
    this.bundleIntervalEvent = setInterval(this.intervalEvent, 2000);
  }
}
</script>

<style lang="scss">
</style>

