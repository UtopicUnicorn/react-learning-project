import { AnyAction } from 'redux';

export const partnerInitialState = {
  name: '',
  surname: '',
  parentname: '',
  phone: '',
  mail: '',
  address: '',
  inn: '',
  type: 'phys',
  bank: '',
  bik: '',
  payNumber: '',
  pricerule: '',
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
