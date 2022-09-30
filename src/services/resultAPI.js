import axios from 'axios';
// import { result } from 'utils/constants';
const BASE_URL = 'https://app-protest.herokuapp.com/test';

export const getResult = async body =>
  await axios.post(`${BASE_URL}/result`, body);
