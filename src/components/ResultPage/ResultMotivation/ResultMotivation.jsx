import s from './ResultMotivation.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetAnswers } from 'redux/answers/answersSlice';
import cat from './cat.png';
import cat2x from './cat2x.png';

const ResultMotivation = ({ testType }) => {
  const dispatch = useDispatch();
  function handleFinishTest() {
    dispatch(resetAnswers());
    localStorage.setItem('questions', null);
    localStorage.setItem('currentQIndex', 0);
    localStorage.removeItem('answer1');
    localStorage.removeItem('answer2');
  }

  return (
    <div className={s.container}>
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
