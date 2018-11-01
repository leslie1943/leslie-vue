<template>
<div class="drama-container">
    <el-table :row-class-name="tableRowClassName"
      :data="dramas" style="width: 100%" :default-sort = "{prop: 'name', order: 'descending'}">
       <el-table-column type="index" width="50" align="left" header-align="left">
      </el-table-column>

      <el-table-column prop="name" label="剧名" align="left" width="100" header-align="left">
      </el-table-column>

      <el-table-column label="类型" width="100"  align="left" header-align="left">
         <template slot-scope="scope">
         {{scope.row.type}}
         <!-- <Icon size="12" color="red" type="logo-snapchat" /> -->
        </template>
      </el-table-column>

      <el-table-column prop="persons" label="人数" width="50">
      </el-table-column>

       <el-table-column prop="timeSpan" label="游戏时间" align="center" header-align="center">
      </el-table-column>

      <el-table-column prop="difficuty" sortable label="难度" header-align="center">
        <template slot-scope="scope">
         <el-rate disabled v-model="scope.row.difficuty" text-color="#ff9900" show-score score-template="{value}"></el-rate>
        </template>
      </el-table-column>

      <el-table-column prop="cost" label="价格" width="100" align="center" header-align="center">
      </el-table-column>

      <el-table-column prop="status" label="状态" align="center" header-align="center">
         <template slot-scope="scope">
          <span v-if="scope.row.status == 1"><el-tag type="info">未开启</el-tag></span>
          <span v-if="scope.row.status == 2"><el-tag type="success">已完成</el-tag></span>
        </template>
      </el-table-column>

      <el-table-column prop="places" label="游戏地点" align="center" header-align="center">
         <template slot-scope="scope">
          <el-tag style="margin-right:2px;margin-bottom:2px;" v-for="(item,key) in scope.row.places" :key="key">{{item}}</el-tag>
        </template>
      </el-table-column>

       <el-table-column label="推荐指数" width="100" align="center" header-align="center">
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
      </el-table-column>

      <el-table-column  label="操作" align="center" header-align="center">
        <template slot-scope="scope">
        <el-button size="small" type="primary" @click="handleViewDetail(scope.row)">详情</el-button>
      </template>
      </el-table-column>
    </el-table>

    <el-dialog 
      title="剧本简介" 
      :visible.sync="dialogVisible" 
      width="60%" 
      center>
      <div style="white-space: normal;">{{currentRow.detail}}</div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
</div>
</template>

<script>

export default {
  data(){
    return{
      dialogVisible: false,
      currentRow:{},
      dramas:[
        {name:"良辰吉日", type:"逻辑推理",persons:7, timeSpan:"4-5 小时",cost:"￥59.00",difficuty:3.8, recom: 4, status: 2,places:["青泥洼桥"],detail:"蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中....",dinner:["香辣蟹","烧烤"],},
        {name:"林湾宅*2", type:"寻找凶手",persons:7, timeSpan:"4-5 小时",cost:"￥59.00",difficuty:4, recom: 4,status:1,places:["西安路"],detail:"蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中....",dinner:["川菜","羊汤"],},
        {name:"傀儡的记忆", type:"穿越",persons:7, timeSpan:"4-5 小时",cost:"￥59.00",difficuty:3.5, recom: 4,status:1,places:["西安路","万达广场"],detail:"蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中....",dinner:["外卖"],},
        {name:"蛊魂铃", type:"逻辑推理",persons:7, timeSpan:"4-5 小时",cost:"￥59.00",difficuty:5, recom: 5,status:2,places:["青泥洼桥"],detail:"蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中....",dinner:["韩式烤肉"],},
        {name:"桃花扇", type:"未知",persons:7, timeSpan:"4-5 小时",cost:"￥59.00",difficuty:3, recom: 3, status:1,places:["万达广场","青泥洼桥"],detail:"蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中....",dinner:["牛杂火锅"],},
        {name:"良辰吉日", type:"逻辑推理",persons:7, timeSpan:"4-5 小时",cost:"￥59.00",difficuty:3.8, recom: 4, status: 2,places:["青泥洼桥"],detail:"蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中....",dinner:["香辣蟹","烧烤"],},
        {name:"林湾宅*2", type:"寻找凶手",persons:7, timeSpan:"4-5 小时",cost:"￥59.00",difficuty:4, recom: 4,status:1,places:["西安路"],detail:"蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中....",dinner:["川菜","羊汤"],},
        {name:"傀儡的记忆", type:"穿越",persons:7, timeSpan:"4-5 小时",cost:"￥59.00",difficuty:3.5, recom: 4,status:1,places:["西安路","万达广场"],detail:"蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中....",dinner:["外卖"],},
        {name:"蛊魂铃", type:"逻辑推理",persons:7, timeSpan:"4-5 小时",cost:"￥59.00",difficuty:5, recom: 5,status:2,places:["青泥洼桥"],detail:"蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中....",dinner:["韩式烤肉"],},
        {name:"桃花扇", type:"未知",persons:7, timeSpan:"4-5 小时",cost:"￥59.00",difficuty:3, recom: 3, status:1,places:["万达广场","青泥洼桥"],detail:"蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中....",dinner:["牛杂火锅"],},
        {name:"良辰吉日", type:"逻辑推理",persons:7, timeSpan:"4-5 小时",cost:"￥59.00",difficuty:3.8, recom: 4, status: 2,places:["青泥洼桥"],detail:"蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中....",dinner:["香辣蟹","烧烤"],},
        {name:"林湾宅*2", type:"寻找凶手",persons:7, timeSpan:"4-5 小时",cost:"￥59.00",difficuty:4, recom: 4,status:1,places:["西安路"],detail:"蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中....",dinner:["川菜","羊汤"],},
        {name:"傀儡的记忆", type:"穿越",persons:7, timeSpan:"4-5 小时",cost:"￥59.00",difficuty:3.5, recom: 4,status:1,places:["西安路","万达广场"],detail:"蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中....",dinner:["外卖"],},
        {name:"蛊魂铃", type:"逻辑推理",persons:7, timeSpan:"4-5 小时",cost:"￥59.00",difficuty:5, recom: 5,status:2,places:["青泥洼桥"],detail:"蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中....",dinner:["韩式烤肉"],},
        {name:"桃花扇", type:"未知",persons:7, timeSpan:"4-5 小时",cost:"￥59.00",difficuty:3, recom: 3, status:1,places:["万达广场","青泥洼桥"],detail:"蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中....",dinner:["牛杂火锅"],},
        {name:"良辰吉日", type:"逻辑推理",persons:7, timeSpan:"4-5 小时",cost:"￥59.00",difficuty:3.8, recom: 4, status: 2,places:["青泥洼桥"],detail:"蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中....",dinner:["香辣蟹","烧烤"],},
        {name:"林湾宅*2", type:"寻找凶手",persons:7, timeSpan:"4-5 小时",cost:"￥59.00",difficuty:4, recom: 4,status:1,places:["西安路"],detail:"蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中....",dinner:["川菜","羊汤"],},
        {name:"傀儡的记忆", type:"穿越",persons:7, timeSpan:"4-5 小时",cost:"￥59.00",difficuty:3.5, recom: 4,status:1,places:["西安路","万达广场"],detail:"蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中....",dinner:["外卖"],},
        {name:"蛊魂铃", type:"逻辑推理",persons:7, timeSpan:"4-5 小时",cost:"￥59.00",difficuty:5, recom: 5,status:2,places:["青泥洼桥"],detail:"蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中....",dinner:["韩式烤肉"],},
        {name:"桃花扇", type:"未知",persons:7, timeSpan:"4-5 小时",cost:"￥59.00",difficuty:3, recom: 3, status:1,places:["万达广场","青泥洼桥"],detail:"蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中....",dinner:["牛杂火锅"],},
        {name:"良辰吉日", type:"逻辑推理",persons:7, timeSpan:"4-5 小时",cost:"￥59.00",difficuty:3.8, recom: 4, status: 2,places:["青泥洼桥"],detail:"蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中....",dinner:["香辣蟹","烧烤"],},
        {name:"林湾宅*2", type:"寻找凶手",persons:7, timeSpan:"4-5 小时",cost:"￥59.00",difficuty:4, recom: 4,status:1,places:["西安路"],detail:"蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中....",dinner:["川菜","羊汤"],},
        {name:"傀儡的记忆", type:"穿越",persons:7, timeSpan:"4-5 小时",cost:"￥59.00",difficuty:3.5, recom: 4,status:1,places:["西安路","万达广场"],detail:"蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中....",dinner:["外卖"],},
        {name:"蛊魂铃", type:"逻辑推理",persons:7, timeSpan:"4-5 小时",cost:"￥59.00",difficuty:5, recom: 5,status:2,places:["青泥洼桥"],detail:"蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中....",dinner:["韩式烤肉"],},
        {name:"桃花扇", type:"未知",persons:7, timeSpan:"4-5 小时",cost:"￥59.00",difficuty:3, recom: 3, status:1,places:["万达广场","青泥洼桥"],detail:"蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中....",dinner:["牛杂火锅"],},
        {name:"良辰吉日", type:"逻辑推理",persons:7, timeSpan:"4-5 小时",cost:"￥59.00",difficuty:3.8, recom: 4, status: 2,places:["青泥洼桥"],detail:"蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中....",dinner:["香辣蟹","烧烤"],},
        {name:"林湾宅*2", type:"寻找凶手",persons:7, timeSpan:"4-5 小时",cost:"￥59.00",difficuty:4, recom: 4,status:1,places:["西安路"],detail:"蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中....",dinner:["川菜","羊汤"],},
        {name:"傀儡的记忆", type:"穿越",persons:7, timeSpan:"4-5 小时",cost:"￥59.00",difficuty:3.5, recom: 4,status:1,places:["西安路","万达广场"],detail:"蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中....",dinner:["外卖"],},
        {name:"蛊魂铃", type:"逻辑推理",persons:7, timeSpan:"4-5 小时",cost:"￥59.00",difficuty:5, recom: 5,status:2,places:["青泥洼桥"],detail:"蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中....",dinner:["韩式烤肉"],},
        {name:"桃花扇", type:"未知",persons:7, timeSpan:"4-5 小时",cost:"￥59.00",difficuty:3, recom: 3, status:1,places:["万达广场","青泥洼桥"],detail:"蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中....",dinner:["牛杂火锅"],},
        {name:"良辰吉日", type:"逻辑推理",persons:7, timeSpan:"4-5 小时",cost:"￥59.00",difficuty:3.8, recom: 4, status: 2,places:["青泥洼桥"],detail:"蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中....",dinner:["香辣蟹","烧烤"],},
        {name:"林湾宅*2", type:"寻找凶手",persons:7, timeSpan:"4-5 小时",cost:"￥59.00",difficuty:4, recom: 4,status:1,places:["西安路"],detail:"蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中....",dinner:["川菜","羊汤"],},
        {name:"傀儡的记忆", type:"穿越",persons:7, timeSpan:"4-5 小时",cost:"￥59.00",difficuty:3.5, recom: 4,status:1,places:["西安路","万达广场"],detail:"蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中....",dinner:["外卖"],},
        {name:"蛊魂铃", type:"逻辑推理",persons:7, timeSpan:"4-5 小时",cost:"￥59.00",difficuty:5, recom: 5,status:2,places:["青泥洼桥"],detail:"蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中....",dinner:["韩式烤肉"],},
        {name:"桃花扇", type:"未知",persons:7, timeSpan:"4-5 小时",cost:"￥59.00",difficuty:3, recom: 3, status:1,places:["万达广场","青泥洼桥"],detail:"蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中....",dinner:["牛杂火锅"],},
      ]
    } 
  },
  methods:{
    handleViewDetail(row){
      this.currentRow = row;
      this.dialogVisible = true;
    },
    tableRowClassName({row, rowIndex}){
      if (row.status == 2) {
        return 'success-row';
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
}
</style>
