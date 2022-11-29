import Axios, { getToken } from '../../../components/axios/axios-instance';
import { PriceRuleInterface } from '../interfaces/price-rule.interface';
import { priceRuleURL, testUser } from '../../../tmpURLs';

export default {
  post(priceRule: PriceRuleInterface) {
    const user = getToken();
    return Axios.post(priceRuleURL + user, priceRule);
  },

  get() {
    const user = getToken();
    return Axios.get(priceRuleURL + user);
  }
};
