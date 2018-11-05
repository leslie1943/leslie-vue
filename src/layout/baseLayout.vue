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
      <el-header>大连望海</el-header>

        <el-container>
          <!-- Menu -->
          
          <el-aside style="width: 167px;"><side-bar></side-bar></el-aside>

          <!-- Content -->
          <el-container>
            <el-main>
                <transition name="fade" mode="out-in">
                  <router-view :key="key" style="overflow: hidden;" />
                </transition>
            </el-main>
          </el-container>
      </el-container>

        <el-footer>本产品最终解释权归蹭车群所有</el-footer>
    </el-container>
  </div>
</template>

<script>
import SideBar from "@/components/sidebar";
export default {
  components: {
    SideBar
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
  .el-aside{
    background: #324057;
    min-height: 610px;
    overflow: hidden;
  }
  .el-header {
    background-color: #0073b1;
    color:white;
    text-align: center;
    line-height: 70px;
    letter-spacing: 40px;
  }
  .el-footer {
    background-color: #0073b1;
    color:white;
    text-align: center;
    line-height: 70px;
  }
  .el-main{
    overflow: hidden;
  }
}
</style>