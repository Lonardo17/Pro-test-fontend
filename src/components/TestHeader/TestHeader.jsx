import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetAnswers } from 'redux/answers/answersSlice';
import { testTypeSelector } from 'redux/testType/testTypeSelector';
import { resetTestType } from 'redux/testType/testTypeSlice';
import path from 'utils/router';
import s from './TestHeader.module.css';
const { home } = path;
export default function TestHeader() {
  const testType = useSelector(testTypeSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  function handleFinishTest() {
    dispatch(resetAnswers());
    dispatch(resetTestType());
    localStorage.setItem('questions', null);
    localStorage.setItem('currentQIndex', 0);
    navigate(home, { replace: true });
  }

  return (
    <div className={s.testHeader}>
      <p className={s.testTitle}>[ {getTitleOfTest(testType)}_ ]</p>
      <button
        type="button"
        className={s.finishTestBtn}
        onClick={handleFinishTest}
      >
        Finish Test
      </button>
    </div>
  );
}
