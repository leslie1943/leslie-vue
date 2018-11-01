
export default [
    {
      path: '/',
      name: '首页',
      children:[
        {
          path: '/',
          name: '快捷入口',
        },
        {
          path: '/temp',
          name: '临时区域',
        },
        {
          path: '/bgImage',
          name: '背景图片',
        },
        {
          path: '/drama',
          name: '剧本详情',
        },
      ]
    },
    {
      path: '/layout',
      name: '布局',
      icon: 'el-icon-sold-out',
      children:[
        {
          path: '/layout',
          name: '布局',
          icon: 'el-icon-sold-out',
        },
        {
          path: '/iviews',
          name: 'IViews',
        },
    
        {
          path: '/viser',
          name: 'Viser',
        },
        {
          path: '/video',
          name: '视频插件',
        },
      ]
    },
    {
      path: '/countTime',
      name: '倒计时插件',
      icon: 'el-icon-news',
    },
    {
      path: '/immutable',
      name: '断链插件',
    },

    {
      path: '/echarts',
      name: 'ECharts',
    },
    {
      path: '/table',
      name: '列表展示',
    },
    {
      path: '/notice',
      name: '消息提醒',
    },
    {
      path: '/card',
      name: '卡片展示',
    },
    {
      path: '/mutiselect',
      name: '多选操作',
    },
    {
      path: '/slot',
      name: '插槽实列',
    },
    {
      path: '/validate',
      name: '表单验证',
    },
    {
      path: '/array',
      name: '数组操作',
    },
    {
      path: '/basicForm',
      name: '基础表单',
    },
    {
      path: '/directives',
      name: '指令练习',
    },
    {
      path: '/transition',
      name: '动画效果',
      children:[
        {
          path: '/transition',
          name: '动画效果',
        },
        {
          path: '/mixin',
          name: '混入模式',
        },
        {
          path: '/texthighlight',
          name: '文字高亮',
        },
        {
          path: '/tagsball',
          name: '旋转球体',
        },
        {
          path: '/quickmenu',
          name: '快速菜单',
        },
      ]
    },
    
    
    
    //to paste
  ]
