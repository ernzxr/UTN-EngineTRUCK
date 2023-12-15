import { Component } from "../interfaces/components";
import { post, get, update, eliminate } from "../config";

export const getComponents = () => {
  return get("/api/components");
};

export const createComponent = (data: Component) => {
  return post("/api/components", data);
};

export const updateComponent = (data: Component, id: number) => {
  return update("/api/components/" + id, data);
};

export const deleteComponent = (id: number) => {
  return eliminate("/api/components/" + id);
};
