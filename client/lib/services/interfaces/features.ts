import { FeatureGet } from "./featureDetails";

export interface Feature {
  id?: number;
  feature_name: string;
}

export interface FeatureCreate {
  feature_name: string;
}

export interface FeatureResponse {
  id: number;
  feature_name: string;
  value: FeatureGet;
}