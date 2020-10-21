import { CustomSelectOption } from '../../../components/CustomSelect';
import { EPropertyType, PROPERTY_TYPE_LBLS } from '../../../helpers/config';

export const propertyTypeOpts: CustomSelectOption[] = [
  {
    value: '',
    label: 'All',
  },
  {
    value: EPropertyType.APARTMENT,
    label: PROPERTY_TYPE_LBLS.APARTMENT,
  },
  {
    value: EPropertyType.DETACHED,
    label: PROPERTY_TYPE_LBLS.DETACHED,
  },
  {
    value: EPropertyType['SEMI-DETACHED'],
    label: PROPERTY_TYPE_LBLS['SEMI-DETACHED'],
  },
  {
    value: EPropertyType.TERRACED,
    label: PROPERTY_TYPE_LBLS.TERRACED,
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
