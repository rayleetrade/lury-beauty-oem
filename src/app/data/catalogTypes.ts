export type DesignSpec = {
  lengths: number[];
  curl: string;
  color: string;
  fiberRequest: string;
  finish: string;
  pack: string;
  mapping: string;
  adhesive: string;
  packaging: string;
  sourceIds: string[];
};
export type LashStyle = {
  id: string;
  name: string;
  family: string;
  format: string;
  description: string;
  image: string;
  slug?: string;
  specs?: DesignSpec;
  sampleChecks?: string[];
  buyerUse?: string;
  markets?: string[];
  specStatus?: string;
};
