import React from 'react';
import { Box, Stat, StatLabel, StatNumber, StatGroup } from '@chakra-ui/react';
import { useExpenses } from '../contexts/ExpenseContext';

export const ExpenseSummary: React.FC = () => {
  const { expenses } = useExpenses();

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const averageExpense = expenses.length > 0 ? totalExpenses / expenses.length : 0;

  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
      <StatGroup>
        <Stat>
          <StatLabel>Total Expenses</StatLabel>
          <StatNumber>${totalExpenses.toFixed(2)}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Average Expense</StatLabel>
          <StatNumber>${averageExpense.toFixed(2)}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Number of Expenses</StatLabel>
          <StatNumber>{expenses.length}</StatNumber>
        </Stat>
      </StatGroup>
    </Box>
  );
};