import React from 'react';
import { ChakraProvider, Box, Flex } from '@chakra-ui/react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { ExpenseProvider } from './contexts/ExpenseContext';

function App() {
  return (
    <ChakraProvider>
      <ExpenseProvider>
        <Flex minHeight="100vh">
          <Sidebar />
          <Box flex={1} p={5}>
            <Dashboard />
          </Box>
        </Flex>
      </ExpenseProvider>
    </ChakraProvider>
  );
}

export default App;
