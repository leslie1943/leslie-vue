<template>
<div style="text-align:center;">  
  <el-table
      :data="peopleList"
      style="width: 100%">
      <el-table-column
        prop="name"
        header-align="center"
        label="日期"
        >
      </el-table-column>
      <el-table-column
      header-align="center"
        prop="age"
        label="姓名"
        >
      </el-table-column>
      <el-table-column
      header-align="center"
        prop="desc"
        label="描述"
        >
      </el-table-column>
    </el-table>
    <el-button @click="handleChangeArray">修改数组</el-button>
</div>
</template>

<script>
import { getUserInfo } from "@/api/user";

export default {
  data() {
    return {
      userInfo: [],
      peopleList: [
        {
          name: "test001",
          age: 30,
          desc: "test001"
        },
        {
          name: "test002",
          age: 28,
          desc: "test002"
        }
      ]
    };
  },
  methods: {
    handleChangeArray() {
      this.peopleList.splice(0, 1, {
        name: "test003",
        age: 18,
        desc: "test003"
      });
    },
    async getUserInfo() {
      try {
        let res = await getUserInfo();
        this.$message({ message: res.data, type: "success" });
        console.info(res);
      } catch (e) {
        console.info(e);
      }
    }
  },
  created() {
    this.getUserInfo();
  }
};
</script>

