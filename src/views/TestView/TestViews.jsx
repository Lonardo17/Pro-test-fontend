import Container from 'components/Container';
import TestHeader from 'components/TestHeader';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { testTypeSelector } from 'redux/testType/testTypeSelector';

import {
  getTechTestQuestionsQuery,
  getTheoryTestQuestionsQuery,
} from 'services/testAPI';
import s from './TestView.module.css';
import { techTest } from 'utils/constants';
import TestForm from 'components/TestForm';
import useLocalStorage from 'hooks/useLocalStorage';

export default function TestView() {
  const testType = useSelector(testTypeSelector);
  const [testQuestions, setTestQuestions] = useLocalStorage('questions', null);

  useEffect(() => {
    if (!testType) return;
    if (testQuestions) return;

    if (testType === techTest) {
      getTechTestQuestionsQuery()
        .then(data => setTestQuestions(data.data.testData))
        .catch(err => console.log(err));
    } else {
      getTheoryTestQuestionsQuery()
        .then(data => setTestQuestions(data.data.testData))
        .catch(err => console.log(err));
    }
  }, [setTestQuestions, testQuestions, testType]);

  return (
    <section className={s.testSection}>
      <Container>
        <TestHeader testType={testType} />
        <TestForm questions={testQuestions} />
      </Container>
    </section>
  );
}
