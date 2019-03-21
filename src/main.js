// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

console.info(" ################## test require ################## ")
let { test_require } = require('@/utils/demo_require.js');
test_require('This function be require("@/utils/demo_require.js"');
console.info(" ################## test require ################## ")


console.info(" ################## test import ################## ")
import _, { test_import, name_import } from '@/utils/demo_import.js';
test_import('This function be require("@/utils/demo_import.js"');
_('I am export default function.');
console.info('I am be imported:' + name_import);
console.info(" ################## test import ################## ")

import '@/filter/index.js'

// ################### 引入 全局指令
import * as GlobalDirective from "@/directive/GlobalDirective.js";
// ################### 引入图标和字体问题
import '@/assets/font/iconfont.css';
import '@/assets/font/iconfont';
// ################### 引入 modules
import Vue from 'vue'
import App from './App'
import store from './store';
import router from './router'
import echarts from 'echarts'
import CitySelect from '@/components/city-select';
import "@/assets/patch.css";
import HappyScroll from 'vue-happy-scroll';
import 'vue-happy-scroll/docs/happy-scroll.css'
import ElementUI from 'element-ui';
import IView from 'iview';
import 'iview/dist/styles/iview.css'
import immutable from "immutable";


import 'element-ui/lib/theme-chalk/index.css';
import ToHome from "@/components/toHome/toHome";
import 'vue2-animate/dist/vue2-animate.min.css';
import TextHighLight from 'vue-text-highlight';
import TagsBall from 'vue-tags-ball';
import QuickMenu from 'vue-quick-menu'
import VueGraph from 'vue-graph'
import ViserVue from 'viser-vue'
import FormLayout from '@/components/FormLayout';
import ViewClamp from '@/components/ViewClamp';

// 引入图片组件
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'


import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'

//监听当路由发生变化
import '@/utils/routing';

// 初始化左侧导航, 并关闭loading
import { initLeftMenus } from './utils/auth';
initLeftMenus();

Vue.use(ElementUI);
Vue.use(HappyScroll)
Vue.use(CitySelect);
Vue.use(GlobalDirective);
Vue.use(ToHome);
Vue.use(Viewer);
Vue.use(TagsBall)
Vue.use(IView)
Vue.use(VueGraph)
Vue.use(ViserVue)
Vue.use(VueVideoPlayer)
Vue.use(FormLayout);
Vue.use(ViewClamp);


Vue.component('to-home', ToHome);
Vue.component('text-highlight', TextHighLight);
Vue.component('quick-menu', QuickMenu);

// Vue.use(echarts);
Vue.prototype.$echarts = echarts
Vue.prototype.$immutable = immutable

Vue.config.productionTip = false

const VUE_INSTANCE = new Vue({
  router,
  store,
  template: '<app/>',
  components: { App },
});

window.VUE_INSTANCE = VUE_INSTANCE;
VUE_INSTANCE.$mount("#app");