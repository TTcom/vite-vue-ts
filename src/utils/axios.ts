import axios from "axios";
import qs from "qs";
import { AxiosRequestConfig, AxiosInstance, AxiosResponse } from "axios";

const axiosInstance: AxiosInstance = axios.create();

axiosInstance.defaults.withCredentials = true;
const pending: any = []; // 声明一个数组用于存储每个ajax请求的取消函数和ajax标识
// let CancelToken = axios.CancelToken
const removePending = (config) => {
  if (pending.length > 0) {
    for (const p in pending) {
      if (pending[p].u === config.url + "&" + config.method) {
        // 当当前请求在数组中存在时执行函数体
        pending[p].f(); // 执行取消操作
        pending.splice(p, 1); // 把这条记录从数组中移除
      }
    }
  }
};
axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  removePending(config); // 在一个ajax发送前执行一下取消操作
  config.cancelToken = new axios.CancelToken((c) => {
    // 这里的ajax标识我是用请求地址&请求方式拼接的字符串，当然你可以选择其他的一些方式
    pending.push({
      u: config.url + "&" + config.method,
      f: c,
    });
  });
  config.headers[config.method]["X-Requested-With"] = "XMLHttpRequest";
  return config;
});
axiosInstance.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    removePending(response.config);
    const serverData: any = response.data;
    return Promise.resolve(serverData as unknown as any);
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const doPost: any = (
  url: string,
  data?: { [key: string]: unknown },
  isneedqs?: boolean,
  target?: { [key: string]: unknown }
) => {
  if (target && target.loading !== undefined) target.loading = true;
  let postData = {};
  postData = isneedqs ? qs.stringify(data) : data;

  return axiosInstance.post(url, postData, target).finally(() => {
    if (target && target.loading !== undefined) target.loading = false;
  });
};
export const doGet = (
  url: string,
  target?: { [key: string]: unknown }
): any => {
  if (target && target.loading !== undefined) target.loading = true;
  return axiosInstance.get(url).finally(() => {
    if (target && target.loading !== undefined) target.loading = false;
  });
};
