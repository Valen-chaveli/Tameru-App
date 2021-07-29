import { types } from '../types/types';

let initialState = {
  logged: false,
  checking: true,
  error: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLogin: {
      return {
        ...state,
        logged: true,
        checking: false,
        ...action.payload,
      };
    }

    case types.authCheckingFinish: {
      return {
        ...state,
        checking: false,
      };
    }

    case types.authLoggout: {
      return {
        ...state,
        logged: false,
        checking: false,
      };
    }

    case types.authError: {
      return {
        ...state,
        error: true,
        message: action.payload,
      };
    }

    default:
      return state;
  }
};
