import Axios from '../../../components/axios/axios-instance';
import { NomenclatureInterface } from '../interfaces/nomenclature.interface';
import { nomenclatureURL, testUser } from '../../../tmpURLs';

export default {
  getNomenclature() {
    return Axios.get(nomenclatureURL + testUser);
  },
  createNomenclature(nomenclature: NomenclatureInterface) {
    return Axios.post(nomenclatureURL + testUser, nomenclature, {
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
