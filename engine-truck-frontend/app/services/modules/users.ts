import { LoginUsers } from "../interfaces/users";
import { post } from "../config";
import { get } from "../config";
import { update } from "../config";
import { eliminate } from "../config";

export const getUser = (data:LoginUsers) => {
    return get("/api/users", data);
}

export const userRegister = (data:LoginUsers) => {
    return post("/api/users", data);
}

export const updateUser = (data:LoginUsers) => {
    return update("/api/users", data);
}

export const deleteUser = (data:LoginUsers) => {
    return eliminate("/api/users", data);
}