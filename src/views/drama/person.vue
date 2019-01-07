<template>
<div class="drama-person-container">
    <!-- {{persons}} -->
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

      <!-- <el-table-column label="Roles" align="center" header-align="center">
          <template slot-scope="scope">
            <el-tag 
              v-for="(role,index) in scope.row.roles" 
              :key="index" :style="role.style">{{role.drama + "-" + role.cosName}}
            </el-tag>
          </template>
      </el-table-column> -->

      <el-table-column label="蛊魂铃" align="center" header-align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.guhunling.cosName">
                <el-tag :style="scope.row.guhunling.style">{{scope.row.guhunling.cosName}}</el-tag>
            </span>
          </template>
      </el-table-column>

      <el-table-column label="孽岛疑云" align="center" header-align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.niehaiyiyun.cosName">
                
                <el-tag :style="scope.row.niehaiyiyun.style">
                    <span v-if="scope.row.niehaiyiyun.cosName=='主持人'"><Icon type="md-mic" /></span>
                    {{scope.row.niehaiyiyun.cosName}}
                </el-tag>
            </span>
          </template>
      </el-table-column>

      <el-table-column label="良辰吉日" align="center" header-align="center">
          <template slot-scope="scope">
             <span v-if="scope.row.liangchenjiri.cosName">
                <el-tag :style="scope.row.liangchenjiri.style">{{scope.row.liangchenjiri.cosName}}</el-tag>
            </span>
          </template>
      </el-table-column>

      <el-table-column label="盖弥书院" align="center" header-align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.gaimishuyuan.cosName">
                <el-tag :style="scope.row.gaimishuyuan.style">{{scope.row.gaimishuyuan.cosName}}</el-tag>
            </span>
          </template>
      </el-table-column>

      <el-table-column label="星座怪谈" align="center" header-align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.xingzuoguaitan.cosName">
                <el-tag :style="scope.row.xingzuoguaitan.style">{{scope.row.xingzuoguaitan.cosName}}</el-tag>
            </span>

          </template>
      </el-table-column>

      <el-table-column label="大胥密史" align="center" header-align="center">
          <template slot-scope="scope">
             <span v-if="scope.row.daxumishi.cosName">
                <el-tag :style="scope.row.daxumishi.style">{{scope.row.daxumishi.cosName}}</el-tag>
            </span>
          </template>
      </el-table-column>

      <el-table-column label="苍笙九剑" align="center" header-align="center">
          <template slot-scope="scope">
             <span v-if="scope.row.cangshengjiujian.cosName">
                <el-tag :style="scope.row.cangshengjiujian.style">{{scope.row.cangshengjiujian.cosName}}</el-tag>
            </span>
          </template>
      </el-table-column>

      <el-table-column label="儿童劫" align="center" header-align="center">
          <template slot-scope="scope">
              <span v-if="scope.row.ertongjie.cosName">
                <el-tag :style="scope.row.ertongjie.style">{{scope.row.ertongjie.cosName}}</el-tag>
            </span>
          </template>
      </el-table-column>
      <el-table-column label="记忆碎片" align="center" header-align="center">
          <template slot-scope="scope">
              <span v-if="scope.row.jiyisuipian.cosName">
                <el-tag :style="scope.row.jiyisuipian.style">
                <span v-if="scope.row.jiyisuipian.cosName=='主持人'"><Icon type="md-mic" /></span>
                    {{scope.row.jiyisuipian.cosName}}</el-tag>
            </span>
          </template>
      </el-table-column>
      <el-table-column label="大明青龙劫" align="center" header-align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.damingqinglongjie.cosName">
                <el-tag :style="scope.row.damingqinglongjie.style">
                    <span v-if="scope.row.damingqinglongjie.cosName=='主持人'"><Icon type="md-mic" /></span>
                    {{scope.row.damingqinglongjie.cosName}}</el-tag>
            </span>
          </template>
      </el-table-column>
       <el-table-column label="皂罗袍" align="center" header-align="center">
          <template slot-scope="scope">
              <span v-if="scope.row.zaoluopao.cosName">
                <el-tag :style="scope.row.zaoluopao.style">
                    <span v-if="scope.row.zaoluopao.cosName=='主持人'"><Icon type="md-mic" /></span>
                    {{scope.row.zaoluopao.cosName}}</el-tag>
            </span>
          </template>
      </el-table-column>

       <!-- <el-table-column label="Total" align="center" width="80"  header-align="center">
          <template slot-scope="scope">
              {{scope.row.roles.length}}
          </template>
      </el-table-column> -->

    </el-table>
</div>
</template>

<script>
import data from './person.js';
export default {
  data(){
    return {
        persons:data.persons
    }
  },
}
</script>

<style lang="scss">
.drama-person-container{
  padding:10px;
  .el-tag{
      margin-right: 5px;
      margin-top:5px;
  }
}
</style>
