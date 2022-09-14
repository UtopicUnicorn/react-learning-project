import axios from 'axios';
import { baseURL } from '../../tmpURLs';

const instance = axios.create({
  baseURL: baseURL
});

export default instance;
