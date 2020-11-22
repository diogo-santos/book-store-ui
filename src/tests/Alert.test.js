import React from 'react';
import { render } from '@testing-library/react';

import Alert from "../components/Alert";

test("renders title component", () => {

  const { getByText } = render(<Alert message="Mock message" />);
  const message = getByText(/Mock message/);

  expect(message).toBeInTheDocument();
});