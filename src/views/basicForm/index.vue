<template>
<div style="text-align:center;">  
 <BasicEditForm :formObject="formObject"></BasicEditForm>
  <!-- Back -->
  <ToHome></ToHome>
</div>
</template>

<script>
import ToHome from "@/components/toHome/toHome";
import BasicEditForm from "@/components/basicElement/basicEditForm";

export default{
  components:{
    ToHome,BasicEditForm
  },
  data(){
    return {
        formObject: {
          formModel:{name:"1",age:12,gender:'femal',first:'su',last:'zhen',testA:"A",testB:'V',testC:'C'},
          formRules:{
            name: [{ required: true, message: "请输入名称", trigger: "blur" }],
          },
          formRef:"personForm",
          title:"个人信息",
          fieldsArray:[
            {label:"测试字段",prop:"name",attr:"name",placeholder:"请输入名字",suffix:"",required:true},
            {label:"测试字段",prop:"age",attr:"age",placeholder:"请输入年龄",suffix:"",required:false},
            {label:"测试字段",prop:"gender",attr:"gender",placeholder:"请输入性别",suffix:"",required:false},
            {label:"测试字段",prop:"first",attr:"first",placeholder:"输入姓氏",suffix:"",required:false},
            {label:"测试字段",prop:"last",attr:"last",placeholder:"输入名字",suffix:"",required:false},
            {label:"测试字段",prop:"testA",attr:"testA",placeholder:"测试字段",suffix:"",required:false},
            {label:"测试字段",prop:"testB",attr:"testB",placeholder:"测试字段",suffix:"",required:false},
            {label:"测试字段",prop:"testC",attr:"testC",placeholder:"测试字段",suffix:"",required:false},
          ]
        }
    }
  }
}
</script>

