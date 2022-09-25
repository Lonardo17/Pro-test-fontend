import s from './ResultMotivation.module.css';
import { Link } from 'react-router-dom';
import path from 'utils/router';
import cat from './cat.png';
import cat2x from './cat2x.png';

const { test } = path;

const ResultMotivation = () => {
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
      {/* test/testType */}
      <Link to={test} className={s.button}>
        Try again
      </Link>
    </div>
  );
};

export default ResultMotivation;
