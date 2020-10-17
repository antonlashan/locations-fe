import { CustomSelectOption } from '../../../components/CustomSelect';
import { EPropertyType } from '../interface';

export const propertyTypeOpts: CustomSelectOption[] = [
  {
    value: '',
    label: 'All',
  },
  {
    value: EPropertyType.APARTMENT,
    label: 'Apartment',
  },
  {
    value: EPropertyType.DETACHED,
    label: 'Detached',
  },
  {
    value: EPropertyType['SEMI-DETACHED'],
    label: 'Semi detached',
  },
  {
    value: EPropertyType.TERRACED,
    label: 'Terraced',
  },
];

export const bedroomOpts: CustomSelectOption[] = [{ value: '', label: 'All' }];
for (let i = 1; i <= 5; i++) {
  bedroomOpts.push({ value: i.toString(), label: i.toString() });
}

export const bathroomOpts: CustomSelectOption[] = [{ value: '', label: 'All' }];
for (let i = 1; i <= 5; i++) {
  bathroomOpts.push({ value: i.toString(), label: i.toString() });
}
