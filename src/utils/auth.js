// 引入store
import store from '../store';
// 引入路由信息表
import  { constRouterMap } from '../router'

// 设置mapGetter
export function initLeftMenus() {
    store.commit('permission/INIT_LEFT_MENUS', constRouterMap);
}
