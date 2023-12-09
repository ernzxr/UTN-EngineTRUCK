import { FeatureDetail } from "../interfaces/featureDetails";
import { post, get, update, eliminate } from "../config";

export const getFeatureDetails = () => {
  return get("/api/feature_details");
};

export const createFeatureDetail = (data: FeatureDetail) => {
  return post("/api/feature_details", data);
};

export const updateFeatureDetail = (data: FeatureDetail, id: number) => {
  return update("/api/feature_details/" + id, data);
};

export const deleteFeatureDetail = (id: number) => {
  return eliminate("/api/feature_details/" + id);
};
