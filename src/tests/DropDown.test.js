import React from 'react';
import { render } from '@testing-library/react';

import { mockTranslation } from './utils/helper';
jest.mock('react-i18next', () => (mockTranslation));

import DropDown from "../components/DropDown";

test("renders title component", () => {
  const mockOptions = [
    {
      text: "optionText",
      value: "optionValue"
    }
  ];

  const { getByText } = render(
    <DropDown
      label="Mock label"
      options={mockOptions}
    />
  );

  const label = getByText(/Mock label/);
  const optionText = getByText(/optionText/);

  expect(label).toBeInTheDocument();
  expect(optionText).toBeInTheDocument();
});