import React from 'react';
import { render } from '@testing-library/react';

import { mockTranslation } from './utils/helper';
jest.mock('react-i18next', () => (mockTranslation));

import Header from '../components/Header';

test("renders title component", () => {

  const { getByText } = render(<Header title="Mock title" />);
  const title = getByText(/Mock title/);

  expect(title).toBeInTheDocument();
});