import { LoginUser, User } from "../interfaces/users";
import { post, get, update, eliminate } from "../config";

export const userLogin = (data: LoginUser) => {
  return post("/api/login", data);
};

export const getUser = () => {
  return get("/api/users");
};

export const createUser = (data: User) => {
  return post("/api/users", data);
};

export const updateUser = (data: User, id: number) => {
  return update("/api/users" + id, data);
};

export const deleteUser = (id: number) => {
  return eliminate("/api/users" + id);
};

