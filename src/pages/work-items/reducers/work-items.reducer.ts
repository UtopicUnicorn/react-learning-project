import { AnyAction } from 'redux';

export const workItemInitialState = {
  item: '9ExENFR1Si',
  store: 'Дром',
  amount: '',
  price: ''
};

export function changeItemWork(payload: any) {
  return {
    type: 'NEW_SELL',
    payload
  };
}

export const workItemReducer = (state = workItemInitialState, action: AnyAction) => {
  switch (action.type) {
    case 'NEW_SELL': {
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
