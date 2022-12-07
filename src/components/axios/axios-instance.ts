import axios from 'axios';
import { baseURL } from '../../apiURL';

const instance = axios.create({
  baseURL: baseURL
});

export default instance;

export function getToken() {
  return localStorage.getItem('key');
}
