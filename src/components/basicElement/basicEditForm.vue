<template>
    <div>
        <el-row>
            <!-- 左边标题区域区域 -->
            <el-col :span="2">
                <span style="color:#5aaafa;font-size: 16px;">▎</span>
                <span>{{formObject.title}}</span>
            </el-col>

            <!-- 右边内容区域 -->
            <el-col :span="22">
                <el-form :model="formObject.formModel" :rules="formObject.formRules" label-width="80px" :ref="formObject.formRef" label-position="left">
                    <el-row class="form-row">
                        <el-col v-for="(item,index) in formObject.fieldsArray" :key="index" :offset="1" :span="10">
                            <el-form-item :label="item.label" :prop="item.prop">
                                <el-input v-model="formObject.formModel[item.attr]" :placeholder="item.placeholder"></el-input>
                                <span>{{item.suffix}}</span>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </el-col>

        </el-row>
    </div>
</template>

<script>
export default {
    name:'basicEditForm',
    props: {
        formObject: Object
    },
    data() {
        return {
        };
    },
}
</script>


