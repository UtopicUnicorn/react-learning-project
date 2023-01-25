import { AnyAction } from 'redux';

export const nomenclatureInitialState = {
  brand: '',
  model: '',
  width: 0,
  profile: 0,
  diameter: 0,
  index: '',
  year: 0,
  description: '',
  status: 'new',
  season: 'winter',
  type: 'tire'
};

export function changeTire(payload: any) {
  return {
    type: 'NEW_ITEM',
    payload
  };
}

export type nomenclatureState = ReturnType<typeof nomenclatureReducer>;

export const nomenclatureReducer = (state = nomenclatureInitialState, action: AnyAction) => {
  switch (action.type) {
    case 'NEW_ITEM': {
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
