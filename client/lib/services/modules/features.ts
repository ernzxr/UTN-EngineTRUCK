import { FeatureCreate } from "../interfaces/features";
import { post, get, update, eliminate } from "../config";

export const getFeatures = () => {
  return get("/api/features");
};

export const createFeature = (data: FeatureCreate) => {
  return post("/api/features", data);
};

export const updateFeature = (data: any) => {
  return update("/api/features/" + data.id, data);
};

export const deleteFeature = (id: number) => {
  return eliminate("/api/features/" + id);
};
