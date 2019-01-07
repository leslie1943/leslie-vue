import Vue from 'vue'
import Router from 'vue-router'
import BaseLayout from '@/layout/baseLayout';
import LoginLayout from '@/layout/loginLayout';

Vue.use(Router)

export const constRouterMap =
  [
    // ############## 首页 ##############
    {
      path: '/login',
      name: '登录',
      icon: 'el-icon-menu',
      component: LoginLayout,
      hideChildren: true,
      children: [
        {
          path: '/login',
          name: '登录',
          component: () => import('../views/login/') ,
        }
      ],
    },
    // ############## 首页 ##############
    {
      path: '/',
      name: '首   页',
      icon: 'el-icon-menu',
      component: BaseLayout,
      hideChildren: true,
      children: [
        {
          path: '/',
          name: '首页',
          component: () => import('../views/main/'),
        }
      ],
    },
    // ############## 内部管理 ##############
    {
      path: '/internal',
      name: '内部管理',
      icon: 'el-icon-menu',
      component: BaseLayout,
      hideChildren: true,
      children: [
        {
          path: '/internal',
          name: '首页',
          component: () => import('../views/main/'),
        }
      ],
    },

    // ############## 客户管理 ##############
    {
      path: '/client',
      name: '客户管理',
      icon: 'el-icon-menu',
      component: BaseLayout,
      hideChildren: true,
      children: [
        {
          path: '/client',
          name: '首页',
          component: () => import('../views/main/'),
        }
      ],
    },

    // ############## Primary menu drama ##############
    {
      path: '/drama',
      name: '剧本部分',
      icon: 'el-icon-menu',
      component: BaseLayout,
      hideChildren: false,
      children: [
        {
          path: '/drama',
          name: '剧本详情',
          component: () => import('../views/drama/index'),
        },
        {
          path: '/drama-person',
          name: '剧本玩家',
          component: () => import('../views/drama/person.vue'),
        },
      ]
    },

    {
      // ############## Primary menu ##############
      path: '/quick',
      name: 'Vue 基础',
      icon: 'el-icon-menu',
      component: BaseLayout,
      redirect: '/quick',
      children: [
        {
          path: '/formlayout',
          name: '表单布局',
          component: () => import('../views/formlayout'),
        },
        {
          path: '/fundCard',
          name: '经费卡片',
          component: () => import('../views/fundCard'),
        },
        {
          path: '/quick',
          name: '快捷入口',
          component: () => import('../views/main'),
        },
        {
          path: '/table',
          name: '列表示例',
          component: () => import('../views/table'),
        },
        {
          path: '/card',
          name: '简单卡片',
          component: () => import('../views/card'),
        },

        {
          path: '/slot',
          name: '插槽应用',
          component: () => import('../views/slot'),
        },
        {
          path: '/validate',
          name: '表单校验',
          component: () => import('../views/validate'),
        },
        {
          path: '/array',
          name: '数组修改',
          component: () => import('../views/array'),
        },
        {
          path: '/api',
          name: '测试接口',
          component: () => import('../views/api'),
        },
        {
          path: '/basicForm',
          name: '基础表单',
          component: () => import('../views/basicForm'),
        },
        {
          path: '/directives',
          name: '指令示例',
          component: () => import('../views/directives'),
        },

        {
          path: '/mixin',
          name: '混入模式',
          component: () => import('../views/mixin'),
        },
        {
          path: '/temp',
          name: '临时区域',
          component: () => import('../views/temp'),
        },
        {
          path: '/bgImage',
          name: '背景图片',
          component: () => import('../views/bgImage'),
        },

        {
          path: '/layout',
          name: '布局示例',
          icon: "el-icon-rank",
          component: () => import('../views/layout'),
          
        },
        {
          path: '/countTime',
          name: '倒计时',
          icon: "el-icon-rank",
          component: () => import('../views/countTime'),
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
          component: () => import('../views/echarts'),
        },
        {
          path: '/mutiselect',
          name: '多选插件',
          component: () => import('../views/mutiselect'),
        },
        {
          path: '/transition',
          name: '动画插件',
          component: () => import('../views/transition'),
        },
        {
          path: '/texthighlight',
          name: '高亮插件',
          component: () => import('../views/texthighlight'),
        },
        {
          path: '/tagsball',
          name: '旋转球体',
          component: () => import('../views/tagsball'),
        },
        {
          path: '/quickmenu',
          name: '快捷菜单',
          component: () => import('../views/quickmenu'),
        },
        {
          path: '/video',
          name: '视频插件',
          component: () => import('../views/video'),
        },
        {
          path: '/immutable',
          name: '断链助手',
          icon: 'icon-shengouguanli',
          component: () => import('../views/immutable'),
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
          component: () => import('../views/iviews'),
        },
        {
          path: '/viser',
          name: 'Viser',
          component: () => import('../views/viser'),
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
          component: () => import('../views/notice'),
        }
      ],
    },
    // ############## Primary menu ##############
    {
      path: '/annual',
      name: '年会',
      icon: 'el-icon-menu',
      component: LoginLayout,
      children: [
        {
          path: '/annual',
          name: '年会',
          component: () => import('../views/annual'),
        }
      ],
    },

    {
      path: '/lottery',
      name: '年会',
      icon: 'el-icon-menu',
      component: LoginLayout,
      children: [
        {
          path: '/lottery',
          name: '年会',
          component: () => import('../views/lottery'),
        }
      ],
    },

    {
      path: '/years',
      name: 'Years',
      icon: 'el-icon-menu',
      component: BaseLayout,
      children: [
        {
          path: '/years/2019',
          name: '2019',
          component: () => import('../views/years/2019'),
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
