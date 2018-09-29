<template>
  <div style="text-align:center;">

    <el-upload
      class="upload-demo"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      multiple>
      <i style="color:#66b1ff;" class="el-icon-upload"></i>
      <div class="el-upload__text">将图片拖到此处,或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <!-- Back -->
    <!-- <to-home></to-home> -->
  </div>
</template>

<script>
export default {
}
</script>
