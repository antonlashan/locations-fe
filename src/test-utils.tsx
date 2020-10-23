import { render as rtlRender } from '@testing-library/react';
import React from 'react';
import { IntlProvider } from 'react-intl';

const render = (
  ui: React.ReactElement,
  { locale = 'en', ...renderOptions } = {}
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Wrapper = ({ children }: React.PropsWithChildren<any>) => {
    return <IntlProvider locale={locale}>{children}</IntlProvider>;
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { render };
