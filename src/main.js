// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
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
import 'element-ui/lib/theme-chalk/index.css';

// 引入全局指令
import "./directive/GlobalDirective.js";


Vue.use(ElementUI);
Vue.use(HappyScroll)
Vue.use(CitySelect);


// Vue.use(echarts);
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   store,
//   components: { App },
//   template: '<App/>'
// })

const VUE_INSTANCE = new Vue({
  router,
  store,
  template: '<app/>',
  components: { App },
});

window.VUE_INSTANCE = VUE_INSTANCE;
VUE_INSTANCE.$mount("#app");