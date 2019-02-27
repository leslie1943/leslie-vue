// 引入 router
import router from '@/router';
// 引入 store
import store from '@/store';
// Progress 进度条
import NProgress from 'nprogress';
// Progress 进度条样式
import 'nprogress/nprogress.css';

import { constRouterMap } from '../router'

router.beforeEach(async (to, from, next) => {

    // 进度条 start
    console.info('【DEBUG-NProgress】 is starting...');
    NProgress.start();

    // 全局 loading start.
    console.info('【DEBUG-Loading is start...');
    // store.commit('startLoading');

    console.info('【DEBUG-Router】: to detail');
    console.info(to);

    console.info('【DEBUG-Router】: from detail');
    console.info(from);

    //执行跳转
    next();

    // 触发全局 loading
    // setTimeout(() => {
    //     console.info('【DEBUG-Loading is end...');
    //     // 全局 loading end.
    //     store.commit('endLoading');
    // },2000);

    // 触发全局 NProgress - 纯粹是为了实验的代码
    // setTimeout(() => {
    //     console.info('【DEBUG-NProgress】 is ending...');
    //     // 进度条 done
    //     NProgress.done();
    // },3000);
    NProgress.done();
    console.info('【DEBUG-NProgress】 is ending...');
})