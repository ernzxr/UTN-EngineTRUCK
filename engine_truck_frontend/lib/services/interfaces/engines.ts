import { BrandResponse } from "./brands";
import { ManufacturerResponse } from "./manufacturers";

export interface Engine {
  id?: number;
  model: string;
  hidden: number;
  available: number;
  brand_id: number;
  manufacturer_id: number;
}

export interface EngineCreate {
  model: string;
  hidden: number;
  available: number;
  brand_id: number;
  manufacturer_id: number;
}

export interface EngineResponse {
  id: number;
  model: string;
  hidden: number;
  available: number;
  brand_id: number;
  manufacturer_id: number;
  updatedAt: string;
  createdAt: string;
  featured_details: [];
  compatibles_components: [];
  media: [];
  manufacturer: ManufacturerResponse;
  brand: BrandResponse;
}