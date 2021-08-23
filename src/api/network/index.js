import axios from 'axios'

export function request(config) {
    // 1.创建实例
    const instance = axios.create({
            // baseURL: 'http://123.207.32.32:8000',
            baseURL: 'http://81.70.192.127:808',
            timeout: 50000
        })
        // 2.axios的拦截器
    instance.interceptors.request.use(config => {
        return config
    }, err => {
        console.log(err);
    })
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err);
    })
    return instance(config)
}