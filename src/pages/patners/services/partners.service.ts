/* eslint-disable */
import Axios from '../../../components/axios/axios-instance';
import { PartnersInterface } from '../interfaces/partners.interface';
import { partnersURL, testUser } from '../../../tmpURLs';

export default {
  post(partner: PartnersInterface) {
    console.log(partnersURL + testUser);
    return Axios.post('partners/_GOnJvmGqQ', partner);
  },
  get() {
    return Axios.get(partnersURL + testUser);
  }
};
