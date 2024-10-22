import React from 'react';
import { Box, Grid, GridItem, Heading, Flex } from '@chakra-ui/react';
import { ExpenseSummary } from './ExpenseSummary';
import { ExpenseList } from './ExpenseList';
import { ExpenseForm } from './ExpenseForm';
import { ExpenseChart } from './ExpenseChart';
import { ExportButton } from './ExportButton';
import { BudgetSetting } from './BudgetSetting';

export const Dashboard: React.FC = () => {
  return (
    <Box>
      <Flex justifyContent="space-between" alignItems="center" mb={6}>
        <Heading as="h1" size="xl">Expense Tracker</Heading>
        <ExportButton />
      </Flex>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem colSpan={2}>
          <ExpenseSummary />
        </GridItem>
        <GridItem>
          <BudgetSetting />
        </GridItem>
        <GridItem colSpan={2}>
          <ExpenseChart />
        </GridItem>
        <GridItem>
          <ExpenseForm />
        </GridItem>
        <GridItem colSpan={3}>
          <ExpenseList />
        </GridItem>
      </Grid>
    </Box>
  );
};