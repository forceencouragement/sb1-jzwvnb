import React from 'react';
import { Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useExpenses } from '../contexts/ExpenseContext';
import { exportToCSV, exportToJSON } from '../utils/exportData';

export const ExportButton: React.FC = () => {
  const { expenses } = useExpenses();

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Export
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => exportToCSV(expenses)}>Export to CSV</MenuItem>
        <MenuItem onClick={() => exportToJSON(expenses)}>Export to JSON</MenuItem>
      </MenuList>
    </Menu>
  );
};