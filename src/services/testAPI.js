import axios from 'axios';
import { techTest, theoryTest } from 'utils/constants';
const BASE_URL = 'https://app-protest.herokuapp.com/';

axios.defaults.baseURL = BASE_URL;

const bodyForTechTest = {
  testType: techTest,
};

const bodyForTheoryTest = {
  testType: theoryTest,
};

export const getTechTestQuestionsQuery = async () =>
  await axios({
    method: 'get',
    body: JSON.stringify(bodyForTechTest),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  }).get(`/test`);

export const getTheoryTestQuestionsQuery = async () =>
  await axios({
    method: 'get',
    body: JSON.stringify(bodyForTheoryTest),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  }).get(`/test`);
