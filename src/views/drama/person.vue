<template>
<div class="drama-person-container">
    <el-table :data="persons" style="width: 100%" border>

    <el-table-column label="Avatar" align="center" width="80"  header-align="center">
          <template slot-scope="scope">
             <img style="width:40px;height:40px" :src="scope.row.avatar">
          </template>
      </el-table-column>

      <el-table-column label="Name" align="center" width="80"  header-align="center">
          <template slot-scope="scope">
              {{scope.row.name}}
          </template>
      </el-table-column>

      <el-table-column label="Roles" align="center" header-align="center">
          <template slot-scope="scope">
            <el-tag 
              v-for="(role,index) in scope.row.roles" 
              :key="index" :style="role.style">{{role.drama + "-" + role.cosName}}
              
            </el-tag>
          </template>
      </el-table-column>

       <el-table-column label="Total" align="center" width="80"  header-align="center">
          <template slot-scope="scope">
              {{scope.row.roles.length}}
          </template>
      </el-table-column>

    </el-table>
</div>
</template>

<script>
import persons from './person.js';

export default {
  data(){
    return persons
  },
  methods:{
    
  },
}
</script>

<style lang="scss">
.drama-person-container{
  padding:10px;
  .el-tag{
      margin-right: 5px;
  }
}
</style>
