import Graphic from '../Graphic';
import GraphicMobile from '../GraphicMobile';
import s from './ResultGraphic.module.css';

const ResultGraphic = () => {
  const width = window.innerWidth;

  return (
    <div>
      <h2 className={s.title}>Results</h2>
      <p className={s.typeTest}>[ TESTING THEORY_]</p>
      <hr className={s.line}></hr>
      {width > 767 ? <Graphic /> : <GraphicMobile />}
      <div className={s.containerResult}>
        <p className={s.result}>
          Correct answers-<b>9</b>
        </p>
        <hr className={s.horizonLine}></hr>
        <p className={s.result}>
          Total questions-<b>12</b>
        </p>
      </div>
    </div>
  );
};

export default ResultGraphic;
