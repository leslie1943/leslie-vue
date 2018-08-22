<template>
    <div style="text-align:center;">
       <div id="mychart" :style="{width: '300px', height: '300px'}">
       </div>
        <div style="height:200px;width:400px;">
            <CommitChart></CommitChart>
        </div>
       
    </div>
</template>

<script>
import CommitChart from '@/components/CommitChart/CommitChart'

export default {
    components:{CommitChart},
  data() {
    return {
    }
  },
  mounted() {
   let myChart = this.$echarts.init(document.getElementById("mychart"));

   var option = {
            title: {
                // text: '在Vue中使用echarts' 
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            // backgroundColor: "green",
            color: ['#87cefa'],
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20],
                
            }]
        };

        myChart.setOption(option);
  },

};
</script>

<style >
.el-collapse-item__header{
    background-color:#409EFF;
}
</style>
