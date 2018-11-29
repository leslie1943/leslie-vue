<template>
  <div style="text-align:center;">
    <fund-card></fund-card>
  </div>
</template>

<script>
import FundCard from '@/components/FundCard/';
export default {
  components:{
    FundCard
  },
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
