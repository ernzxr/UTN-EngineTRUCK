import { EngineResponse } from "./engines";

export interface MediaCreate {
  url?: string;
  file?: string;
  media_type: number;
  engine_id?: number;
  component_id?: number;
}

export interface MediaResponse {
  id: number;
  url?: string;
  file?: string;
  media_type: number;
  engine_id?: number;
  component_id?: number;
  updatedAt: string;
  createdAt: string;
  engine?: EngineResponse;
  component?: {};
}