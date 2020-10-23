import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { EPropertyType, PROPERTY_TYPE_LBLS } from '../../../../helpers/config';
import { Filters } from '../Filters';

describe('<Filters />', () => {
  afterEach(cleanup);
  test('should not be called onFilter initially', () => {
    const handleFilter = jest.fn();

    render(<Filters onFilter={handleFilter} />);

    expect(handleFilter).not.toBeCalled();
  });

  test('should be called onFilter with PropertyType', () => {
    const handleFilter = jest.fn();
    const { getByLabelText, getByText } = render(
      <Filters onFilter={handleFilter} />
    );
    const propertyType = getByLabelText('PropertyType');

    userEvent.click(propertyType);

    const detachLbl = getByText(PROPERTY_TYPE_LBLS.DETACHED);
    userEvent.click(detachLbl);

    expect(handleFilter).toBeCalledWith({
      bathrooms: '',
      bedrooms: '',
      propertyType: EPropertyType.DETACHED,
    });
  });

  test('should be called onFilter with Bedrooms', () => {
    const handleFilter = jest.fn();
    const { getByLabelText, getByText } = render(
      <Filters onFilter={handleFilter} />
    );
    const propertyType = getByLabelText('Bedrooms');

    userEvent.click(propertyType);

    const detachLbl = getByText('2');
    userEvent.click(detachLbl);

    expect(handleFilter).toBeCalledWith({
      bathrooms: '',
      bedrooms: '2',
      propertyType: '',
    });
  });

  test('should be called onFilter with Bathrooms', () => {
    const handleFilter = jest.fn();
    const { getByLabelText, getByText } = render(
      <Filters onFilter={handleFilter} />
    );
    const propertyType = getByLabelText('Bathrooms');

    userEvent.click(propertyType);

    const detachLbl = getByText('3');
    userEvent.click(detachLbl);

    expect(handleFilter).toBeCalledWith({
      bathrooms: '3',
      bedrooms: '',
      propertyType: '',
    });
  });

  test('should be called onFilter with all values', () => {
    const handleFilter = jest.fn();
    const { getByLabelText, getByText, getByRole } = render(
      <Filters onFilter={handleFilter} />
    );
    const bathroom = getByLabelText('Bathrooms');

    userEvent.click(bathroom);

    const threeBathrooms = getByRole('option', { name: /3/i });
    userEvent.click(threeBathrooms);

    const bedrooms = getByLabelText('Bedrooms');

    userEvent.click(bedrooms);

    const twoBedrooms = getByRole('option', { name: /2/i });
    userEvent.click(twoBedrooms);

    const propertyType = getByLabelText('PropertyType');

    userEvent.click(propertyType);

    const detachLbl = getByText(PROPERTY_TYPE_LBLS.APARTMENT);
    userEvent.click(detachLbl);

    expect(handleFilter).toBeCalledWith({
      bathrooms: '3',
      bedrooms: '2',
      propertyType: 'APARTMENT',
    });
  });
});
