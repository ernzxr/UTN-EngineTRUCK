import { MediaCreate, MediaResponse } from "../interfaces/media";
import { post, get, update, eliminate } from "../config";

export const getMedias = () => {
  return get("/api/media");
};

export const createMedia = (data: FormData) => {
  return post("/api/media", data);
};

export const updateMedia = (data: MediaResponse) => {
  return update("/api/media/" + data.id, data);
};

export const deleteMedia = (id: number) => {
  return eliminate("/api/media/" + id);
};
