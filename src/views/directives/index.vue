<template>
  <div style="text-align:center;">
    <el-row>
      <el-col :span="22">
        <span>
          <pre>
        本页使用 v-imgOnError 自定义指令来处理 img 标签加载图片失败的情况.<br>
        1: import defautErrorImg from '@/assets/img-icon.png';<br>
        2: Vue.directive('imgOnerror', {<br>
            bind: function (el, binding) {<br>
            el.onerror = function(){<br>
              this.src = defautErrorImg;<br>
            }<br>
          }<br>
        })<br>
        3: 'img v-imgOnerror '</pre></span><br>
      </el-col>
    </el-row>

    <hr>

    <el-row>
    <img v-imgOnError src="http://img0222.imgtn.bdimg.com/22it/u=3800480277,1159420951&fm=200&gp=2220.jpg"/>
    </el-row>
    <!-- Back -->
    <ToHome></ToHome>
  </div>
</template>

<script>
import ToHome from "@/components/toHome/toHome";

export default {
  components:{
    ToHome,
  },
}
</script>

