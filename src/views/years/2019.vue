<template>
    <div class="years-2019-container">
        <!-- <h1 style="color:orange">{{words}}</h1> -->
        <img style="width:1287px;height:500px;" :src="img_2019">
    </div>
</template>

<script>
import img_2019 from './images/new.jpg';

export default {
    data(){
        return{
            img_2019: img_2019,
        }
    },
    methods:{

    }
};
</script>

<style lang="scss">
    .years-2019-container{
        padding: 10px 10px 10px 10px;
        background-color: white;
        text-align: center;
    }
</style>

