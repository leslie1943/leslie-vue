<template>
  <div style="text-align:center;">
    <!-- quick-menu:
      【 menuCount	Number	4	The number of menu item，option(2,3,4)】
      【 menuUrlList	Array	-	An array of Object of link of each menu item, like {isLink:true,url:\foo}】
      【 iconClass	Array	-	An array of icon class of each menu item】
      【 position	top-left,top-right,bottom-left or bottom-right	top-left	The position of quick menu】
      【 backgroundColor	String	#009dc7	The background color of quick menu】
      【 color	String	#ffffff	The color of quick menu icon】
      【 isOpenNewTab	Boolean	false	If the menu will open a new tab after click】
    -->
    <quick-menu
      :menu-count="1"
      background-color="#009DC7"
      :icon-class="icon1"
      :menu-url-list="list"
      position="top-left"
    ></quick-menu>
    <quick-menu
      :menu-count="4"
      color="orange"
      background-color="black"
      :icon-class="icon2"
      :menu-url-list="list"
      position="top-right"
    ></quick-menu>
    <quick-menu
      :menu-count="4"
      color="#96368E"
      background-color="pink"
      :icon-class="icon3"
      :menu-url-list="list"
      position="bottom-left"
    ></quick-menu>
    <quick-menu
      :is-open-new-tab="true"
      :menu-count="4"
      color="pink"
      background-color="#96368E"
      :icon-class="icon4"
      :menu-url-list="list"
      position="bottom-right"
    ></quick-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icon1: ["el-icon-info", "el-icon-error", "el-icon-warning", "el-icon-menu"],
      icon2: ["https://www.pexels.com/photo/two-men-sitting-in-front-of-each-other-on-white-gang-chairs-in-airport-waiting-area-968875/", "el-icon-picture-outline", "el-icon-setting", "el-icon-share"],
      icon3: ["el-icon-refresh", "el-icon-upload", "el-icon-loading", "el-icon-location"],
      icon4: ["el-icon-service", "el-icon-goods", "el-icon-date", "el-icon-bell"],
      list: [{ isLink: true, url: '/' }, { isLink: false, url: '' }, { isLink: false, url: '' }, { isLink: false, url: '' }],
    }
  },
  methods: {
  },
  created() {
  }
}
</script>

<style lang="scss">
</style>

