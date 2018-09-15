<template>
    <div style="text-align:left;">
        
        <el-row>
            <!-- 左边标题区域区域 -->
            <el-col :span="1" style="padding-top:8px;">
                <span style="color:#5aaafa;font-size: 16px;">▎</span>
                <span style="font-weight:bold;">{{localModel.title}}</span>
            </el-col>

            <!-- 右边内容区域 -->
            <el-col :span="22">
                <!-- form -->
                <el-form :model="localModel.formModel" :rules="localModel.formRules" label-width="80px" :ref="localModel.formRef" label-position="left">
                    <!-- row -->
                    <el-row class="form-row">
                        <!-- col -->
                        <el-col v-for="(item,index) in localModel.fieldsArray" :key="index" :offset="1" :span="getColSpan(item)">
                            <!-- 表单项 -->
                            <el-form-item :label="item.label" :prop="item.prop">
                                <!-- 表单项详细 -->
                                
                                <!-- ################## TYPE = INPUT ################## -->
                                <div v-if="item.type=='input'">
                                    <span v-if="item.prefix" style="padding-right:5px;" >{{item.prefix}}</span>
                                    <el-input :style="{'width':item.width}" v-model="localModel.formModel[item.attr]" :placeholder="item.placeholder"></el-input>
                                    <!-- 表单后缀 -->
                                    <span  v-if="item.suffix" style="padding-left:5px;">{{item.suffix}}</span>
                                </div>

                                <!-- ################## TYPE = SELECT ################## -->
                                <div v-if="item.type=='select'">
                                    <el-select  :style="{'width':item.width}" v-model="localModel.formModel[item.attr]" :placeholder="item.placeholder">
                                        <el-option v-for="(opt,t) in item.options" :key="t" :label="opt.label" :value="opt.value"></el-option>
                                    </el-select>

                                    <!-- 表单后缀 -->
                                    <span>{{item.suffix}}</span>
                                </div>

                                <!-- ################## TYPE = Radio ################## -->
                                <div v-if="item.type=='radio'">
                                    <el-radio-group v-model="localModel.formModel[item.attr]" :placeholder="item.placeholder">
                                        <el-radio v-for="(opt,r) in item.options" :key="r" :label="opt.value" >{{opt.label}}</el-radio>
                                    </el-radio-group>

                                    <!-- 表单后缀 -->
                                    <span>{{item.suffix}}</span>
                                </div>

                                <!-- ################## TYPE = Date ################## -->
                                <div v-if="item.type=='date'">
                                    <el-date-picker type="date" :style="{'width':item.width}" :placeholder="item.placeholder" v-model="localModel.formModel[item.attr]" value-format="yyyy-MM-dd" format="yyyy-MM-dd" ></el-date-picker>

                                    <!-- 表单后缀 -->
                                    <span>{{item.suffix}}</span>
                                </div>

                                <!-- ################## TYPE = DateRange ################## -->
                                <div v-if="item.type=='dateRange'">
                                    <el-date-picker :style="{'width':item.width}" type="daterange" v-model="localModel.formModel[item.attr]" align="right" unlink-panels range-separator="至" :start-placeholder="item.options.startPlaceholder" value-format="yyyy-MM-dd" format="yyyy-MM-dd" :end-placeholder="item.options.endPlaceholder">
                                    </el-date-picker>

                                    <!-- 表单后缀 -->
                                    <span>{{item.suffix}}</span>
                                </div>

                                <!-- ################## TYPE = Checkbox ################## -->
                                <div v-if="item.type=='checkbox'">
                                    <el-checkbox-group v-model="localModel.formModel[item.attr]">
                                        <el-checkbox v-for="(opt,t) in item.options" :key="t" :label="opt.value">{{opt.label}}</el-checkbox>
                                    </el-checkbox-group>
                                    <!-- 表单后缀 -->
                                    <span>{{item.suffix}}</span>
                                </div>

                                <!-- ################## TYPE = TextArea ################## -->
                                <div v-if="item.type=='textArea'">
                                    <el-input type="textarea" :rows="2" v-model="localModel.formModel[item.attr]" :placeholder="item.placeholder"></el-input>
                                    <!-- 表单后缀 -->
                                    <span>{{item.suffix}}</span>
                                </div>

                                <!-- ################## TYPE = address ################## -->
                                <div v-if="item.type=='address'">
                                    <CitySelect
                                        :distVisible="true"
                                        :selectprov="localModel.formModel.addrProvince"
                                        :selectcity="localModel.formModel.addrCity"
                                        :selectdist="localModel.formModel.addrDist"
                                        :selectprovdesc="localModel.formModel.addrProvinceDesc"
                                        :selectcitydesc="localModel.formModel.addrCityDesc"
                                        :selectdistdesc="localModel.formModel.addrDistDesc"
                                        v-on:change="handleCitySelectChange">
                                    </CitySelect>
                                </div>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </el-col>
        </el-row>

        <el-row style="margin-bottom:10px;">
            <el-col :offset="2" :span="20" style="width:87.5%">
                <hr>
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
            localModel:{
            }
        };
    },
    methods:{
        getColSpan(item){
            return item.type == "textArea" ? 23 : 11;
        },
        async validateForm(){
            await this.$refs[this.localModel.formRef].validate(valid => {
                if (valid) {
                    this.localModel.formModel.validated = true;
                }else{
                    this.localModel.formModel.validated = false;
                }
            });
            return this.localModel.formModel
        },
        handleCitySelectChange(data) {
            console.info(data);
            this.localModel.formModel.addrCity = data.selectCity;
            this.localModel.formModel.addrCityDesc = data.selectCityDesc;
            this.localModel.formModel.addrProvince = data.selectProv;
            this.localModel.formModel.addrProvinceDesc = data.selectProvDesc;
            this.localModel.formModel.addrDist = data.selectDist;
            this.localModel.formModel.addrDistDesc = data.selectDistDesc;
        },
    },
    created(){
        this.localModel = this.formObject;
    }
}
</script>
<style>
/* .el-form-item__label:before {
  content: "*";
  color: #f56c6c;
  margin-right: 5px;
  font-weight: bold;
} */
.el-form-item__label:before {
  content: "";
  margin-right: 8px;
  font-weight: bold;
}
</style>

