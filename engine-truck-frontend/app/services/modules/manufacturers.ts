import { Manufacturer } from "../interfaces/manufacturers";
import { post, get, update, eliminate } from "../config";

export const getManufacturers = () => {
    return get("/api/manufacturers");
}

export const createManufacturer = (data:Manufacturer) => {
    return post("/api/manufacturers", data);
}

export const updateManufacturer = (data:Manufacturer, id:number) => {
    return update("/api/manufacturers/"+id, data);
}

export const deleteManufacturer = (id:number) => {
    return eliminate("/api/manufacturers/"+id);
}