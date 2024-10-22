import React, { useState } from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, IconButton, Input, Select } from '@chakra-ui/react';
import { Edit, Trash2 } from 'lucide-react';
import { useExpenses } from '../contexts/ExpenseContext';
import { format } from 'date-fns';

export const ExpenseList: React.FC = () => {
  const { expenses, deleteExpense } = useExpenses();
  const [sortField, setSortField] = useState<keyof Expense>('date');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [filter, setFilter] = useState('');

  const sortedExpenses = [...expenses].sort((a, b) => {
    if (a[sortField] < b[sortField]) return sortDirection === 'asc' ? -1 : 1;
    if (a[sortField] > b[sortField]) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  const filteredExpenses = sortedExpenses.filter(
    (expense) =>
      expense.description.toLowerCase().includes(filter.toLowerCase()) ||
      expense.category.toLowerCase().includes(filter.toLowerCase())
  );

  const handleSort = (field: keyof Expense) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  return (
    <Box overflowX="auto">
      <Input
        placeholder="Filter expenses..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        mb={4}
      />
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th onClick={() => handleSort('date')} cursor="pointer">
              Date {sortField === 'date' && (sortDirection === 'asc' ? '↑' : '↓')}
            </Th>
            <Th onClick={() => handleSort('description')} cursor="pointer">
              Description {sortField === 'description' && (sortDirection === 'asc' ? '↑' : '↓')}
            </Th>
            <Th onClick={() => handleSort('amount')} cursor="pointer">
              Amount {sortField === 'amount' && (sortDirection === 'asc' ? '↑' : '↓')}
            </Th>
            <Th onClick={() => handleSort('category')} cursor="pointer">
              Category {sortField === 'category' && (sortDirection === 'asc' ? '↑' : '↓')}
            </Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredExpenses.map((expense) => (
            <Tr key={expense.id}>
              <Td>{format(new Date(expense.date), 'yyyy-MM-dd')}</Td>
              <Td>{expense.description}</Td>
              <Td>${expense.amount.toFixed(2)}</Td>
              <Td>{expense.category}</Td>
              <Td>
                <IconButton
                  aria-label="Edit expense"
                  icon={<Edit />}
                  size="sm"
                  mr={2}
                  onClick={() => {/* Implement edit functionality */}}
                />
                <IconButton
                  aria-label="Delete expense"
                  icon={<Trash2 />}
                  size="sm"
                  onClick={() => deleteExpense(expense.id)}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};