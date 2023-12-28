import { EngineResponse } from "./engines";

export interface MediaCreate {
  file?: File | null;
  media_type: number;
  engine_id?: number;
  component_id?: number;
}

export interface MediaResponse {
  id: number;
  file?: File | null;
  media_type: number;
  engine_id?: number;
  component_id?: number;
  engine?: EngineResponse;
  component?: {};
}