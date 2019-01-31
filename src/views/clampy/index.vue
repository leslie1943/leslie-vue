<template>
  <div>
    <h1>
      <ViewClamp :text="shortText"></ViewClamp>
    </h1>
    <h1>
      <ViewClamp :text="longText"></ViewClamp>
    </h1>
  </div>
</template>

<script>

export default {
  data() {
    return {
      shortText: '显示的少于9个字',
      longText: '需求公告需要供应商提高至少3种以上的证件'
    }
  },
}
</script>

<style lang="scss">
.clampy-main-container {
}
</style>
