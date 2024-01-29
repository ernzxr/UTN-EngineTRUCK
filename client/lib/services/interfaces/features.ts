import { FeatureGet } from "./featureDetails";

export interface Feature {
  id?: number;
  feature_name: string;
  hidden: number;
}

export interface FeatureCreate {
  feature_name: string;
  hidden: number;
}

export interface FeatureResponse {
  id: number;
  feature_name: string;
  hidden: number;
  value: FeatureGet;
}