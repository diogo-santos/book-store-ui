import React from 'react';
import { render } from '@testing-library/react';

import { mockTranslation } from './utils/helper';
jest.mock('react-i18next', () => (mockTranslation));

import App from '../App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const title = getByText(/app_name/);
  expect(title).toBeInTheDocument();
});
