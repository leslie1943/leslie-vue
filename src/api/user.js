import fetch from '@/utils/fetch';

export function getUserInfoAPI() {
    return fetch({
        method: 'get',
        // url: '/api/user/getUserInfo',
        url: '/api/user/getUserList',
        params: {id:123},
    });
}

export function login(con) {
    // const params = con;
    return fetch({
        method: 'get',
        // url: '/api/user/getUserInfo',
        url: '/api/user/getLoginUser',
        params: con
    });
}