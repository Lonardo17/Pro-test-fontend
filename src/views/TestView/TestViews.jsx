import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { testTypeSelector } from 'redux/testType/testTypeSelector';
import {
  getTechTestQuestionsQuery,
  getTheoryTestQuestionsQuery,
} from 'services/testAPI';
import { techTest } from 'utils/constants';

export default function TestView() {
  const testType = useSelector(testTypeSelector);
  const [testQuestions, setTestQuestions] = useState(null);

  useEffect(() => {
    if (!testType) return;

    if (testType === techTest) {
      getTechTestQuestionsQuery()
        .then(data => setTestQuestions(data))
        .catch(err => console.log(err.message));
    } else {
      getTheoryTestQuestionsQuery()
        .then(data => setTestQuestions(data))
        .catch(err => console.log(err.message));
    }
  }, [testType]);

  return (
    <>
      <p>{testType}</p>
      <p>{testQuestions.length}</p>
    </>
  );
}
