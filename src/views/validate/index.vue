<template>
<div style="text-align:center;">
  <!-- :show-message="false" -->
  <el-form label-width="100px" label-position="left" :model="personData" :rules="personrules" ref="personForm" class="demo-ruleForm">
    <el-row>
      <el-col :offset="6" :span="6">
        <!--prop 要和 personData里的属性一致 -->
        <el-form-item label="名字" prop="name" ref="nameForm">
          <el-input v-model="personData.name"></el-input>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :offset="6" :span="6">
        <el-form-item label="年龄" prop="age" ref="ageForm">
          <el-input v-model="personData.age"></el-input>
        </el-form-item>
      </el-col>
    </el-row>

      <el-row>
        <el-col :offset="6" :span="6">
          <el-form-item label="日期" prop="start" ref="startField">
            <el-date-picker type="date" placeholder="选择日期" v-model="personData.start" style="width: 100%;"></el-date-picker>
            -
          </el-form-item>
        </el-col>

        <el-col :span="6">
          <el-form-item label-width="10px" prop="end" ref="endFiled">
            <el-date-picker type="date" placeholder="选择日期" v-model="personData.end" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>

    <el-row>
      <el-col :offset="6" :span="6">
      <el-form-item>        
        <el-button type="primary" plain @click="handleValidateSingle('personForm','name')">单独校验名称</el-button>
        <el-button type="info" plain @click="handleClearValidate('nameForm')">移除校验名字</el-button>
        <br><br>

        <el-button type="primary" plain @click="handleValidateSingle('personForm','age')">单独校验年龄</el-button>
        <el-button type="info" plain @click="handleClearValidate('ageForm')">移除校验年龄</el-button>
        <br><br>

        <el-button type="primary" plain @click="handleValidateSingle('personForm','start')">单独校验开始日期</el-button>
        <el-button type="info" plain @click="handleClearValidate('startField')">移除校验开始日期</el-button>
        <br><br>

        <el-button type="primary" plain @click="handleValidateSingle('personForm','end')">单独校验结束日期</el-button>
        <el-button type="info" plain @click="handleClearValidate('endFiled')">移除校验结束日期</el-button>
        <br><br>

        <el-button type="primary" plain @click="handleValidateAll('personForm')">校验所有字段校验</el-button>
        <el-button type="info" plain @click="handleResetForm('personForm')">移除所有字段校验 by Reset</el-button>
        <el-button type="info" plain @click="handleRemoveValidate('personForm')">移除所有字段校验 by Clear</el-button>
        <br><br>

      </el-form-item>

       </el-col>
    </el-row>
  </el-form>

  <hr>
    <el-popover
    placement="right"
    width="600"
    trigger="click"
    >
      <div style="text-align:left;">
        label-width 可以作为单独属性为el-form-item使用 <br>
  
        el-form-item label-width="10px" prop="end"> <br>
          el-date-picker <br>
            type="date" placeholder="选择日期" v-model="personData.end" style="width: 100%;" <br>
          el-date-picker <br>
        el-form-item
      </div>

      <el-button type="warning" slot="reference">label-width tips</el-button>

    </el-popover>
</div>
</template>

<script>
import localrules from './rules';


export default {
  data(){
    return {
      personData:{
        name:"",
        age: '',
        start:'',
        end:''
      },
      //rules.
      personrules:localrules,
    }
  },
  methods:{
    // 重置
    handleResetForm(formName){
      this.$refs[formName].resetFields();
    },
    // 单独校验
    handleValidateSingle(formName,propName){
       this.$refs[formName].validateField(propName);
    },

    
    // 移除校验
    handleClearValidate(formName){
       this.$refs[formName].clearValidate();
    },
    // 校验全部
    handleValidateAll(formName){
      this.$refs[formName].validate(valid => {
        if(valid){
          this.$confirm("校验通过,是否提交?","提示",{
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type:"warning"
          }).then(() => {}).catch(() => {})
        }else{
          console.info("Not pass validation.");
        }
      });
    },
    handleRemoveValidate(formName){
      this.$refs[formName].clearValidate();
    }
  }
}
</script>

