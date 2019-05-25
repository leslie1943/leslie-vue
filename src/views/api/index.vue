<template>
  <div style="text-align:center;">
    <!-- <el-row>{{userList}}</el-row> -->
    <el-row>
      <el-button @click="handleTestAPI">测试接口</el-button>
    </el-row>
  </div>
</template>

<script>
import { createNamespacedHelpers, mapGetters } from "vuex";
const { mapActions: userAction } = createNamespacedHelpers("user");

export default {
  computed: {
    ...mapGetters(["userList"]),
  },
  methods: {
    // ...userAction(["getUserList"]),
    handleTestAPI() {
      this.$store.dispatch('user/getUserList').then(res => {
        this.$message({
          type: "success",
          message: res
        });
      })
      // this.getUserList().then(res => {
      //   this.$message({
      //     type: "success",
      //     message: res
      //   });
      // });
    }
  }
};
</script>

