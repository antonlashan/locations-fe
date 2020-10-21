export const LOCALE = 'en'; // nl
export const CURRENCY = 'USD'; // EUR

export enum EPropertyType {
  APARTMENT = 'APARTMENT',
  DETACHED = 'DETACHED',
  'SEMI-DETACHED' = 'SEMI-DETACHED',
  TERRACED = 'TERRACED',
}

export const PROPERTY_TYPE_LBLS = {
  [EPropertyType.APARTMENT]: 'Apartment',
  [EPropertyType.DETACHED]: 'Detached',
  [EPropertyType['SEMI-DETACHED']]: 'Semi detached',
  [EPropertyType.TERRACED]: 'Terraced',
};
