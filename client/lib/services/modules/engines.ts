import { EngineCreate, EngineResponse } from "../interfaces/engines";
import { post, get, update, eliminate } from "../config";

export const getEngines = () => {
  return get("/api/engines");
};

export const createEngine = (data: EngineCreate) => {
  return post("/api/engines", data);
};

export const updateEngine = (data: EngineResponse) => {
  return update("/api/engines/" + data.id, data);
};

export const deleteEngine = (id: number) => {
  return eliminate("/api/engines/" + id);
};
