import router from '@/router';
router.beforeEach(async (to, from, next) => {
    console.info(to);
    console.info('to --- from');
    console.info(from);
    next();
})