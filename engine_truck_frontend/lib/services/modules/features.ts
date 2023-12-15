import { Feature } from "../interfaces/features";
import { post, get, update, eliminate } from "../config";

export const getFeatures = () => {
  return get("/api/features");
};

export const createFeature = (data: Feature) => {
  return post("/api/features", data);
};

export const updateFeature = (data: Feature, id: number) => {
  return update("/api/features/" + id, data);
};

export const deleteFeature = (id: number) => {
  return eliminate("/api/features/" + id);
};
