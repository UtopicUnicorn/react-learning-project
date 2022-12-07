import Axios, { getToken } from '../../../components/axios/axios-instance';
import { itemsURL } from '../../../apiURL';

export default {
  getWorkItems() {
    const user = getToken();
    return Axios.get(itemsURL + user);
  },
  getImage(image: string) {
    return Axios.get(itemsURL + 'image/' + image, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
  },
  sendOnPlatform(formData: any) {
    const user = getToken();
    return Axios.post(itemsURL + user, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
  }
};
