<template>
    <div class="annual-container">
        <TagsBall></TagsBall>
        <br/>
        <el-button type="primary" @click="getWord">王牌对王牌: 选取字母</el-button>
        <br/>
        <h1 style="color:green;">{{this.words}}</h1>

        <div style="margin-top:100px;"></div>
        <el-button type="primary" @click="getMember">王牌对王牌: 选取人员</el-button>
        <br/>
        <h1 style="color:orange;">{{this.memeber}}</h1>
    </div>
</template>

<script>

import TagsBall from "@/views/tagsball"
export default {
    components:{TagsBall},
    data(){
        return{
            words: "",
            wordsList:["B L","L M","P T","K F","C P","G L","J K","D S","H H"],
            memeber:"",
            memeberList:["于超1号","于超2号","于超3号","于超4号","于超5号","于超6号","于超7号","于超8号","于超9号"],
        }
    },
    methods:{
        getWord(){
            this.words = this.wordsList[Math.floor(Math.random() * 8)];
        },
        getMember(){
            this.memeber = this.memeberList[Math.floor(Math.random() * 8)];
        }
    }
};
</script>

<style lang="scss">
    .annual-container{
        padding: 10px 10px 10px 10px;
        background-color: white;
        text-align: center;
    }
</style>

