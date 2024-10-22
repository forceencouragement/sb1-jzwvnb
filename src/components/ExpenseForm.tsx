import React from 'react';
import { Box, Button, FormControl, FormLabel, Input, Select, VStack } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useExpenses } from '../contexts/ExpenseContext';

type ExpenseFormInputs = {
  date: string;
  description: string;
  amount: number;
  category: string;
};

export const ExpenseForm: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ExpenseFormInputs>();
  const { addExpense } = useExpenses();

  const onSubmit: SubmitHandler<ExpenseFormInputs> = (data) => {
    addExpense({
      id: Date.now().toString(),
      ...data,
      amount: Number(data.amount),
    });
    reset();
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} p={5} shadow="md" borderWidth="1px" borderRadius="md">
      <VStack spacing={4}>
        <FormControl isInvalid={!!errors.date}>
          <FormLabel htmlFor="date">Date</FormLabel>
          <Input
            id="date"
            type="date"
            {...register('date', { required: 'Date is required' })}
          />
        </FormControl>

        <FormControl isInvalid={!!errors.description}>
          <FormLabel htmlFor="description">Description</FormLabel>
          <Input
            id="description"
            {...register('description', { required: 'Description is required' })}
          />
        </FormControl>

        <FormControl isInvalid={!!errors.amount}>
          <FormLabel htmlFor="amount">Amount</FormLabel>
          <Input
            id="amount"
            type="number"
            step="0.01"
            {...register('amount', { required: 'Amount is required', min: 0 })}
          />
        </FormControl>

        <FormControl isInvalid={!!errors.category}>
          <FormLabel htmlFor="category">Category</FormLabel>
          <Select
            id="category"
            {...register('category', { required: 'Category is required' })}
          >
            <option value="">Select category</option>
            <option value="Food">Food</option>
            <option value="Transportation">Transportation</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Utilities">Utilities</option>
            <option value="Other">Other</option>
          </Select>
        </FormControl>

        <Button type="submit" colorScheme="blue" width="full">
          Add Expense
        </Button>
      </VStack>
    </Box>
  );
};