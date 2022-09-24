import s from './ResultPage.module.css';
import ResultGraphic from './ResultGraphic';
import ResultMotivation from './ResultMotivation';

const ResultPage = () => {
  return (
    <div className={s.container}>
      <ResultGraphic />
      <ResultMotivation />
    </div>
  );
};

export default ResultPage;
