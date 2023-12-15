import { Media } from "../interfaces/media";
import { post, get, update, eliminate } from "../config";

export const getMedias = () => {
  return get("/api/media");
};

export const createMedia = (data: Media) => {
  return post("/api/media", data);
};

export const updateMedia = (data: Media, id: number) => {
  return update("/api/media/" + id, data);
};

export const deleteMedia = (id: number) => {
  return eliminate("/api/media/" + id);
};
