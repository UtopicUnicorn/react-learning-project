import Axios, { getToken } from '../../../components/axios/axios-instance';
import { NomenclatureInterface } from '../interfaces/nomenclature.interface';
import { nomenclatureURL, testUser } from '../../../tmpURLs';

export default {
  getNomenclature() {
    const user = getToken();
    return Axios.get(nomenclatureURL + user);
  },
  createNomenclature(nomenclature: NomenclatureInterface) {
    const user = getToken();
    return Axios.post(nomenclatureURL + user, nomenclature, {
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
