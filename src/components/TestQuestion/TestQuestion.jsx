import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import s from './TestQuestion.module.css';

export default function TestQuestion({ question }) {
  return (
    <>
      <FormLabel id={question.id} className={s.question}>
        {question.question}
      </FormLabel>
      <div className={s.line}></div>
      <RadioGroup>
        {question.answers.map((answer, index) => (
          <FormControlLabel
            className={s.option}
            key={index}
            // checked={selectedValue === 'a'}
            value={answer}
            control={
              <Radio
                // size="small"
                sx={{
                  width: '18px',
                  height: '18px',
                  marginRight: '20px',
                  borderColor: '1px solid #000',
                  color: '#000',
                  '&.Mui-checked': {
                    color: '#ff6b09',
                  },
                }}
              />
            }
            label={answer}
          />
        ))}
      </RadioGroup>
    </>
  );
}
