import { Manufacturers } from "../interfaces/manufacturers";
import { post, get, update, eliminate } from "../config";

export const getManufacturer = (data:Manufacturers) => {
    return get("/api/manufacturers", data);
}

export const postManufacturer = (data:Manufacturers) => {
    return post("/api/manufacturers", data);
}

export const updateManufacturer = (data:Manufacturers) => {
    return update("/api/manufacturers", data);
}

export const deleteManufacturer = (data:Manufacturers) => {
    return eliminate("/api/manufacturers", data);
}