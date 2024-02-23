import axios, { AxiosInstance, AxiosResponse, AxiosError, AxiosHeaders, AxiosRequestConfig } from 'axios';
import { endpoints } from '@/api/endpoints';
import { InstanceType } from '@/types';

const URL: string = import.meta.env.VITE_BASE_URL;

export class Instance {
  instance: AxiosInstance;
  baseURL: string;

  constructor({ baseURL = endpoints.base, headers, timeout = 65000 }: InstanceType) {
    this.instance = axios.create({
      baseURL,
      headers: headers as AxiosHeaders,
      timeout,
    });
    this.instance.interceptors.request.use(
      (config) => this.handleRequest(config),
      (error) => Promise.reject(this.handleRequestError(error))
    );
    this.instance.interceptors.response.use(
      (response) => this.handleResponse(response),
      (error) => Promise.reject(this.handleResponseError(error))
    );
    this.baseURL = baseURL;
  }

  private handleRequest(config: AxiosRequestConfig): AxiosRequestConfig {
    return config;
  }

  private handleRequestError(error: AxiosError): Promise<AxiosError> {
    return Promise.reject(this.handleResponseError(error));
  }

  private handleResponse(response: AxiosResponse): any {
    return response.data;
  }

  private handleResponseError(error: AxiosError): Promise<AxiosError> {
    if (error.response?.status === 401) {
      alert(error);
    }
    return Promise.reject(error);
  }

  async get<T = any>(url?: string, params?: AxiosRequestConfig['params']): Promise<T> {
    try {
      const response = await this.instance.get<T>(url || '', {
        ...params,
        baseURL: `${URL}${this.baseURL}`,
      });

      return response;
    } catch (error: any) {
      alert(error.message);
      throw error;
    }
  }

  async post<T = any>(url?: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    try {
      const response = await this.instance.post<T>(url || '', data, {
        ...config,
        baseURL: `${URL}${this.baseURL}`,
      });

      return response;
    } catch (error) {
      alert(error);
      throw error;
    }
  }

  async delete<T = any>(url?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    try {
      const response = await this.instance.delete<T>(url || '', {
        ...config,
        baseURL: `${URL}${this.baseURL}`,
      });

      return response;
    } catch (error) {
      alert(error);
      throw error;
    }
  }

  async put<T = any>(url?: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    try {
      const response = await this.instance.put<T>(url || '', data, {
        ...config,
        baseURL: `${URL}${this.baseURL}`,
      });

      return response;
    } catch (error) {
      alert(error);
      throw error;
    }
  }
}
