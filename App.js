import { Navigator } from './src/components/navigate/Navigator';
import { SAFE_API_KEY } from '@env';

export default function App() {
  console.log('SAFE_API_KEY : ', SAFE_API_KEY);
  return <Navigator />;
}
