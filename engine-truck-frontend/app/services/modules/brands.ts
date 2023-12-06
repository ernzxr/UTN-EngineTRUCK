import { Brands } from "../interfaces/brands";
import { post, get, update, eliminate } from "../config";

export const getEngineCard = (data:Brands) => {
    return get("/api/brands", data);
}

export const postEngineCard = (data:Brands) => {
    return post("/api/brands", data);
}

export const updateEngineCard = (data:Brands) => {
    return update("/api/brands", data);
}

export const deleteEngineCard = (data:Brands) => {
    return eliminate("/api/brands", data);
}