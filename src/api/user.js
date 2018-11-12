import fetch from '@/utils/fetch';

export function getUserInfoAPI() {
    return fetch({
        method: 'get',
        url: '/api/user/getUserInfo',
        params: {},
    });
}