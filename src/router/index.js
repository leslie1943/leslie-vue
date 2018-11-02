import Vue from 'vue'
import Router from 'vue-router'
import BaseLayout from '@/layout/baseLayout';
import main from '../views/main'
import layout from '../views/layout'
import countTime from '../views/countTime'
import immutable from '../views/immutable'
import echarts from '../views/echarts'
import table from '../views/table'
import notice from '../views/notice'
import card from '../views/card'
import mutiselect from '../views/mutiselect'
import slot from '../views/slot'
import validate from '../views/validate'
import array from '../views/array'
import basicForm from '../views/basicForm/'
import directives from '../views/directives/'
import transition from '../views/transition/'
import mixin from '../views/mixin/'
import texthighlight from '../views/texthighlight/'
import tagsball from '../views/tagsball/'
import quickmenu from '../views/quickmenu/'
import iviews from '../views/iviews/'
import viser from '../views/viser/'
import video from '../views/video/'
import temp from '../views/temp/'
import bgImage from '../views/bgImage/'
import drama from '../views/drama/'

Vue.use(Router)

export const constRouterMap =
  [
    {
      // ############## Primary menu ##############
      path: '/',
      name: 'Vue 基础',
      icon: 'el-icon-menu',
      component: BaseLayout,
      redirect: '/',
      children: [
        {
          path: '/',
          name: '快捷入口',
          component: main
        },
        {
          path: '/table',
          name: '列表示例',
          component: table
        },
        {
          path: '/card',
          name: '简单卡片',
          component: card
        },

        {
          path: '/slot',
          name: '插槽应用',
          component: slot
        },
        {
          path: '/validate',
          name: '表单校验',
          component: validate
        },
        {
          path: '/array',
          name: '数组修改',
          component: array
        },
        {
          path: '/basicForm',
          name: '基础表单',
          component: basicForm
        },
        {
          path: '/directives',
          name: '指令示例',
          component: directives
        },

        {
          path: '/mixin',
          name: '混入模式',
          component: mixin
        },
        {
          path: '/temp',
          name: '临时区域',
          component: temp,
          hidden:true,
        },
        {
          path: '/bgImage',
          name: '背景图片',
          component: bgImage
        },
        {
          path: '/drama',
          name: '剧本详情',
          component: drama
        },
        {
          path: '/layout',
          name: '布局示例',
          component: layout,
          icon: "el-icon-rank",
        },
        {
          path: '/countTime',
          name: '倒计时',
          component: countTime,
          icon: "el-icon-rank",
        },
      ],
    },
    // ############## Primary menu ##############
    {
      path: '/echarts',
      name: 'Vue 插件',
      icon: 'el-icon-menu',
      component: BaseLayout,
      redirect: '/echarts',
      children: [
        {
          path: '/echarts',
          name: 'ECharts',
          component: echarts
        },
        {
          path: '/mutiselect',
          name: '多选插件',
          component: mutiselect
        },
        {
          path: '/transition',
          name: '动画插件',
          component: transition
        },
        {
          path: '/texthighlight',
          name: '高亮插件',
          component: texthighlight
        },
        {
          path: '/tagsball',
          name: '旋转球体',
          component: tagsball
        },
        {
          path: '/quickmenu',
          name: '快捷菜单',
          component: quickmenu
        },
        {
          path: '/video',
          name: '视频插件',
          component: video
        },
        {
          path: '/immutable',
          name: '断链助手',
          icon: 'icon-shengouguanli',
          component: immutable,
        },
      ]
    },
    // ############## Primary menu ##############
    {
      path: 'other',
      name: '优选框架',
      icon: 'el-icon-menu',
      component: BaseLayout,
      redirect: '/iviews',
      children: [
        {
          path: '/iviews',
          name: 'IViews',
          component: iviews
        },
        {
          path: '/viser',
          name: 'Viser',
          component: viser,
        },
      ],
    },
    // ############## Primary menu ##############
    {
      path: '/notice',
      name: '隐藏子菜单',
      icon: 'el-icon-menu',
      component: BaseLayout,
      hideChildren: true,
      children: [
        {
          path: '/notice',
          name: '隐藏子菜单',
          component: notice,
        }
      ],
    },
]

let router = new Router({
  model: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes: constRouterMap
});

export default router;
