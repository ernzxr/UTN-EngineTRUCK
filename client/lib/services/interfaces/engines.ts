import { BrandAssosiation } from "./brands";
import { ManufacturerAssosiation } from "./manufacturers";
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
  featured_details: [];
  compatibles_components: [];
  media: MediaResponse;
  manufacturer: ManufacturerAssosiation;
  brand: BrandAssosiation;
}