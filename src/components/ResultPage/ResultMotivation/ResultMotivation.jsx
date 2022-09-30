import s from './ResultMotivation.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetAnswers } from 'redux/answers/answersSlice';
import cat from './cat.png';
import cat2x from './cat2x.png';
import sadCat from './sadCat.png';
import sadCat2x from './sadCat2x.png';
import winnerCat from './winnerCat.png';
import winnerCat2x from './winnerCat2x.png';

const ResultMotivation = ({ testType, result }) => {
  const dispatch = useDispatch();

  function handleFinishTest() {
    dispatch(resetAnswers());
    localStorage.setItem('questions', null);
    localStorage.setItem('currentQIndex', 0);
    localStorage.setItem('chosenAnswer', null);
  }

  const replaceCat = () => {
    if (result <= 4) {
      return (
        <>
          <img
            srcSet={(`${sadCat} 1x`, `${sadCat2x} 2x`)}
            src={sadCat}
            alt="sad cat"
            className={s.image}
          />
          <p className={s.resultText}>Oops!</p>
          <p className={s.motivationText}>
            You should prepare better for the test.
          </p>
        </>
      );
    }
    if (result === 12) {
      return (
        <>
          <img
            srcSet={(`${winnerCat} 1x`, `${winnerCat2x} 2x`)}
            src={winnerCat}
            alt="winner cat"
            className={s.image}
          />
          <p className={s.resultText}>Excellent!</p>
          <p className={s.motivationText}>You know the material 100%.</p>
        </>
      );
    } else {
      return (
        <>
          <img
            srcSet={`${cat} 1x, ${cat2x} 2x`}
            src={cat}
            alt="cat"
            className={s.image}
          />
          <p className={s.resultText}>Not bad!</p>
          <p className={s.motivationText}>
            But you still need to learn some materials.
          </p>
        </>
      );
    }
  };

  const resultCat = replaceCat();

  return (
    <div className={s.container}>
      {resultCat}
      <Link
        to={`/test/${testType}`}
        className={s.button}
        onClick={handleFinishTest}
      >
        Try again
      </Link>
    </div>
  );
};

export default ResultMotivation;
