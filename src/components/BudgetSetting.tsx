import React, { useState, useEffect } from 'react';
import { Box, FormControl, FormLabel, Input, Button, Text, Progress } from '@chakra-ui/react';
import { useExpenses } from '../contexts/ExpenseContext';

export const BudgetSetting: React.FC = () => {
  const [budget, setBudget] = useState(() => {
    const savedBudget = localStorage.getItem('budget');
    return savedBudget ? parseFloat(savedBudget) : 0;
  });
  const [inputBudget, setInputBudget] = useState(budget.toString());
  const { expenses } = useExpenses();

  useEffect(() => {
    localStorage.setItem('budget', budget.toString());
  }, [budget]);

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const budgetPercentage = (totalExpenses / budget) * 100;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBudget(parseFloat(inputBudget));
  };

  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Set Monthly Budget</FormLabel>
          <Input
            type="number"
            value={inputBudget}
            onChange={(e) => setInputBudget(e.target.value)}
            placeholder="Enter budget amount"
          />
        </FormControl>
        <Button mt={4} colorScheme="blue" type="submit">
          Set Budget
        </Button>
      </form>

      {budget > 0 && (
        <Box mt={4}>
          <Text>Budget: ${budget.toFixed(2)}</Text>
          <Text>Spent: ${totalExpenses.toFixed(2)}</Text>
          <Text>Remaining: ${(budget - totalExpenses).toFixed(2)}</Text>
          <Progress
            value={budgetPercentage}
            colorScheme={budgetPercentage > 100 ? 'red' : budgetPercentage > 75 ? 'yellow' : 'green'}
            mt={2}
          />
          {budgetPercentage > 90 && (
            <Text color="red.500" mt={2}>
              Warning: You're approaching your budget limit!
            </Text>
          )}
        </Box>
      )}
    </Box>
  );
};