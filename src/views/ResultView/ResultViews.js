import s from './ResultViews.module.css';
import ResultGraphic from '../../components/ResultPage/ResultGraphic';
import ResultMotivation from '../../components/ResultPage/ResultMotivation';

const ResultPage = () => {
  return (
    <div className={s.container}>
      <ResultGraphic />
      <ResultMotivation />
    </div>
  );
};

export default ResultPage;
