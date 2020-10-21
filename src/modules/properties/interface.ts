import { EPropertyType } from '../../helpers/config';

export interface FiltersState {
  propertyType: string;
  bedrooms: string;
  bathrooms: string;
}

export interface PropertyData {
  id: number;
  address: string;
  lat: number;
  lon: number;
  sqm: number;
  price: number | null;
  propertyType: EPropertyType;
  satelliteImage: string;
  baths: number | null;
  beds: number | null;
}
