import axios, { AxiosRequestConfig } from "axios";
import { CustomAxiosResponse } from "./axios";

const url = "http://localhost:5500";
const service = axios.create({
    baseURL: url,
    timeout: 5000
})

service.interceptors.request.use((config) => {
    return config;
})

service.interceptors.response.use((data) => {
    return data.data;
})

service.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = localStorage.getItem('token');

    if (token && !config.url?.endsWith('/')) {
        config.headers['x-access-token'] = token;
    }

    return config;
});

export const get = (url: string, params: any = {}) => {
    return new Promise((resolve, reject) => {
        service.get(url, params).then((res: CustomAxiosResponse) => {
            resolve(res);
        }, err => {
            reject(new Error(err))
        })
    });
}

export const post = (url: string, data: any = {}) => {
    return new Promise((resolve, reject) => {
        service.post(url, data).then((res: CustomAxiosResponse) => {
            resolve(res);
        }, err => {
            reject(new Error(err))
        })
    });
}

export const update = (url: string, params: any = {}, data: any = {},) => {
    return new Promise((resolve, reject) => {
        service.put(url, params, data).then((res: CustomAxiosResponse) => {
            resolve(res);
        }, err => {
            reject(new Error(err))
        })
    });
}

export const eliminate = (url: string, params: any = {}) => {
    return new Promise((resolve, reject) => {
        service.delete(url, params).then((res: CustomAxiosResponse) => {
            resolve(res);
        }, err => {
            reject(new Error(err))
        })
    });
}