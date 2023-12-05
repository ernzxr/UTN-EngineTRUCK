import { Engines, EnginesCards } from "../interfaces/engines";
import { post } from "../config";
import { get } from "../config";
import { update } from "../config";
import { eliminate } from "../config";

export const getEngineCard = (data:EnginesCards) => {
    return get("/api/engines", data);
}

export const postEngineCard = (data:EnginesCards) => {
    return post("/api/engines", data);
}

export const updateEngineCard = (data:EnginesCards) => {
    return update("/api/engines", data);
}

export const deleteEngineCard = (data:EnginesCards) => {
    return eliminate("/api/engines", data);
}