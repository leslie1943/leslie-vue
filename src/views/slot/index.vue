<template>
  <base-layout>
    <!-- 使用template slot父组件里有具名插槽定义 -->
    <!-- 1: template slot=xxx -->
    <!-- 2: html tag slot=xxx -->
    <div slot="header">
      <h1>Here might be a page title</h1>
    </div>

    <h1 slot="header">Here might be a page title in h1</h1>

    <p>A paragraph for the main content.</p>
    <p>And another one.</p>

    <div slot="footer">
      <h1>Here might be a footer h1</h1>
    </div>
    <p slot="footer">here might be a footer in p</p>

    <div style="text-align:center;background:#409EFF;color:white;" slot="up">
      <p>菜单-up-1</p>
      <p>菜单-up-2</p>
      <p>菜单-up-3</p>
      <p>菜单-up-4</p>
      <p>菜单-up-5</p>
      <p>菜单-up-6</p>
    </div>
    <div style="margin-top:5px;text-align:center;background:#C9A6C7;color:white;" slot="down">
      <p>菜单-down-1</p>
      <p>菜单-down-2</p>
      <p>菜单-down-3</p>
      <p>菜单-down-4</p>
      <p>菜单-down-5</p>
      <p>菜单-down-6</p>
    </div>
  </base-layout>
</template>

<script>
// import loading from "@/utils/loading";
import BaseLayout from "@/components/baseLayout/";
export default {
  components: { BaseLayout }
}
</script>

