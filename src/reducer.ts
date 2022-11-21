import { combineReducers } from 'redux';

import { authReducer } from './pages/auth/reducers/auth.reducer';
import { priceRuleReducer } from './pages/price-rules/price-rule.reducer';
import { partnersReducer } from './pages/patners/reducers/partners.reduser';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  auth: authReducer,
  priceRule: priceRuleReducer,
  partners: partnersReducer
});

export default rootReducer;
