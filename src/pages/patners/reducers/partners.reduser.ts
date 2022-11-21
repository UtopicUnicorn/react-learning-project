import { AnyAction } from 'redux';

export const partnerInitialState = {
  name: '',
  surname: '',
  parentname: '',
  phone: '',
  email: '',
  address: '',
  inn: '',
  bank: '',
  bik: '',
  payNumber: '',
  pricerule: 'sD7z0y1wHQ',
  kpp: ''
};

export function changeForm(payload: any) {
  return {
    type: 'HANDLE',
    payload
  };
}

export type partnerState = ReturnType<typeof partnersReducer>;

export const partnersReducer = (state = partnerInitialState, action: AnyAction) => {
  switch (action.type) {
    case 'HANDLE': {
      return {
        ...state,
        ...action.payload
      };
    }
    default: {
      return state;
    }
  }
};
