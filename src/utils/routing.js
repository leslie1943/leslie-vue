// 引入 router
import router from '@/router';
// 引入 store
import store from '@/store';
// Progress 进度条
import NProgress from 'nprogress';
// Progress 进度条样式
import 'nprogress/nprogress.css';

router.beforeEach(async (to, from, next) => {
    // 全局 loading start.
    store.commit('startLoading');
    // 进度条 start
    NProgress.start();
    
    console.info('【DEBUG-NProgress】 is starting...');

    console.info('【DEBUG-Router】: to detail');
    console.info(to);

    console.info('【DEBUG-Router】: from detail');
    console.info(from);
    next();
    
    setTimeout(() => {
        console.info('【DEBUG-NProgress】 is done...');
        // 进度条 done
        NProgress.done();
        // 全局 loading end.
        store.commit('endLoading');
    },2000);
})