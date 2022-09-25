import FormControl from '@mui/material/FormControl';
import Icon from 'components/Icon';
import TestQuestion from 'components/TestQuestion';
import { useState } from 'react';
import s from './TestForm.module.css';

export default function TestForm({ questions }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); //

  function decrementIndex() {
    if (currentQuestionIndex === 0) {
      return;
    }
    const newIndex = currentQuestionIndex - 1;
    setCurrentQuestionIndex(newIndex);
  }

  function incrementIndex() {
    if (currentQuestionIndex === 11) {
      return;
    }
    const newIndex = currentQuestionIndex + 1;
    setCurrentQuestionIndex(newIndex);
  }

  return (
    <>
      <div className={s.questionCard}>
        <p className={s.questionNumber}>
          Question{' '}
          <span className={s.currentQuestionNumber}>
            {currentQuestionIndex + 1}
          </span>{' '}
          / 12
        </p>
        <FormControl className={s.form}>
          {questions && (
            <TestQuestion question={questions[currentQuestionIndex]} />
          )}
        </FormControl>
      </div>

      <div className={s.btnController}>
        <button
          type="button"
          className={
            currentQuestionIndex === 0 ? s.btnPrevDisabled : s.btnPrevEnabled
          }
          onClick={decrementIndex}
          disabled={currentQuestionIndex === 0 ? true : false}
        >
          <Icon iconId={'icon-arrow-left'} width={24} height={24} />
        </button>

        {currentQuestionIndex < 11 ? (
          <button type="button" className={s.btnNext} onClick={incrementIndex}>
            <Icon iconId={'icon-arrow'} width={24} height={24} />
          </button>
        ) : null}

        {currentQuestionIndex === 11 ? (
          <button
            type="submit"
            className={s.btnNext}
            // onClick={setCurrentQuestingIndex(currentQuestingIndex + 1)}
          >
            <Icon iconId={'icon-arrow'} width={24} height={24} />
          </button>
        ) : null}
      </div>
    </>
  );
}
