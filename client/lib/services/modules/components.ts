import { ComponentCreate } from "../interfaces/components";
import { post, get, update, eliminate } from "../config";

export const getComponents = () => {
  return get("/api/components");
};

export const createComponent = (data: ComponentCreate) => {
  return post("/api/components", data);
};

export const updateComponent = (data: any) => {
  return update("/api/components/" + data.id, data);
};

export const deleteComponent = (id: number) => {
  return eliminate("/api/components/" + id);
};
