import Axios from '../../../components/axios/axios-instance';
import { UserInterface } from '../interfaces/user.interface';
import { loginURL, registrationURL } from '../../../apiURL';

export default {
  login(user: UserInterface) {
    return Axios.post(loginURL, user);
  },

  createUser(user: UserInterface) {
    return Axios.post(registrationURL, user);
  }
};
