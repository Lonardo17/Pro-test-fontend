import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import s from './TestQuestion.module.css';
import { useEffect } from 'react';

export default function TestQuestion({
  question,
  chosenAnswer,
  setChosenAnswer,
}) {
  const mobileStyles = {
    width: '18px',
    height: '18px',
    color: '#000',
    fontWeight: '500',
    '&.Mui-checked': {
      color: '#ff6b09',
    },
    '&.MuiButtonBase-root': {
      marginRight: '20px',
    },
  };

  useEffect(() => {
    console.log(chosenAnswer);
  }, [chosenAnswer]);

  return (
    <>
      <FormLabel id={question.questionId} className={s.question}>
        {question.question}
      </FormLabel>
      <div className={s.line}></div>
      <RadioGroup className={s.optionsList}>
        {question.answers.map((answer, index) => (
          <FormControlLabel
            className={s.option}
            sx={{
              fontSize: '10px',
              '& .MuiFormControlLabel-label': {
                fontSize: '10px',
                fontWeight: '500',
                lineHeight: '1.2',
                fontFamily: 'inherit',
                letterSpacing: '0.02em',
              },
            }}
            key={index}
            checked={chosenAnswer?.option === answer ? true : false}
            onClick={() =>
              setChosenAnswer({ id: question.questionId, option: answer })
            }
            value={answer}
            control={<Radio sx={mobileStyles} />}
            label={answer}
          />
        ))}
      </RadioGroup>
    </>
  );
}
