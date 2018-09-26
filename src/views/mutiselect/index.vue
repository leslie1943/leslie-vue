<template>
    <div style="text-align:center;">
      {{selected}}
      <multiselect
      placeholder="Pick some"

      v-model="selected"
      multiple
      searchable
      :taggable="false"
      :close-on-select="false"
      :clear-on-select="true"
      :options="options">
      </multiselect>
           
      <el-button type="primary" size="small" @click="handdleGoHome">首页</el-button>
    </div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  components: { Multiselect },

  data() {
    return{
      selected: null,
      options:["suzhen","xiaomu","erbao","xiaomumama"]
    }
  },
  methods: {
    handdleGoHome() {
      this.$router.replace("/");
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

