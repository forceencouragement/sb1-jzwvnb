import { Expense } from '../contexts/ExpenseContext';

export const exportToCSV = (expenses: Expense[]): void => {
  const headers = ['Date', 'Description', 'Amount', 'Category'];
  const csvContent = [
    headers.join(','),
    ...expenses.map(expense => 
      [expense.date, expense.description, expense.amount, expense.category].join(',')
    )
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'expenses.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

export const exportToJSON = (expenses: Expense[]): void => {
  const jsonContent = JSON.stringify(expenses, null, 2);
  const blob = new Blob([jsonContent], { type: 'application/json' });
  const link = document.createElement('a');
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'expenses.json');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};