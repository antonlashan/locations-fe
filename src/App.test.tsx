import { render } from '@testing-library/react';
import React from 'react';

import App from './App';
import * as en from './i18n/compiled-lang/en.json';

test('renders learn react link', () => {
  const { getByText } = render(<App locale='en' messages={en} />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
