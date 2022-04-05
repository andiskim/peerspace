import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { SampleContextProvider } from './src/contexts/SampleContext';
import HomeScreen from './src/screens/HomeScreen';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SampleContextProvider>
        <HomeScreen />
      </SampleContextProvider>
    </QueryClientProvider>
  )
};

export default App;
