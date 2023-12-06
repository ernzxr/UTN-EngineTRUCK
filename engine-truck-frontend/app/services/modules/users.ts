import { LoginUsers } from "../interfaces/users";
import { post, get, update, eliminate } from "../config";

export const getUser = (data:LoginUsers) => {
    return get("/api/users", data);
}

export const userLogin = (data:LoginUsers) => {
    return post("/api/login", data);
}

export const updateUser = (data:LoginUsers) => {
    return update("/api/users", data);
}

export const deleteUser = (data:LoginUsers) => {
    return eliminate("/api/users", data);
}