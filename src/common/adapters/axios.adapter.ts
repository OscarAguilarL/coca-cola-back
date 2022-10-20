import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { HttpAdapterInterface } from '../interfaces/http-adapter.interface';

@Injectable()
export class AxiosAdapter implements HttpAdapterInterface {
  private axios: AxiosInstance = axios;

  async get<T>(url: string): Promise<T> {
    console.log(this.axios);
    const { data } = await axios.get<T>(url);
    return data;
  }
}
