<template>
<div style="text-align:center;">

  <FormLayout leftTitle="基本信息">
     <div slot="right">
       <el-form :model="list" ref="listForm" label-width="90px">
        <el-row class="form-row">
          <el-col :span="12">
            <el-form-item label="需方名称" prop="x">
              <el-input v-model="list.x" placeholder="" :disabled="true"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="联系人" prop="y">
              <el-input v-model="list.y" placeholder=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="form-row">
          <el-col :span="12">
            <el-form-item label="联系手机" prop="z">
              <el-input v-model="list.z" placeholder=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="电子邮箱" prop="a">
              <el-input v-model="list.a" placeholder="请输入联系人Email"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
       </el-form>
     </div>
  </FormLayout>

  <FormLayout leftTitle="剧本清单">
     <div slot="right">
       <el-form :model="list" ref="listForm" label-width="90px">
        <el-row class="form-row">
          <el-col :span="12">
            <el-form-item label="需方名称" prop="x">
              <el-input v-model="list.x" placeholder="" :disabled="true"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="联系人" prop="y">
              <el-input v-model="list.y" placeholder=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="form-row">
          <el-col :span="12">
            <el-form-item label="联系手机" prop="z">
              <el-input v-model="list.z" placeholder=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="电子邮箱" prop="a">
              <el-input v-model="list.a" placeholder="请输入联系人Email"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
       </el-form>
     </div>
  </FormLayout>

  <FormLayout leftTitle="剧本任务">
     <div slot="right">
       <el-form :model="list" ref="listForm" label-width="90px">
        <el-row class="form-row">
          <el-col :span="12">
            <el-form-item label="需方名称" prop="x">
              <el-input v-model="list.x" placeholder="" :disabled="true"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="联系人" prop="y">
              <el-input v-model="list.y" placeholder=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="form-row">
          <el-col :span="12">
            <el-form-item label="联系手机" prop="z">
              <el-input v-model="list.z" placeholder=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="电子邮箱" prop="a">
              <el-input v-model="list.a" placeholder="请输入联系人Email"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
       </el-form>
     </div>
  </FormLayout>

</div>
</template>

<script>
export default {
  name: "formLayout",
  data() {
    return {
      list:{a:"",x:"",y:"",z:"",},
    };
  },
};
</script>
<style scoped>

</style>
