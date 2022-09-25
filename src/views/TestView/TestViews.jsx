import Container from 'components/Container';
import TestHeader from 'components/TestHeader';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { testTypeSelector } from 'redux/testType/testTypeSelector';

import {
  getTechTestQuestionsQuery,
  getTheoryTestQuestionsQuery,
} from 'services/testAPI';
import s from './TestView.module.css';
import { techTest } from 'utils/constants';
import TestForm from 'components/TestForm';

export default function TestView() {
  const testType = useSelector(testTypeSelector);
  const [testQuestions, setTestQuestions] = useState(null);

  useEffect(() => {
    if (!testType) return;

    if (testType === techTest) {
      getTechTestQuestionsQuery()
        .then(data => setTestQuestions(data.data.testData))
        .catch(err => console.log(err));
    } else {
      getTheoryTestQuestionsQuery()
        .then(data => setTestQuestions(data.data.testData))
        .catch(err => console.log(err));
    }
  }, [testType]);

  return (
    <section className={s.testSection}>
      <Container>
        <TestHeader testType={testType} />
        <TestForm questions={testQuestions} />
      </Container>
    </section>
  );
}
