import axios from 'axios';
import { techTest, theoryTest } from 'utils/constants';
const BASE_URL = 'https://pro-test-ni4n.onrender.com/test';

export const getTechTestQuestionsQuery = async () =>
  await axios.get(`${BASE_URL}/${techTest}`);

export const getTheoryTestQuestionsQuery = async () =>
  await axios.get(`${BASE_URL}/${theoryTest}`);
