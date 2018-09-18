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
import slot from '../views/slot'
import validate from '../views/validate'
import array from '../views/array'
import basicForm from '../views/basicForm/'
import directives from '../views/directives/'

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
    {
      path: '/slot',
      name: 'slot',
      component: slot
    },
    {
      path: '/validate',
      name: 'validate',
      component: validate
    },
    {
      path: '/array',
      name: 'array',
      component: array
    },
    {
      path: '/basicForm',
      name: 'basicForm',
      component: basicForm
    },
    {
      path: '/directives',
      name: 'directives',
      component: directives
    },
  ]


let router = new Router({
  model: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes: constRouterMap
});

export default router;

