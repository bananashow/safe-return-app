import { atom } from 'recoil';

export const filteringOption = atom({
  key: 'filteringOptionAtom',
  default: {
    gender: '',
    target: '',
    ageRange: [0, 120],
  },
});
