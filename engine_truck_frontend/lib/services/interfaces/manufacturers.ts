export interface Manufacturer {
  id: number;
  manufacturer: string;
}

export interface ManufacturerCreate {
  manufacturer: string;
}

export interface ManufacturerResponse {
  id: number;
  manufacturer: string;
  updatedAt: string;
  createdAt: string;
  engines: [];
}

export interface ManufacturerAssosiation {
  id: number;
  manufacturer: string;
  updatedAt: string;
  createdAt: string;
}