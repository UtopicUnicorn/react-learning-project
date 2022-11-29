import { combineReducers } from 'redux';

import { authReducer } from './pages/auth/reducers/auth.reducer';
import { priceRuleReducer } from './pages/price-rules/price-rule.reducer';
import { partnersReducer } from './pages/patners/reducers/partners.reduser';
import { nomenclatureReducer } from './pages/nomenclature/reducers/nomenclature.reducer';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  auth: authReducer,
  priceRule: priceRuleReducer,
  partners: partnersReducer,
  nomenclature: nomenclatureReducer
});

export default rootReducer;
