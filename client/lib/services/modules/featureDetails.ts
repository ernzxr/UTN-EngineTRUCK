import { FeatureDetailCreate } from "../interfaces/featureDetails";
import { post, get, update, eliminate } from "../config";

export const getFeatureDetails = () => {
  return get("/api/feature_details");
};

export const createFeatureDetail = (data: FeatureDetailCreate) => {
  return post("/api/feature_details", data);
};

export const updateFeatureDetail = (data: any) => {
  return update("/api/feature_details/" + data.id, data);
};

export const deleteFeatureDetail = (id: number) => {
  return eliminate("/api/feature_details/" + id);
};
