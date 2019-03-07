<template>
  <div class="container">
    <!-- header 标签可以不要,为了设置样式 -->
    <header style="color:red;">
      <slot name="header"></slot>
    </header>
    <!-- main 标签可以不要,为了设置样式 -->
    <main>
      <slot></slot>
    </main>
    <!-- footer 标签可以不要,为了设置样式 -->
    <footer style="color:green;">
      <slot name="footer"></slot>
    </footer>

    <slot name="up"></slot>
    <slot name="down"></slot>
  </div>
</template>

<script>
export default {
  name: "BaseLayout"
}
</script>
