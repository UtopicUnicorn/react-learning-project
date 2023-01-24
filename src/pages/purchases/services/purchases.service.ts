import { getToken } from '../../../components/axios/axios-instance';
import Axios from '../../../components/axios/axios-instance';
import { baseURL, purchasesURL } from '../../../tmpURLs';
import { PurchaseInterface } from '../interfaces/purchase.interface';

export default {
  getPurchases() {
    const user = getToken();
    return Axios.get(baseURL + purchasesURL + user);
  },
  addPurchase(purchase: PurchaseInterface) {
    const user = getToken();
    return Axios.post(baseURL + purchasesURL + user, purchase);
  }
};
