import axios from 'axios';
// import { result } from 'utils/constants';
// const BASE_URL = 'http://localhost:3000/test';

export const getResult = async body =>
  await axios.post(`http://localhost:3000/test/result`, body);
