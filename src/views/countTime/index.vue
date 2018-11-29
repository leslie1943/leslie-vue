<template>
<div>
    <TimeCountDown :endDate="expiredDate"></TimeCountDown>
</div>
</template>

<script>
import TimeCountDown from "@/components/time-count-down/time-count-down";
export default{
    components:{
        TimeCountDown
    },
    data(){
        return{
            expiredDate: "2019-07-06 23:33:33",
        }
    }
}
</script>
