import { MediaResponse } from "./media";

export interface Component {
  id?: number;
  component: string;
  description: string;
  hidden: number;
  available: number;
}

export interface ComponentResponse {
  id: number;
  component: string;
  description: string;
  hidden: number;
  available: number;
  compatibles_components: [];
  media: MediaResponse;
}

export interface ComponentCreate {
  component: string;
  description: string;
  hidden: number;
  available: number;
}