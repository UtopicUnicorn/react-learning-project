import { AnyAction } from 'redux';

export const purchaseInitialState = {
  organization: '',
  supplier: '',
  stock: '',
  item: '',
  partner: '',
  document: '',
  sum: 0,
  addinvest: 0
};

export type purchaseState = ReturnType<typeof purchaseReducer>;

export const purchaseReducer = (state = purchaseInitialState, action: AnyAction) => {
  switch (action.type) {
    case 'NEW_PURCHASE': {
      return {
        ...state,
        organization: action.payload.organization,
        supplier: action.payload.supplier,
        partner: action.payload.partner,
        sum: action.payload.sum,
        addinvest: action.payload.addinvest
      };
    }
    default: {
      return state;
    }
  }
};
