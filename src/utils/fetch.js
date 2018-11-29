import axios from 'axios';

import { Message } from 'element-ui';

const service = axios.create({
    // baseURL: getBaseUrl(),
    baseURL: '/',
    timeout: 60 * 1000,

});

// request拦截器
service.interceptors.request.use((config) => {
    if (config.data) {
        let dStr = JSON.stringify(config.data);
        if (dStr) {
            config.data = JSON.parse(dStr.replace(/\s+\"/g, '"').replace(/\"\s+/g, '"'))
        }
    }
    if (config.params) {
        let pStr = JSON.stringify(config.params);
        if (pStr) {
            config.params = JSON.parse(pStr.replace(/\s+\"/g, '"').replace(/\"\s+/g, '"'))
        }
    }

    if (config.method == 'get' || config.method == 'GET') {
        if (!config.params) {
            config.params = {}
        }
        config.params['nowT'] = new Date().getTime(); // 解决IE GET方法缓存问题
    }
    return config;
}, (error) => {
    Promise.reject(error);
});

service.interceptors.response.use((response) => {
    return response;
}, (error) => {
    console.info(error);
    let msg = error.message == 'Network Error' ? '网络请求出错，请检查网络后重试' : "网络异常";
    Message({
        message: msg,
        type: "error",
        duration: 3 * 1000,
    });
    return new Promise(() => { });
});

export default service;
