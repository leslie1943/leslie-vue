import Vue from 'vue'
import Router from 'vue-router'
import main from '../views/main'
import layout from '../views/layout'
import countTime from '../views/countTime'
import immutable from '../views/immutable'
import echarts from '../views/echarts'
import table from '../views/table'
import notice from '../views/notice'
import card from '../views/card'
import mutiselect from '../views/mutiselect'

Vue.use(Router)

export const constRouterMap =
   [
    {
      path: '/',
      name: 'main',
      component: main
    },

    {
      path: '/layout',
      name: 'layout',
      component: layout
    },

    {
      path: '/countTime',
      name: 'countTime',
      component: countTime
    },

    {
      path: '/immutable',
      name: 'immutable',
      component: immutable
    },

    {
      path: '/echarts',
      name: 'echarts',
      component: echarts
    },
    {
      path: '/table',
      name: 'table',
      component: table
    },
    {
      path: '/notice',
      name: 'notice',
      component: notice
    },
    {
      path: '/card',
      name: 'card',
      component: card
    },
    {
      path: '/mutiselect',
      name: 'mutiselect',
      component: mutiselect
    },
  ]


let router = new Router({
  model: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes: constRouterMap
});

export default router;

