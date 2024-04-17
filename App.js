import { QueryClientProvider } from 'react-query';
import { Navigator } from './src/components/navigate/Navigator';
import { queryClient } from './src/api/queryClient';

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigator />
    </QueryClientProvider>
  );
}
