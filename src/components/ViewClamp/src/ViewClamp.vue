<template>
  <div class="epro-clamp-container">
    <p>
      <!-- Case: 默认显示 [被截断后的文字] + [展开按钮] -->
      <span v-if="show">
        {{truncate(text)}}
        <!-- 是否显示操作 -->
        <a v-if="text.length >= maxLen" @click="toggle()">{{readMore}}</a>
      </span>
      <!-- Case: 显示 [原文] + [收起按钮] -->
      <span v-if="!show">
        {{text}}
        <!-- 是否显示操作 -->
        <a v-if="text.length >= maxLen" @click="toggle()">{{readLess}}</a>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "ViewClamp",
  props: {
    'text': String,
    'readMore': {
      type: String,
      default: '展开',
    },
    'readLess': {
      type: String,
      default: '收起',
    },
    'maxLen': {
      type: Number,
      default: 9,
    }
  },
  data() {
    return {
      show: true,
    }
  },
  methods: {
    truncate(res) {
      if (res) {
        return res.toString().substring(0, this.maxLen);
      }
      return '';
    },
    toggle() {
      this.show = !this.show;
    }
  }
};
</script>
<style lang="scss">
.epro-clamp-container {
  // 左侧样式
}
</style>
