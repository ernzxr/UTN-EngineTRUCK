export interface CompatibleComponent {
  id?: number;
  engine_id: number;
  component_id: number;
}

export interface CompatibleComponentCreate {
  engine_id: number;
  component_id: number;
}

export interface CompatibleComponentResponse {
  id: number;
  engine_id: number;
  component_id: number;
}


export interface CompatibleEngine {
  id: number;
  model: string;
  compatible_component_id: number;
  hidden: number;
  available: number;
}