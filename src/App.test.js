import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('toggles dark mode', () => {
  render(<App />);
  const toggleButton = screen.getByText(/Dark Mode/i);
  fireEvent.click(toggleButton);
  expect(screen.getByText(/Light Mode/i)).toBeInTheDocument();
});