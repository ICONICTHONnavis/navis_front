import { atom } from 'recoil';

export const authState = atom({
  key: 'authState',
  default: { admission: null, major: '', studentName: '', studentNumber: null },
});
