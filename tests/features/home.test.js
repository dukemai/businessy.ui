import React from 'react';
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
} from '@testing-library/react';
import 'jest-dom/extend-expect';
import App from '../../pages/_app';
import Home from '../../pages/index';

afterEach(cleanup);

test('Load home page', async () => {
  const { getByText, getByTestId } = render(<Home />);
});
