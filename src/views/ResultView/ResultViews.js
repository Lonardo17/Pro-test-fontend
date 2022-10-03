import s from './ResultViews.module.css';
import ResultGraphic from '../../components/ResultPage/ResultGraphic';
import ResultMotivation from '../../components/ResultPage/ResultMotivation';
import { useSelector } from 'react-redux';
import { answersSelector } from 'redux/answers/answersSelectors';
import { useEffect, useState } from 'react';
import { getResult } from 'services/resultAPI';
import { testTypeSelector } from 'redux/testType/testTypeSelector';
import { useDispatch, } from 'react-redux';
import { resetHuman } from 'redux/human/humanSlices';
import Loader from 'components/Loader';

const ResultPage = () => {
  const answers = useSelector(answersSelector);
  const testType = useSelector(testTypeSelector);
  const [result, setResult] = useState(0);

  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  dispatch(resetHuman())

  useEffect(() => {
    setIsLoading(true);

    getResult({
      answers: JSON.stringify(answers),
      testType: testType,
    })
      .then(response => setResult(response.data.result))
      .finally(() => setIsLoading(false));
    return () => {};
  }, [answers, testType]);

  return (
    <div className={s.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ResultGraphic result={result} />
          <ResultMotivation testType={testType} result={result} />
        </>
      )}
    </div>
  );
};

export default ResultPage;
