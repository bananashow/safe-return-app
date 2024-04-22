import { QueryClientProvider } from 'react-query';
import { Navigator } from './src/components/navigate/Navigator';
import { queryClient } from './src/api/queryClient';
import { RecoilRoot } from 'recoil';
import { PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <PaperProvider>
          <Navigator />
        </PaperProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}
