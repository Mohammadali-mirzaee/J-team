import * as t from './types';

export const setUserToGreenAction = (userId) => {
  return {
    type: t.SET_USER_TO_GREEN,
    payload: userId,
  };
};
