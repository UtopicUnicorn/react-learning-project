import Axios from '../../../components/axios/axios-instance';
import { UserInterface } from '../interfaces/user.interface';
import { loginURL } from '../../../tmpURLs';

export default {
  login(user: UserInterface) {
    return Axios.post(loginURL + 'check', user);
  },

  createUser(user: UserInterface) {
    return Axios.post(loginURL, user);
  }
};
