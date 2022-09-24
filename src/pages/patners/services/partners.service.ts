import Axios from '../../../components/axios/axios-instance';
import { PartnersInterface } from '../interfaces/partners.interface';
import { partnersURL, testUser } from '../../../tmpURLs';

export default {
  post(partner: PartnersInterface) {
    return Axios.post(partnersURL + testUser, partner);
  },
  get() {
    return Axios.get(partnersURL + testUser);
  }
};
