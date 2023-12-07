import { Brand } from "../interfaces/brands";
import { post, get, update, eliminate } from "../config";

export const getBrands = () => {
    return get("/api/brands");
}

export const createBrand = (data:Brand) => {
    return post("/api/brands", data);
}

export const updateBrand = (data:Brand, id:number) => {
    return update("/api/brands/"+id, data);
}

export const deleteBrand = (id:number) => {
    return eliminate("/api/brands/"+id);
}