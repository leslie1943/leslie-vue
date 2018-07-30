<template>
<div >
  <!-- <el-container>
  <el-header>Header</el-header>
  <el-main>Main</el-main>
</el-container> -->

<!-- <el-container>
  <el-header>Header</el-header>
  <el-main>Main</el-main>
  <el-footer>Footer</el-footer>
</el-container> -->

<!-- <el-container>
  <el-aside width="200px">Aside</el-aside>
  <el-main>Main</el-main>
</el-container> -->

<!-- <el-container>
  <el-header>Header</el-header>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-main>Main</el-main>
  </el-container>
</el-container> -->

<el-container>
  <el-header style="height: 75px;">
    <el-button @click="backHome">back to home</el-button>
    <el-tag style="color:white;">header</el-tag>
    <el-tag style="color:white;">header</el-tag>
    <el-tag style="color:white;">header</el-tag>
    <el-tag style="color:white;">header</el-tag>
    <el-tag style="color:white;">header</el-tag>
  </el-header>
  <el-container >
    <el-aside >
      <el-tag style="color:white;">aside</el-tag>
      <el-tag style="color:white;">aside</el-tag>
      <el-tag style="color:white;">aside</el-tag>
      <el-tag style="color:white;">aside</el-tag>
      <el-tag style="color:white;">aside</el-tag>

    </el-aside>
    <el-container>
      <el-main>
        <el-table
          v-loading="loading2"
          element-loading-text="加载中"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.2)"
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>

        <el-table
          :data="tableData5"
          style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand" style="width:auto">
                <el-form-item label="商品名称">
                  <span>{{ props.row.name }}</span>
                </el-form-item>
                <el-form-item label="所属店铺">
                  <span>{{ props.row.shop }}</span>
                </el-form-item>
                <el-form-item label="商品 ID">
                  <span>{{ props.row.id }}</span>
                </el-form-item>
                <el-form-item label="店铺 ID">
                  <span>{{ props.row.shopId }}</span>
                </el-form-item>
                <el-form-item label="商品分类">
                  <span>{{ props.row.category }}</span>
                </el-form-item>
                <el-form-item label="店铺地址">
                  <span>{{ props.row.address }}</span>
                </el-form-item>
                <el-form-item label="商品描述">
                  <span>{{ props.row.desc }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column
            label="商品 ID"
            prop="id">
          </el-table-column>
          <el-table-column
            label="商品名称"
            prop="name">
          </el-table-column>
          <el-table-column
            label="描述"
            prop="desc">
          </el-table-column>
        </el-table>
      </el-main>

      
      
    </el-container>
  </el-container>

 <el-container>
  <el-footer style="height: 75px;">
    <el-tag style="color:white;">footer</el-tag>
    <el-tag style="color:white;">footer</el-tag>
    <el-tag style="color:white;">footer</el-tag>
    <el-tag style="color:white;">footer</el-tag>
    <el-tag style="color:white;">footer</el-tag>
  </el-footer>
   </el-container>
</el-container>

<!-- <el-container>
  <el-aside width="200px">Aside</el-aside>
  <el-container>
    <el-header>Header</el-header>
    <el-main>Main</el-main>
  </el-container>
</el-container> -->

<!-- <el-container>
  <el-aside width="200px">Aside</el-aside>
  <el-container>
    <el-header>Header</el-header>
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</el-container> -->
</div>
</template>

<script>
// import loading from "@/utils/loading";

export default{
  data(){
    return {
      loading2: true,
      tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
        ],
        tableData5: [{
          id: '12987122',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987123',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987125',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987126',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }]
    }
  },
  methods:{

    backHome(){
      this.$router.replace('/');
    }
  },
  mounted() {
    
    loading.close();
  }

}
</script>

<style>
  .el-header, .el-footer {
    background-color: #0073b1;
    /* background-color: #303133; */
    color: #333;
    text-align: center;
    line-height: 80px;
    
  }
  
  .el-aside {
    background-color: #303133;
    /* background-color: #0073b1; */
    color: #333;
    text-align: center;
    line-height: 600px;
  }
  
  .el-main {
    background-color: white;
    color: #333;
    text-align: center;
    /* line-height: 160px; */
  }

   .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  
  /* body > .el-container {
    margin-bottom: 40px;
  } */
  
  /* .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  } */
</style>
