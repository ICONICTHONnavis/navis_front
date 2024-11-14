import { atom } from 'recoil';

export const messageState = atom({
  key: 'messageState',
  default: [],
});

// export const messageState = atom({
//   key: 'messageState',
//   default: [
//     {
//       chatId: 1,
//       messageQuestion: 'asd',
//       messageAnswer: 'asd',
//       date: '2024-11-12',
//     },
//     {
//       chatId: 2,
//       messageQuestion: '123',
//       messageAnswer: '123',
//       date: '2024-11-12',
//     },
//     {
//       chatId: 3,
//       messageQuestion: '123',
//       messageAnswer: '213',
//       date: '2024-11-12',
//     },
//   ],
// });

export const isLoadingState = atom({
  key: 'isLoadingState',
  default: false,
});
