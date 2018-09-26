<template>
    <div style="text-align:center;">
            <el-row>
              <el-col :offset="6" :span="12">
                产品名称：<el-input v-model="proName"  @blur="handdleNotificate" placeholder="失去焦点触发,只允许一个通知弹出"></el-input>
              </el-col>
            </el-row>

             <el-row>
              <el-col :offset="6" :span="12">
                产品品牌：<el-input  v-model="proBrand" @blur="handdleNotificate" placeholder="失去焦点触发,只允许一个通知弹出"></el-input>
              </el-col>
            </el-row>

             <el-row>
              <el-col :offset="6" :span="12">
                规格型号：<el-input  v-model="proSpeci" @blur="handdleNotificate" placeholder="失去焦点触发,只允许一个通知弹出"></el-input>
              </el-col>
            </el-row>
          

          <el-dialog
            :title="dialogTitle"
            :show-close="false"
            :close-on-press-escape="false"
            :close-on-click-modal="false"
            :visible.sync="dialogFlag"
            width="80%" >

            <!-- Step 1 -->
          <div v-if="currentStep===1">
            <el-row>
              <el-col :span="5">
                名称: <el-input v-model="proNameDialog"></el-input>
              </el-col>

              <el-col :offset="1" :span="5">
                品牌: <el-input v-model="proBrandDialog"></el-input>
              </el-col>

              <el-col :offset="1" :span="5">
                规格型号: <el-input v-model="proSpeciDialog"></el-input>
              </el-col>

              <el-col :offset="1" :span="5">
                <el-button type="primary">查询</el-button>
                <el-button type="primary" plain @click="handdleDialogReset">重置</el-button>
              </el-col>
            </el-row>

            <el-table
              :data="tableData"
              style="width: 100%">

            <el-table-column width="30" >
                <template slot-scope="scope">
                <el-radio :label="scope.row.id" v-model="chooseId" @change="handdleChooseChange(scope.row.id,scope.row)"></el-radio>
                </template>
            </el-table-column>

              <el-table-column
                prop="date"
                label="日期"
                align="center"
                header-align="center"
              >
              </el-table-column>

              <el-table-column
                prop="name"
                label="姓名"
                align="center"
                header-align="center"
              >
              </el-table-column>

              <el-table-column
                prop="address"
                align="center"
                header-align="center"
                label="地址">
              </el-table-column>

              <el-table-column
                align="center"
                header-align="center"
                label="操作">
                <template slot-scope="scope">
                  <el-button size="mini" type="text" @click="handdleNextStep">查看</el-button>
                </template>
              </el-table-column>

            </el-table>

            <br>
            <el-button type="primary" size="medium" @click="handdleChooseOK">选择</el-button>
            <el-button type="primary" plain="" size="medium" @click="handdleChooseCancel">取消</el-button>
        </div>

        <div v-if="currentStep===2">
          <el-button type="primary" size="medium" @click="handdleChooseAndClose">确定</el-button>
          <el-button plain size="medium" @click="handdleBackStep">返回</el-button>
        </div>
            

      </el-dialog>
      <hr>
      <el-button type="primary" size="small" @click="handdleGoHome">首页</el-button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      currentStep:1,
      proName:"",
      proBrand:"",
      proSpeci:"",
      dialogTitle:"协议供货产品库",

      proNameDialog:"",
      proBrandDialog:"",
      proSpeciDialog:"",

      dialogFlag: false,
      instance: "",
      noticeFlag:false,
      chooseId:"",
      tableData:[{
          id: 1234,
          date: '2016-05-03',
          name: '王小虎17',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          id: 1235,
          date: '2016-05-02',
          name: '王小虎16',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          id: 1236,
          date: '2016-05-04',
          name: '王小虎15',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          id: 1237,
          date: '2016-05-01',
          name: '王小虎14',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          id: 1238,
          date: '2016-05-08',
          name: '王小虎13',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          id: 1239,
          date: '2016-05-06',
          name: '王小虎12',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          id: 1240,
          date: '2016-05-07',
          name: '王小虎11',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }],

    };
  },
  methods: {
    handdleNotificate(){
      // 如果当前没有通知
      if(this.proName && this.proBrand && this.proSpeci && !this.noticeFlag){
        //给dialog赋值
        this.proNameDialog = this.proName;
        this.proBrandDialog = this.proBrand;
        this.proSpeciDialog = this.proSpeci;

        //已经有通知.
        this.noticeFlag = true;
        this.instance = this.$notify({
          title: '提示',
            message: '<span>发现协议库产品与申购明细相似</span> <span style="color:#20A0FF;"> 查看 </span>',
            type: 'primary',
            // iconClass:"el-icon-goods",
            dangerouslyUseHTMLString:true,
            duration: 0,
            offset:300,
            // showClose: false
            onClick:this.handleClickCallBack,
            onClose:this.handleCloseCallBack,
        });
      }
    },
    handleClickCallBack(){
      this.dialogFlag = true; 
      this.noticeFlag = false; //关闭当前通知 并 重置通知标识
      this.instance.close();
      console.info("Notification has been closed!");
    },
    handleCloseCallBack(){
      this.noticeFlag = false; //关闭当前通知 并 重置通知标识
    },

    handdleGoHome() {
      this.$router.replace("/");
    },

    handdleChooseChange(id,data){
      console.info(id);
      console.info(data);
    },

    handdleChooseOK(){
      this.dialogFlag = false;
      this.chooseId = "";
    },
    handdleChooseCancel(){
      this.dialogFlag = false;
      this.chooseId = "";
    },
    handdleDialogReset(){
      this.proNameDialog = "";
      this.proBrandDialog = "";
      this.proSpeciDialog = "";
    },
    handdleNextStep(){
      this.dialogTitle = "协议产品详情";
      this.currentStep = 2;
    },
    handdleBackStep(){
      this.dialogTitle = "协议供货产品库";
      this.currentStep = 1;
    },
    handdleChooseAndClose(){
      this.dialogFlag = false;
      this.currentStep = 1;
      this.chooseId = "";
    }
  },
};
</script>

<style>
.el-notification{
  cursor: pointer;
}
</style>
