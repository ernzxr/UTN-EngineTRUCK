import { CompatibleComponent } from "../interfaces/compatibleComponents";
import { post, get, update, eliminate } from "../config";

export const getCompatibleComponents = () => {
  return get("/api/compatible_components");
};

export const createCompatibleComponent = (data: CompatibleComponent) => {
  return post("/api/compatible_components", data);
};

export const updateCompatibleComponent = (
  data: CompatibleComponent,
  id: number
) => {
  return update("/api/compatible_components/" + id, data);
};

export const deleteCompatibleComponent = (id: number) => {
  return eliminate("/api/compatible_components/" + id);
};
