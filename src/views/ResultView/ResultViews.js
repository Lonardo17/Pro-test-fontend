import s from './ResultViews.module.css';
import ResultGraphic from '../../components/ResultPage/ResultGraphic';
import ResultMotivation from '../../components/ResultPage/ResultMotivation';
import { useSelector } from 'react-redux';
import { answersSelector } from 'redux/answers/answersSelectors';
import { useEffect } from 'react';
import { getResult } from 'services/resultAPI';
import { testTypeSelector } from 'redux/testType/testTypeSelector';

const ResultPage = () => {
  const answers = useSelector(answersSelector);
  const testType = useSelector(testTypeSelector);
  useEffect(() => {
    getResult({
      answers: JSON.stringify(answers),
      testType: testType,
    })
      .then(response => response.json())
      .then(response => console.log(response));
    return () => {};
  }, [answers, testType]);

  return (
    <div className={s.container}>
      <ResultGraphic testType={testType} />
      <ResultMotivation />
    </div>
  );
};

export default ResultPage;
