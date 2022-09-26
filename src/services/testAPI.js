import axios from 'axios';
import { techTest, theoryTest } from 'utils/constants';
const BASE_URL = 'https://app-protest.herokuapp.com/test';

export const getTechTestQuestionsQuery = async () =>
  await axios.get(`${BASE_URL}/${techTest}`);

export const getTheoryTestQuestionsQuery = async () =>
  await axios.get(`${BASE_URL}/${theoryTest}`);
