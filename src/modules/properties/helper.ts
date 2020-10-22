import { PieChartData } from '../../components';
import { PROPERTY_TYPE_LBLS } from '../../helpers/config';
import { FilterType, PropertyData } from './interface';

export const filterProperties = (
  propertyData: PropertyData[],
  filters: FilterType
) => {
  return propertyData
    .filter((data) => {
      if (filters.bathrooms) {
        return +filters.bathrooms === data.baths;
      }
      return true;
    })
    .filter((data) => {
      if (filters.bedrooms) {
        return +filters.bedrooms === data.beds;
      }
      return true;
    })
    .filter((data) => {
      if (filters.propertyType) {
        return filters.propertyType === data.propertyType;
      }
      return true;
    });
};

export const formatChartData = (data: PropertyData[]) => {
  return data.reduce<PieChartData[]>((acc, cur) => {
    const existType = acc.find((a) => a.x === cur.propertyType);
    if (existType) {
      ++existType.y;
      return acc;
    }

    acc.push({
      x: cur.propertyType,
      y: 1,
      label: PROPERTY_TYPE_LBLS[cur.propertyType],
    });
    return acc;
  }, []);
};
