import React from 'react';
import { Box, VStack, Text, Button } from '@chakra-ui/react';
import { Home, PieChart, DollarSign, Settings } from 'lucide-react';

export const Sidebar: React.FC = () => {
  return (
    <Box width="200px" bg="gray.100" p={4}>
      <VStack spacing={4} align="stretch">
        <Button leftIcon={<Home />} justifyContent="flex-start" variant="ghost">
          Dashboard
        </Button>
        <Button leftIcon={<PieChart />} justifyContent="flex-start" variant="ghost">
          Analytics
        </Button>
        <Button leftIcon={<DollarSign />} justifyContent="flex-start" variant="ghost">
          Expenses
        </Button>
        <Button leftIcon={<Settings />} justifyContent="flex-start" variant="ghost">
          Settings
        </Button>
      </VStack>
    </Box>
  );
};