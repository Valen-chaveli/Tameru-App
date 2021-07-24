let CURRENT_USER_TOKEN = 'current_user_token';

export const setToken = (token) => {
  localStorage.setItem(CURRENT_USER_TOKEN, token);
};

export const getToken = () => {
  let token = localStorage.getItem(CURRENT_USER_TOKEN);
  return token || '';
};

export const deleteToken = () => {
  localStorage.removeItem(CURRENT_USER_TOKEN);
};
