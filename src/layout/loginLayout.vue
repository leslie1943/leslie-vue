<template>
  <div class="loginLayout">

    <!-- <el-container> -->
      <!-- Header -->
      <!-- <el-header></el-header> -->
        <!-- <el-container> -->
            <transition name="fade" mode="out-in">
              <router-view :key="key" style="overflow: hidden;" />
            </transition>
        <!-- </el-container> -->
        <!-- <el-footer></el-footer> -->
    <!-- </el-container> -->
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
.loginLayout {
  background-color: #0073b1;
}
</style>