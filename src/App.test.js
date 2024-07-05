import { render, screen } from "@testing-library/react"
import App from './App';

test("Renders Task Label", () => {
  render(<App />);
  const linkElement = screen.getByText("Task:");
  expect(linkElement).toBeInTheDocument();
});

test("Renders Priority Label", () => {
  render(<App />);
  const linkElement = screen.getByText("Priority:");
  expect(linkElement).toBeInTheDocument();
});

test("Renders Table Header - Task Column", () => {
  render(<App />);
  const linkElement = screen.getByText("Task");
  expect(linkElement).toBeInTheDocument();
});

test("Renders Table Header - Priority Column", () => {
  render(<App />);
  const linkElement = screen.getByText("Priority");
  expect(linkElement).toBeInTheDocument();
});

test("Renders Table  - First Row Task", () => {
  render(<App />);
  const linkElement = screen.getByText("Pick up Milk");
  expect(linkElement).toBeInTheDocument();
});

// test("Assure Products are sorted from highest to lowest", async () => {
//   // Render the component and wait for data fetching (if applicable)
//   await render(<App />);

//   // Get the product elements (assuming each product has a unique identifier)
//   const productElements = await screen.getAllByTestId("product-item");

//   // Check if at least two products are present
//   expect(productElements.length).toBeGreaterThanOrEqual(2);

//   // Access the first and second product values (assuming values are within the elements)
//   const firstProductValue = parseInt(productElements[0].textContent, 10);
//   const secondProductValue = parseInt(productElements[1].textContent, 10);

//   // Assert that the first product value is greater than the second
//   expect(firstProductValue).toBeGreaterThan(secondProductValue);
// });
