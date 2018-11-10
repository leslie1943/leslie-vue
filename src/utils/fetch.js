import axios from 'axios';

import { Message } from 'element-ui';

const service = axios.create({
    // baseURL: getBaseUrl(),
    baseURL: '/',
    timeout: 60 * 1000,

});

axios.interceptors.request.use((config) => {
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
