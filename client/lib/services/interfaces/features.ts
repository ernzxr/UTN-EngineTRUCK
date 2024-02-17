import { FeatureGet } from "./featureDetails";

export interface Feature {
  id?: number;
  feature_name: string;
}

export interface FeatureCreate {
  power: string;
  consumption: string;
  cilinder: number;
  weight: string;
  bearing: number;
  valves: number;
}

export interface FeatureResponse {
  id: number;
  feature_name: string;
  value: FeatureGet;
}