<template>
    <div class="annual-container">
        <viewer :images="imageList" style="background-color:pink">
            <div style="display:inline;white-space:normal; word-break:break-all;" v-for="(item,index) in imageList" :key="index">
                <img style="width:40px;height:40px;" :src="item">
            </div>
        </viewer>
         <hr>
        <div style="background-color:pink">
            <viewer :images="[image]" style="background-color:pink">
                <img style="width:400px;height:400px;border: 1px gray solid;" :src="image">
            </viewer>
        </div>
        
        <!-- <div class="result"> {{words}}</div> -->
       
        <!-- <div class="result">{{memeber}}</div> -->
        <hr>
        <div style="background-color:pink">
            <el-button v-if="pauseFlag" type="primary" @click="pause">Stop</el-button>
            <el-button v-else type="primary" @click="start">Start</el-button>
            <el-button type="success" @click="viewAward" plain>查看奖品</el-button>
        </div>

    <!-- ############# 图片预览 ############# -->
     <el-dialog  :modal-append-to-body="false"  :visible.sync="previewDialogVisible" width="90%" title="2019东软望海年会奖品一览">
        <div style="display:flex;align-items:center;">
            <img width="30%" :src="first" alt="">
            <img width="30%" :src="second" alt="">
            <img width="30%" :src="third" alt="">
        </div>
    </el-dialog>
    </div>
</template>

<script>

// import { setInterval, clearInterval } from 'timers';
import data from './data.js'
export default {
    data(){
        return data
    },
    methods:{
        getWord(){
            this.memeber = this.memeberList[Math.floor(Math.random() * 8)];
            this.words = this.wordsList[Math.floor(Math.random() * 8)];
            this.image = this.imageList[Math.floor(Math.random() * 43)];
        },
        pause(){
            this.pauseFlag = !this.pauseFlag;
            clearInterval(this.timerID);
        },
        start(){
            this.pauseFlag = !this.pauseFlag;
            this.timerID = setInterval(()=>this.getWord(),100);
        },
        viewAward(){
            this.previewDialogVisible = true;
        }
    },
    mounted(){
        this.timerID = setInterval(()=>this.getWord(),100);
        
    },
    destroyed(){
        clearInterval(this.timerID);
    }
};
</script>

<style lang="scss">
    .annual-container{
        padding: 10px 10px 10px 10px;
        // background-color: white;
        background-color:pink;
        text-align: center;

        .result{
            font-size: 64px;
            color:darkslategrey;
        }
    }
</style>

