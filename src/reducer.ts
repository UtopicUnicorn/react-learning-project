import { combineReducers } from 'redux';

import { authReducer } from './pages/auth/reducers/auth.reducer';
import { priceRuleReducer } from './pages/price-rules/reducers/price-rule.reducer';
import { partnersReducer } from './pages/patners/reducers/partners.reduser';
import { nomenclatureReducer } from './pages/nomenclature/reducers/nomenclature.reducer';
import { workItemReducer } from './pages/work-items/reducers/work-items.reducer';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  auth: authReducer,
  priceRule: priceRuleReducer,
  partners: partnersReducer,
  nomenclature: nomenclatureReducer,
  workItem: workItemReducer
});

export default rootReducer;
