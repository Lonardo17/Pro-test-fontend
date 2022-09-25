import FormControl from '@mui/material/FormControl';
import Icon from 'components/Icon';
import TestQuestion from 'components/TestQuestion';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAnswer } from 'redux/answers/answersSlice';
import s from './TestForm.module.css';

export default function TestForm({ questions }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // з LS
  const [chosenAnswer, setChosenAnswer] = useState(null); // з LS

  const dispatch = useDispatch();

  function decrementIndex() {
    if (currentQuestionIndex === 0) {
      return;
    }
    const newIndex = currentQuestionIndex - 1;
    setCurrentQuestionIndex(newIndex);
    addNewAnswer();
  }

  function incrementIndex() {
    if (currentQuestionIndex === 11) {
      return;
    }
    const newIndex = currentQuestionIndex + 1;
    setCurrentQuestionIndex(newIndex);
    addNewAnswer();
  }

  function addNewAnswer() {
    dispatch(addAnswer(chosenAnswer));
    setChosenAnswer(null);
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
            <TestQuestion
              question={questions[currentQuestionIndex]}
              chosenAnswer={chosenAnswer}
              setChosenAnswer={setChosenAnswer}
            />
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
          <button
            type="button"
            className={!chosenAnswer ? s.btnNextDisabled : s.btnNext}
            onClick={incrementIndex}
            disabled={!chosenAnswer ? true : false}
          >
            <Icon iconId={'icon-arrow'} width={24} height={24} />
          </button>
        ) : null}

        {currentQuestionIndex === 11 ? (
          <button
            type="submit" // TODO
            className={s.btnSubmit}
            disabled={!chosenAnswer ? true : false}

            // onClick={setCurrentQuestingIndex(currentQuestingIndex + 1)}
          >
            Send Answers
          </button>
        ) : null}
      </div>
    </>
  );
}
