import { ManufacturerCreate, ManufacturerResponse } from "../interfaces/manufacturers";
import { post, get, update, eliminate } from "../config";

export const getManufacturers = () => {
  return get("/api/manufacturers");
};

export const createManufacturer = (data: ManufacturerCreate) => {
  return post("/api/manufacturers", data);
};

export const updateManufacturer = (data: ManufacturerResponse) => {
  return update("/api/manufacturers/" + data.id, data);
};

export const deleteManufacturer = (id: number) => {
  return eliminate("/api/manufacturers/" + id);
};
