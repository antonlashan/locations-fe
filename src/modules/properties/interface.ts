export interface FiltersState {
  propertyType: string;
  bedrooms: string;
  bathrooms: string;
}

export enum EPropertyType {
  APARTMENT = 'APARTMENT',
  DETACHED = 'DETACHED',
  'SEMI-DETACHED' = 'SEMI-DETACHED',
  TERRACED = 'TERRACED',
}

export interface PropertyData {
  id: number;
  address: string;
  lat: number;
  lon: number;
  sqm: number;
  price: number | null;
  propertyType: string;
  satelliteImage: string;
  baths: number | null;
  beds: number | null;
}
