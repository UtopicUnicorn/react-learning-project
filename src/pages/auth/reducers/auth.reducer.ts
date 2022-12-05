import { AnyAction } from 'redux';

export const authInitialState = {
  login: null,
  password: null,
  token: null
};

export type authState = ReturnType<typeof authReducer>;

export const authReducer = (state = authInitialState, action: AnyAction) => {
  switch (action.type) {
    case 'NEW_USER': {
      return {
        ...state,
        login: action.payload.login,
        password: action.payload.password
      };
    }

    //
    case 'SIGN_IN': {
      return {
        ...state,
        login: action.payload.login,
        password: action.payload.password
      };
    }

    default: {
      return state;
    }
  }
};
