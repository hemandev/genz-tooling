import { waitFor, screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { it, expect } from 'vitest';
import App from '../App';

it('should show empty message on network error', async () => {
  render(<App />);
  await waitFor(() => screen.getByText('Hello Vite + React!'));
  expect(screen.getByText(`count is: 0`)).toBeVisible();
  fireEvent.click(screen.getByRole('button'));
  expect(screen.getByText(`count is: 1`)).toBeVisible();
});
