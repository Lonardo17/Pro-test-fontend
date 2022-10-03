import TestHeader from 'components/TestHeader';
import { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { testTypeSelector } from 'redux/testType/testTypeSelector';

import {
  getTechTestQuestionsQuery,
  getTheoryTestQuestionsQuery,
} from 'services/testAPI';
import s from './TestView.module.css';
import { techTest } from 'utils/constants';
import TestForm from 'components/TestForm';
import useLocalStorage from 'hooks/useLocalStorage';
import Loader from 'components/Loader';
import { seeHuman } from 'redux/human/humanSlices';
export default function TestView() {
  const testType = useSelector(testTypeSelector);
  const [status, setStatus] = useState(false);
  const [testQuestions, setTestQuestions] = useLocalStorage('questions', null);
  const dispatch = useDispatch();
  dispatch(seeHuman())

  useEffect(() => {
    if (!testType) return;
    if (testQuestions) return;

    if (testType === techTest) {
      setStatus(true);
      getTechTestQuestionsQuery()
        .then(data => {
          setTestQuestions(data.data.testData);
          setStatus(false);
        })
        .catch(err => {
          console.log(err);
          setStatus(false);
        });
    } else {
      setStatus(true);
      getTheoryTestQuestionsQuery()
        .then(data => {
          setTestQuestions(data.data.testData);
          setStatus(false);
        })
        .catch(err => {
          console.log(err);
          setStatus(false);
        });
    }
  }, [setTestQuestions, testQuestions, testType]);

  return (
    <section className={s.testSection}>
      {status && <Loader />}
      <div className={s.container}>
        <TestHeader testType={testType} />
        <TestForm questions={testQuestions} />
      </div>
    </section>
  );
}
