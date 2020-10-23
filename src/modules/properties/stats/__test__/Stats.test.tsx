import { cleanup, render } from '@testing-library/react';
import React from 'react';

import { Stats, StatsProps } from '../Stats';

const statProps: StatsProps = {
  data: [
    { x: 'x1', y: 10, label: 'Label 1' },
    { x: 'x2', y: 30, label: 'Label 2' },
    { x: 'x3', y: 20, label: 'Label 3' },
  ],
};

describe('<Stats />', () => {
  afterEach(cleanup);

  test('should have labels', () => {
    const { getByText } = render(<Stats {...statProps} />);

    expect(getByText('Label 2')).toBeInTheDocument();
    expect(getByText('20')).toBeInTheDocument();
  });
});
