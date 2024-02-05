import { post, get, update, eliminate } from "../config";

export const getMedias = () => {
  return get("/api/media");
};

export const createMedia = (data: FormData) => {
  return post("/api/media", data);
};

export const updateMedia = (id:number, data: FormData) => {
  return update("/api/media/" + id, data);
};

export const deleteMedia = (id: number) => {
  return eliminate("/api/media/" + id);
};
