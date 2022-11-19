import { AnyAction } from 'redux';

export const partnerInitialState = {
  name: '',
  surname: '',
  parentName: '',
  phone: '',
  email: ''
};

export type partnerState = ReturnType<typeof partnersReducer>;

export const partnersReducer = (state = partnerInitialState, action: AnyAction) => {
  switch (action.type) {
    case 'HANDLE': {
      console.log('reducer: ', action.payload);
      return {
        ...state,
        name: action.payload.name,
        surname: action.payload.surname,
        parentName: action.payload.parentName,
        phone: action.payload.phone,
        email: action.payload.email
      };
    }
    default: {
      return state;
    }
  }
};
