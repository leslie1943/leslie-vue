// 引入store
import store from '../store';

// NProgress.start();

// 引入路由信息表
import  { constRouterMap } from '../router'

// 设置mapGetter
export function initLeftMenus() {
    store.commit('permission/INIT_LEFT_MENUS', constRouterMap);
    setTimeout(()=>{
        // 触发loading关闭
        store.commit('endLoading');
        // NProgress.done();
    },3000)
}
