import Graphic from '../Graphic';
import GraphicMobile from '../GraphicMobile';
import { useSelector } from 'react-redux';
import { testTypeSelector } from 'redux/testType/testTypeSelector';
import s from './ResultGraphic.module.css';

export default function ResultGraphic({ result }) {
  const width = window.innerWidth;

  const testType = useSelector(testTypeSelector);

  function getTitleOfTest() {
    const array = testType.split('');
    return array
      .map((char, index) => {
        if (index === 0) {
          return char.toUpperCase();
        } else if (char === '_') {
          return ' ';
        } else {
          return char;
        }
      })
      .join('');
  }

  const percentCorrect = Math.floor((result * 100) / 12);
  const percentIncorrect = Math.floor(100 - percentCorrect);

  return (
    <div>
      <h2 className={s.title}>Results</h2>
      <p className={s.typeTest}>[ {getTitleOfTest(testType)}_ ]</p>
      <hr className={s.line}></hr>
      {width > 767 ? (
        <Graphic
          percentCorrect={percentCorrect}
          percentIncorrect={percentIncorrect}
        />
      ) : (
        <GraphicMobile
          percentCorrect={percentCorrect}
          percentIncorrect={percentIncorrect}
        />
      )}
      <div className={s.containerResult}>
        <p className={s.result}>
          Correct answers-<b>{result}</b>
        </p>
        <hr className={s.horizonLine}></hr>
        <p className={s.result}>
          Total questions-<b>12</b>
        </p>
      </div>
    </div>
  );
}
