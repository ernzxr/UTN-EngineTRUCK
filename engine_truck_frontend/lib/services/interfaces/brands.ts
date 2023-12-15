export interface Brand {
  id?: number;
  brand: string;
}

export interface BrandCreate {
  brand: string;
}

export interface BrandResponse {
  id: number;
  brand: string;
  updatedAt: string;
  createdAt: string;
  engines: [];
}