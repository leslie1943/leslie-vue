import fetch from '@/utils/fetch';

export function getUserInfo() {
    return fetch({
        method: 'get',
        url: '/api/user/getUserInfo',
        params: {},
    });
}