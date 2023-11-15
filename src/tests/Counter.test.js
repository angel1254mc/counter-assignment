// import necessary react testing library helpers here
// import the Counter component here
import { render, screen } from '@testing-library/react';
import Counter from '../components/Counter';
import userEvent from '@testing-library/user-event';
beforeEach(() => {
  // Render the Counter component here
  render(<Counter/>);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByText("Counter")).toBeVisible();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByTestId("count")).toHaveTextContent("0");
});

test('clicking + increments the count', async () => {
  // Complete the unit test below based on the objective in the line above
  const increment = screen.getByText("+");
  await userEvent.click(increment);

  expect(screen.getByTestId("count")).toHaveTextContent("1");
});

test('clicking - decrements the count', async () => {
  // Complete the unit test below based on the objective in the line above
  const decrement = screen.getByText("-");
  await userEvent.click(decrement);

  expect(screen.getByTestId("count")).toHaveTextContent("-1");
});
