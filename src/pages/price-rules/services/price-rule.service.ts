import Axios from '../../../components/axios/axios-instance';
import { PriceRuleInterface } from '../interfaces/price-rule.interface';
import { priceRuleURL, testUser } from '../../../tmpURLs';

export default {
  post(priceRule: PriceRuleInterface) {
    return Axios.post(priceRuleURL + testUser, priceRule);
  },

  get() {
    return Axios.get(priceRuleURL + testUser);
  }
};
