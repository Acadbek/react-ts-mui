import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import { endpoints } from "@/api/endpoints";
import { InstanceType } from "@/types";

const URL = import.meta.env.VITE_BASE_URL;

export class Instance {
  instance: AxiosInstance;
  baseURL: string;

  constructor({ baseURL = endpoints.base, headers, timeout = 65000 }: InstanceType) {
    this.instance = axios.create({
      baseURL,
      headers,
      timeout,
    });
    this.instance.interceptors.request.use(
      (config) => this.handleRequest(config),
      (error) => Promise.reject(this.handleResponseError(error))
    );
    this.instance.interceptors.response.use(
      (response) => this.handleResponse(response),
      (error) => Promise.reject(this.handleResponseError(error))
    );
    this.baseURL = baseURL;
  }

  handleRequest(config: any) {
    return config;
  }

  handleResponse(response: AxiosResponse) {
    return response.data;
  }

  handleResponseError(error: AxiosError) {
    if (error.response?.status === 401) alert(error);
    throw error;
  }

  async get(url?: string | any, params?: any) {
    try {
      const response = await this.instance.get(url, {
        ...params,
        baseURL: `${URL}${this.baseURL}`,
      });

      return response;
    } catch (error) {
      alert(error)
    }
  }

  async post(url?: string | any, params?: any, config?: any) {
    try {
      const response = await this.instance.post(url, params, {
        ...config,
        baseURL: `${URL}${this.baseURL}`
      });

      return response;
    } catch (error) {
      alert(error);
    }
  }

  async delete(url?: string | any, config?: any) {
    try {
      const response = await this.instance.delete(url, {
        ...config,
        baseURL: `${URL}${this.baseURL}`,
      });

      return response;
    } catch (error) {
      alert(error)
    }
  }

  async put(url?: string | any, params?: any, config?: any) {
    try {
      const response = await this.instance.put(url, params, {
        ...config,
        baseURL: `${URL}${this.baseURL}`,
      });

      return response;
    } catch (error) {
      alert(error)
    }
  }
}
