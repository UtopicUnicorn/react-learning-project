import { AnyAction } from 'redux';

export const priceRuleInitialState = {
  name: '',
  percent: 0,
  min: 0,
  max: 0
};

export type priceRuleState = ReturnType<typeof priceRuleReducer>;

export const priceRuleReducer = (state = priceRuleInitialState, action: AnyAction) => {
  switch (action.type) {
    case 'NEW_RULE': {
      console.log(action);
      return {
        ...state,
        name: action.payload.name,
        percent: action.payload.percent,
        min: action.payload.min,
        max: action.payload.max
      };
    }
    default: {
      return state;
    }
  }
};
