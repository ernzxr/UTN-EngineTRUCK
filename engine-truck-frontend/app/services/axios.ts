import { AxiosResponse } from "axios";

export interface CustomAxiosResponse extends AxiosResponse {
    error ?: boolean;
    message ?: string;
    data ?: any;
}