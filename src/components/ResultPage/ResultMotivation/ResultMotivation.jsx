import s from './ResultMotivation.module.css';

import cat from './cat.png';
const ResultMotivation = () => {
  return (
    <div className={s.container}>
      <img src={cat} alt="cat" className={s.image} />
      <p className={s.resultText}>Not bad!</p>
      <p className={s.motivationText}>
        But you still need to learn some materials.
      </p>
      <a href="./" className={s.button}>
        Try again
      </a>
    </div>
  );
};

export default ResultMotivation;
