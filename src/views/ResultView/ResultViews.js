import s from './ResultViews.module.css';
import ResultGraphic from '../../components/ResultPage/ResultGraphic';
import ResultMotivation from '../../components/ResultPage/ResultMotivation';
import { useSelector } from 'react-redux';
import { answersSelector } from 'redux/answers/answersSelectors';
import { useEffect, useState } from 'react';
import { getResult } from 'services/resultAPI';
import { testTypeSelector } from 'redux/testType/testTypeSelector';

const ResultPage = () => {
  const answers = useSelector(answersSelector);
  const testType = useSelector(testTypeSelector);
  const [result, setResult] = useState(0);

  useEffect(() => {
    getResult({
      answers: JSON.stringify(answers),
      testType: testType,
    }).then(response => setResult(response.data.result));
    return () => {};
  }, [answers, testType]);

  return (
    <div className={s.container}>
      <ResultGraphic result={result} />
      <ResultMotivation testType={testType} />
    </div>
  );
};

export default ResultPage;
