export interface FeatureDetail {
  id?: number;
  feature_value: string;
  engine_id: number;
  feature_id: number;
}

export interface FeatureDetailCreate {
  feature_value: string;
  engine_id: number;
  feature_id: number;
}

export interface FeatureGet {
  id: number;
  value: string;
}

export interface FeatureDetailResponse {
  id: number;
  feature_value: string;
  engine_id: number;
  feature_id: number;
}

export interface FeatureDetailsGet {
  id: number;
  feature_value: string;
  engine_id: number;
  feature_id: number;
}