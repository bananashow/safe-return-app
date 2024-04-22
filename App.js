import { QueryClientProvider } from 'react-query';
import { Navigator } from './src/components/navigate/Navigator';
import { queryClient } from './src/api/queryClient';
import { RecoilRoot } from 'recoil';

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Navigator />
      </RecoilRoot>
    </QueryClientProvider>
  );
}
