import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('will pass', () => {
  console.log('this test passes!');
});

test('will pass too', () => {
  console.log('this test passes too!');
});