import React from 'react';
import { render } from '@testing-library/react';

import { mockTranslation } from './utils/helper';
jest.mock('react-i18next', () => (mockTranslation));

import Alert from "../components/Alert";

test("renders title component", () => {

  const { getByText } = render(<Alert message="Mock message" />);
  const message = getByText(/Mock message/);

  expect(message).toBeInTheDocument();
});