import { setToken } from '../helpers/auth_helper';
import {
  fetchCheckToken,
  fetchDoLogin,
  fetchDoRegister,
} from '../services/fetchAuthService';
import { types } from '../types/types';

export const startChecking = () => {
  return async (dispatch) => {
    let { payload, isValid } = await fetchCheckToken();

    if (!isValid) dispatch(checkingFinish());
    else dispatch(login(payload));
  };
};

export const startLoggin = (user) => {
  return async (dispatch) => {
    let data = await fetchDoLogin(user);

    console.log(data);

    if (data.error) dispatch(authError(data.message));
    else {
      if (data.token) setToken(data.token);
      dispatch(login(data.user));
    }
  };
};

export const startRegister = (user) => {
  return async (dispatch) => {
    let data = await fetchDoRegister(user);

    if (data.error) dispatch(authError(data.message));
    else {
      if (data.token) setToken(data.token);
      dispatch(login(data.user));
    }
  };
};

const checkingFinish = () => ({ type: types.authCheckingFinish });

const login = (user) => ({ type: types.authLogin, payload: user });

const authError = (message) => ({ type: types.authError, payload: message });
