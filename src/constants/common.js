import { Home } from '../screens/Home';
import { Search } from '../screens/Search';
import { Report } from '../screens/Report';

export const TAB_MENU = [
  {
    name: '홈',
    icon: 'home',
    component: Home,
  },
  {
    name: '찾고있어요',
    icon: 'person-search',
    component: Search,
  },
  {
    name: '제보해요',
    icon: 'report',
    component: Report,
  },
];
