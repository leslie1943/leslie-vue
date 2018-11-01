<template>
  <div class="baseLayout">
    <!--  基础布局结构:
      <el-container> LEVEL______________________0: 最外层的
          <el-header></el-header> 
          <el-container> LEVEL______________________1: 包裹【菜单栏】和【内容】
              <el-aside></<el-aside>
              <el-container> LEVEL______________________2: 包裹【内容】
                  <el-main></el-main>
              </el-container>
          </el-container>
      </el-container>
     -->
    <el-container>
      <!-- Header -->
      <el-header>TTTTT</el-header>

        <el-container>
          <!-- Menu -->
          <el-aside>
            <Sidebar></Sidebar>
          </el-aside>

          <!-- Content -->
          <el-container>
            <el-main>
                <transition name="fade" mode="out-in">
                  <router-view :key="key" style="overflow: hidden;" />
                </transition>
            </el-main>
          </el-container>
      </el-container>

        <el-footer>FFF</el-footer>
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
    // color: #333;
    color:white;
    text-align: center;
    line-height: 80px;
  }
}
</style>