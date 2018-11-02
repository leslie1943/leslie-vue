<template>
  <base-layout>
  <!-- 使用template slot父组件里有具名插槽定义 -->
  <!-- 1: template slot=xxx -->
  <!-- 2: html tag slot=xxx -->
    <template slot="header">
      <h1>Here might be a page title</h1>
    </template>

    <h1 slot="header">Here might be a page title in h1</h1>

      <p>A paragraph for the main content.</p>
      <p>And another one.</p>

    <template slot="footer">
      <h1>Here might be a footer</h1>
      </template>
    <p slot="footer">here might be a footer in p
      </p>
    
  </base-layout>
 
</template>

<script>
// import loading from "@/utils/loading";
import BaseLayout from "@/components/baseLayout/";
export default {
  components: {BaseLayout}
}
</script>

