export interface LoginUser {
  id?: number;
  user: string;
  password: string;
}

export interface User {
  id?: number;
  user: string;
  password: string;
  email: string;
  type_user: string;
}
