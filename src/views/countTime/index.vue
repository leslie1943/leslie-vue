<docs>
  ## This is an Example component.
</docs>

<template>
  <div>
    <div>
      <TimeCountDown :endDate="expiredDate" :needAction="true" @handle-done="countdownListener"></TimeCountDown>
    </div>
    <div>
      <!-- 倒计时结束后的动作: 对话框强制提示 -->
      <el-dialog
        :show-close="false"
        :close-on-press-escape="false"
        :close-on-click-modal="false"
        :visible.sync="visible"
        width="60%"
      >
        <span slot="title">
          <i style="color:#ed852f;font-size:20px" class="el-icon-warning"></i> 提示
        </span>
        <h2>报价已截止！</h2>
        <span slot="footer" class="dialog-footer">
          <div style="text-align:center">
            <el-button @click="closeDialog" type="primary">走你</el-button>
          </div>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import TimeCountDown from "@/components/time-count-down/time-count-down";
export default {
  components: {
    TimeCountDown
  },
  data() {
    return {
      visible: false,
      //   expiredDate: "2019-07-06 23:33:33",
      expiredDate: "2019-02-25 16:18:55",
    }
  },
  methods: {
    countdownListener(flag) {
      this.visible = true;
      console.info('countdownListener flag:', flag)
    },
    closeDialog() {
      this.visible = false
    }
  }
}
</script>
