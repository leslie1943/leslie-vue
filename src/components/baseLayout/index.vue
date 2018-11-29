<template>
  <div class="container">
    <header style="color:red;">
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer style="color:green;">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
    name:"BaseLayout"
}
</script>
