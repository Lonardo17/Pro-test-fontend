import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import s from './TestQuestion.module.css';
import { ThemeProvider } from '@mui/material';
import { formControlTheme } from 'utils/customThemes';
import RadioButton from 'components/RadioButton';

export default function TestQuestion({
  question,
  chosenAnswer,
  setChosenAnswer,
}) {
  // const mobileStyles = {
  //   width: '18px',
  //   height: '18px',
  //   color: '#000',
  //   fontWeight: '500',
  //   '&.Mui-checked': {
  //     color: '#ff6b09',
  //   },
  //   '&.MuiButtonBase-root': {
  //     marginRight: '20px',
  //   },
  // };

  return (
    <>
      <FormLabel id={question.questionId} className={s.question}>
        {question.question}
      </FormLabel>
      <div className={s.line}></div>
      <RadioGroup className={s.optionsList}>
        {question.answers.map((answer, index) => (
          <ThemeProvider theme={formControlTheme} key={index}>
            <FormControlLabel
              className={s.option}
              key={index}
              checked={chosenAnswer?.option === answer ? true : false}
              onClick={() =>
                setChosenAnswer({ id: question.questionId, option: answer })
              }
              value={answer}
              control={
                <Radio
                  icon={<RadioButton />}
                  checkedIcon={<RadioButton checked />}
                  style={{ marginRight: '20px' }}
                />
              }
              label={answer}
            />
          </ThemeProvider>
        ))}
      </RadioGroup>
    </>
  );
}
