import router from '@/router';
import NProgress from 'nprogress'; // Progress 进度条
import 'nprogress/nprogress.css'; // Progress 进度条样式


router.beforeEach(async (to, from, next) => {
    NProgress.start();
    console.info('【NProgress】 is starting...');

    console.info('【Router】: to detail');
    console.info(to);

    console.info('【Router】: from detail');
    console.info(from);
    next();
    
    setTimeout(()=>{
        console.info('【NProgress】 is done...');
        NProgress.done();
    },2000);
})