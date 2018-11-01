<template>
  <div class="baseLayout">
    <el-container>
      <el-header>TTTTT</el-header>

        <!-- <happy-scroll :resize="true" hide-vertical hide-horizontal > -->
        <el-container>
          <el-aside>
            <Sidebar></Sidebar>
          </el-aside>
        <!-- </happy-scroll> -->

        <!-- 页面内容显示 -->
         <!-- <happy-scroll  :resize="true" hide-vertical hide-horizontal > -->
        <el-container>
          <el-main>
              <transition name="fade" mode="out-in">
                <router-view :key="key" style="overflow: hidden;" />
              </transition>
          </el-main>
        </el-container>
      </el-container>
        <!-- </happy-scroll> -->

        <el-footer>FFF</el-footer>
      <!-- </div> -->
    </el-container>
  </div>
</template>

<script>
import Sidebar from "@/components/sidebar";
export default {
  components: {
    Sidebar
  },
  computed: {
    key() {
      return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date();
    }
  },
};
</script>

<style lang="scss" >
.baseLayout {
  background-color:white;

  .el-header, .el-footer {
    background-color: #0073b1;
    /* background-color: #303133; */
    color: #333;
    text-align: center;
    line-height: 80px;
    
  }
}
</style>