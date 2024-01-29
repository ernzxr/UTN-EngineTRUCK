import { BrandGet } from "./brands";
import { ManufacturerGet } from "./manufacturers";
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
  features_details: [];
  compatibles_components: [];
  media: MediaResponse[];
  manufacturer: ManufacturerGet,
  brand: BrandGet;
}