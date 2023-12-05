import { AxiosResponse } from "axios";

export interface CustomAxiosResponse extends CustomAxiosResponse {
    error ?: boolean;
    message ?: string;
    data ?: any;
}