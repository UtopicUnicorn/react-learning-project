import Axios, { getToken } from '../../../components/axios/axios-instance';
import { PartnersInterface } from '../interfaces/partners.interface';
import { partnersURL, testUser } from '../../../tmpURLs';

export default {
  post(partner: PartnersInterface) {
    const user = getToken();
    return Axios.post(partnersURL + user, partner);
  },
  get() {
    const user = getToken();
    return Axios.get(partnersURL + user + testUser);
  }
};
