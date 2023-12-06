import { Engine } from "../interfaces/engines";
import { post, get, update, eliminate } from "../config";

export const getEngines = () => {
    return get("/api/engines");
}

export const createEngine = (data:Engine) => {
    return post("/api/engines", data);
}

export const updateEngine = (data:Engine, id:number) => {
    return update("/api/engines/"+id, data);
}

export const deleteEngine = (id:number) => {
    return eliminate("/api/engines/"+id);
}