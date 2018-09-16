<template>
<div style="text-align:center;">  
 <BasicEditForm :formObject="formObject" ref="personFormRef"></BasicEditForm>

 <el-button type="primary"  @click="handleDoAction">提交</el-button>

  <!-- Back -->
  <ToHome></ToHome>
</div>
</template>

<script>
import formData from './data.js';
import ToHome from "@/components/toHome/toHome";
import BasicEditForm from "@/components/basicElement/basicEditForm";

export default {
  components:{
    ToHome,BasicEditForm
  },
  data(){
    return {
        formObject: formData,
    }
  },

  methods:{
    handleDoAction(){
      this.$refs["personFormRef"].validateForm().then(subForm => {
        // 子菜单通过必填项检验
        if(subForm.validated){
          this.$confirm("确认提交?", "提示", {confirmButtonText: "确定",cancelButtonText: "取消",type: "warning"}).then(()=>{
            // 子页面返回的数据: res
            this.$message.success({type: "success",message: subForm});
          }).catch(()=>{
            console.info("取消提交");
          })
        }
        // 子菜单未通过必填项检验
        else{
          this.$message.warning({type: "warning",message: "数据录入错误，请检查表单！"});
        }
      });
    }
  }
}
</script>

