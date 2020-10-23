import React from 'react';

import { EPropertyType } from '../../../../helpers/config';
import { cleanup, render } from '../../../../test-utils';
import { Detail, DetailProps } from '../Detail';

const detailProps: DetailProps = {
  data: {
    id: 2,
    address: '155 GLENCAR LAWN BALLYBRACK GLENAGEARY CO. DUBLIN A96 V3H3',
    lat: 53.247957,
    lon: -6.126351,
    sqm: 83,
    price: 350000,
    propertyType: EPropertyType.DETACHED,
    satelliteImage:
      'http://maps.google.com/maps?t=k&q=loc:53.24795699999999,-6.1263510000000005',
    baths: 1,
    beds: 2,
  },
};

describe('<Detail />', () => {
  afterEach(cleanup);

  test('should have labels', () => {
    const { getByText } = render(<Detail {...detailProps} />);

    expect(getByText('Detached')).toBeInTheDocument();
    expect(
      getByText('155 GLENCAR LAWN BALLYBRACK GLENAGEARY CO. DUBLIN A96 V3H3')
    ).toBeInTheDocument();
    expect(getByText('2')).toBeInTheDocument();
  });
});
