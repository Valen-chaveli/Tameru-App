import { fetchCheckToken } from '../services/fetchAuthService';
import { types } from '../types/types';

export const startChecking = () => {
  return async (dispatch) => {
    let { payload, isValid } = await fetchCheckToken();

    if (!isValid) dispatch(checkingFinish());
    else dispatch(login(payload));
  };
};

const checkingFinish = () => ({ type: types.authCheckingFinish });

const login = (user) => ({ type: types.authLogin, payload: user });
