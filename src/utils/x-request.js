import axios from "axios";

export const HTTP_METHODS = {
  GET: "get",
  POST: "post",
};

export const API_ENDPOINTS = {
  MESSAGE: "/message",
};

export class Request {
  static AXIOS_DATA_KEY_BY_METHOD = {
    [HTTP_METHODS.GET]: "params",
    [HTTP_METHODS.POST]: "data",
  };

  constructor() {
    this.method = HTTP_METHODS.GET;
    this.axiosInstance = axios.create({
      method: this.method,
    });
  }

  setMethod(method) {
    this.method = method;
    this.axiosInstance.defaults.method = method;
    return this;
  }

  setUrl(url) {
    this.axiosInstance.defaults.url = url;
    return this;
  }

  async send(data) {
    let resp;
    try {
      resp = await this.axiosInstance.request({
        [Request.AXIOS_DATA_KEY_BY_METHOD[this.method]]: { ...data },
      });
    } catch (err) {
      resp = err.response;
    }
    return resp;
  }

  async get(data) {
    this.setMethod(HTTP_METHODS.GET);
    return await this.send(data);
  }

  async post(data) {
    this.setMethod(HTTP_METHODS.POST);
    return await this.send(data);
  }
}
