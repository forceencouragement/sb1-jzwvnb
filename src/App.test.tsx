import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import App from './App';

// Mock the Chart.js library
vi.mock('chart.js', () => ({
  Chart: {
    register: vi.fn(),
  },
  ArcElement: vi.fn(),
  Tooltip: vi.fn(),
  Legend: vi.fn(),
}));

// Mock the react-chartjs-2 library
vi.mock('react-chartjs-2', () => ({
  Pie: () => null,
}));

test('renders Expense Tracker heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Expense Tracker/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders Sidebar with navigation buttons', () => {
  render(<App />);
  const dashboardButton = screen.getByText(/Dashboard/i);
  const analyticsButton = screen.getByText(/Analytics/i);
  const expensesButton = screen.getByText(/Expenses/i);
  const settingsButton = screen.getByText(/Settings/i);

  expect(dashboardButton).toBeInTheDocument();
  expect(analyticsButton).toBeInTheDocument();
  expect(expensesButton).toBeInTheDocument();
  expect(settingsButton).toBeInTheDocument();
});

test('renders ExpenseForm', () => {
  render(<App />);
  const addExpenseButton = screen.getByText(/Add Expense/i);
  expect(addExpenseButton).toBeInTheDocument();
});

test('renders ExpenseList', () => {
  render(<App />);
  const dateHeader = screen.getByText(/Date/i);
  const descriptionHeader = screen.getByText(/Description/i);
  const amountHeader = screen.getByText(/Amount/i);
  const categoryHeader = screen.getByText(/Category/i);

  expect(dateHeader).toBeInTheDocument();
  expect(descriptionHeader).toBeInTheDocument();
  expect(amountHeader).toBeInTheDocument();
  expect(categoryHeader).toBeInTheDocument();
});

test('renders ExportButton', () => {
  render(<App />);
  const exportButton = screen.getByText(/Export/i);
  expect(exportButton).toBeInTheDocument();
});

test('renders BudgetSetting', () => {
  render(<App />);
  const setBudgetButton = screen.getByText(/Set Budget/i);
  expect(setBudgetButton).toBeInTheDocument();
});