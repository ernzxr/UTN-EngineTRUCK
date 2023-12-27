import { Brand, BrandCreate, BrandResponse } from "../interfaces/brands";
import { post, get, update, eliminate } from "../config";

export const getBrands = () => {
  return get("/api/brands");
};

export const createBrand = (data: BrandCreate) => {
  return post("/api/brands", data);
};

export const updateBrand = (data: BrandResponse) => {
  return update("/api/brands/" + data.id, data);
};

export const deleteBrand = (id: number) => {
  return eliminate("/api/brands/" + id);
};
