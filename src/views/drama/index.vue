<template>
<div class="drama-container">

  <!--       :data="dramas" style="width: 100%" :default-sort = "{prop: 'name', order: 'descending'}"> -->
    <el-table @row-click="handleRowClick" :row-class-name="tableRowClassName" :data="dramas" style="width: 100%" >
       <el-table-column type="index"  align="left" header-align="left">
      </el-table-column>

      <el-table-column prop="name" label="剧名" align="left" header-align="left">
      </el-table-column>

      <!-- <el-table-column label="类型" width="100"  align="left" header-align="left">
         <template slot-scope="scope">
         {{scope.row.type}}
        </template>
      </el-table-column> -->
      
      <el-table-column prop="host" label="主持人" >
      </el-table-column>

      <el-table-column prop="persons" label="人数" >
      </el-table-column>

      <el-table-column prop="roles" label="角色" width="60px" type="expand" header-align="left" align="center">
        <template slot-scope="scope">
          <div class="roles-table">
            <el-table :data="scope.row.roles" :show-header="false" style="font-size:12px;">
              <el-table-column prop="realName" label="人物"></el-table-column>
              <el-table-column prop="cosName" label="角色"></el-table-column>
            </el-table>
          </div>

        </template>
      </el-table-column>

       <!-- <el-table-column prop="timeSpan" label="游戏时间" align="center" header-align="center">
      </el-table-column>

      <el-table-column prop="difficuty" sortable label="难度" header-align="center">
        <template slot-scope="scope">
         <el-rate disabled v-model="scope.row.difficuty" text-color="#ff9900" show-score score-template="{value}"></el-rate>
        </template>
      </el-table-column>

      <el-table-column prop="cost" label="价格" width="100" align="center" header-align="center">
      </el-table-column> -->

      <!-- <el-table-column prop="status" label="状态" align="center" header-align="center">
         <template slot-scope="scope">
          <span v-if="scope.row.status == 1"><el-tag type="info">未开启</el-tag></span>
          <span v-if="scope.row.status == 2"><el-tag type="success">已完成</el-tag></span>
        </template>
      </el-table-column> -->


      <el-table-column label="剧照" header-align="center" align="center"  width="200px">
        <template slot-scope="scope">
         <el-carousel :interval="2000" style="overflow:hidden;" type="card" arrow="never">
          <el-carousel-item v-for="(banner,index) in scope.row.photos" :key="index" style="text-align:center;width:100%;height:50px;overflow:hidden;">
            <img class="img-center" @click="handlePreview" :src="banner.path" />
          </el-carousel-item>
        </el-carousel>
        </template>
      </el-table-column>

       <el-table-column prop="copyright" label="独家" align="center" header-align="center">
         <template slot-scope="scope">
          <el-tag type="danger" v-if="scope.row.copyright">独家</el-tag>
          <el-tag type="info" v-else>普通</el-tag>
        </template>
      </el-table-column>

      <el-table-column prop="places" label="游戏地点" align="center" header-align="center">
         <template slot-scope="scope">
          <el-tag style="margin-right:2px;margin-bottom:2px;" v-for="(item,key) in scope.row.places" :key="key">{{item}}</el-tag>
        </template>
      </el-table-column>

       <!-- <el-table-column label="推荐指数" width="100" align="center" header-align="center">
         <template slot-scope="scope">
         <span v-for="(r,i) in scope.row.recom" :key="i">
           <Icon size="12" color="#2d8cf0" type="md-thumbs-up" />
         </span>
        </template>
      </el-table-column>

      <el-table-column label="用餐选项" align="center" header-align="center">
         <template slot-scope="scope">
         <span v-for="(d,i) in scope.row.dinner" :key="i">
           <el-tag style="margin-right:2px;margin-bottom:2px;" size="small" type="warning">{{d}}</el-tag>
         </span>
        <Icon type="ios-restaurant" color="#2d8cf0"/>
        </template>
      </el-table-column> -->

      <el-table-column  label="操作" align="center" header-align="center">
        <template slot-scope="scope">
        <el-button size="small" type="primary" @click="handleViewDetail(scope.row)">查看结局</el-button>
      </template>
      </el-table-column>
    </el-table>

    <!-- ############# 查看结局 ############# -->
    <el-dialog :title="currentRow.ending.name"  :visible.sync="dialogVisible"  width="60%"  center>
      <hr>
      <el-row style="font-size:24px;">
        <span style="font-weight:bold;color:red;"><Icon type="ios-contact" />真实凶手</span>: {{currentRow.ending.realMurder}}
      </el-row>

      <el-row style="font-size:24px;">
         <span style="font-weight:bold;color:#409EFF;"><Icon type="ios-contact-outline" />投票凶手</span>: {{currentRow.ending.voteMurder}}
      </el-row>
      <hr style="margin-top:20px;">

      <el-row style="text-align:center;font-size:18px;font-weight:bold;color:gray;word-break: break-word;white-space: normal;">
        结局
      </el-row>

      <hr style="margin-bottom:20px;">

      <el-row style="word-break: break-word;white-space: normal;"  v-for="(item,id) in currentRow.ending.detail" :key="id">
        <Icon type="md-arrow-round-forward" /> {{item.desc}}
      </el-row>
      
      
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

    <!-- ############# 图片预览 ############# -->
     <el-dialog  :modal-append-to-body="false"  :visible.sync="previewDialogVisible" width="40%">
      <img width="100%" :src="previewDialogImageUrl" alt="">
    </el-dialog>
</div>
</template>

<script>
import data from './data.js';

export default {
  data(){
    return data
  },
  methods:{
    handleRowClick(row,event,col){
      console.info(row);
      console.info(event);
      console.info(col);
    },
    handleViewDetail(row){
      this.currentRow = row;
      this.dialogVisible = true;
    },
    handlePreview(e) {
      this.previewDialogVisible = true;
      this.previewDialogImageUrl = e.target.src;
    },
    tableRowClassName({row, rowIndex}){
      row.defineKey =rowIndex;
      if (row.status == 2) {
        // return 'success-row';
      }
    }
  },
}
</script>

<style lang="scss">
.drama-container{
  padding:10px;
  .el-table{
    th{
      background-color: black;
      color:orange;
    }
  }
  .el-table .success-row {
    background: #f0f9eb;
  }
  .roles-table{
    border: 1px #CEE3EE solid;
    .el-table td{
      padding:5px 0;
    }
  }

  .img-center{
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
  .el-carousel__container{
      height: 20px;
  }
}
</style>
