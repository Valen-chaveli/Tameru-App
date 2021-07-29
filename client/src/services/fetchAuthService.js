import { api } from '../config/axios';
import { getToken } from '../helpers/auth_helper';

export const fetchCheckToken = async () => {
  let token = getToken();

  try {
    let { data } = await api.post('/users/checkToken', {
      token: token,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDoLogin = async (user) => {
  try {
    let { data } = await api.post('/users/login', user);
    return data;
  } catch (error) {
    console.log(error);
  }
};
