import { BrandAssosiation, BrandResponse } from "./brands";
import { ManufacturerAssosiation, ManufacturerResponse } from "./manufacturers";
import { MediaResponse } from "./media";

export interface Engine {
  id: number;
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
  media: MediaResponse;
  manufacturer: ManufacturerAssosiation;
  brand: BrandAssosiation;
}