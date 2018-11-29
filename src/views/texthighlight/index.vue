<template>
  <div style="text-align:center;">
  
    <el-row>
      <el-col :offset="8" :span="8">
        Search <el-input v-model="searchKey" @blur="handleChangeModel"></el-input>
      </el-col>

      <el-col :offset="1" :span="1" style="line-height:36px;">
        <span><el-checkbox v-model="splitModel" label="Split With Space" border size="medium" @change="handleChangeModel"></el-checkbox></span>
      </el-col>
    </el-row>

    <el-row v-if="queries.length > 1">
      <el-col :offset="8" :span="8">
        <el-tag type="success" style="margin:10px;" v-for="(item,key) in queries" :key="key">{{item}}</el-tag>
      </el-col>
    </el-row>
    
    <br><br>
    <!-- children of <text-highlight> must be a plain string. -->
    <text-highlight :queries="queries" :highlightStyle="highLightStyles" :caseSensitive="false">
      Tropical birds scattered as Drake veered the Jeep onto an old rutted track, snapping branches and tearing away vines,plowing through the rain forest with killers in pursuit, bullets flying, a gorgeous but pouty girl in the passenger’s seat, and a bitch of a headache. With only one of his arms on the wheel, the Jeep slewed to the left, and the pouty girl screamed as he forced the vehicle back onto the trail just before they would have crashed into a felled tree.&lt;script&gt;vue-text-highlight is also safe against possible html injection&lt;/script&gt;
    </text-highlight>
  </div>
</template>

<script>
export default {
  data(){
    return{
      queries: [],
      description: 'Tropical BIRDS scattered as Drake veered the Jeep',
      highLightStyles:{
        'font-family':'Micrsoft-YaHei',
        'background-color':'black',
        'color':'#1A7A4F',
        'font-size':'26px'
      },
      splitModel:false,
      searchKey:"",
    }
  },
  methods:{
    handleChangeModel(){
      if(this.splitModel){
        this.queries = this.searchKey.split(" ");
      }else{
        this.queries = [];
        this.queries[0] = this.searchKey;
      }
    }
  },
  mounted: function () {},
}

</script>

<style lang="scss">

</style>

