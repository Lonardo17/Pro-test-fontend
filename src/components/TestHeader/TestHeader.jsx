import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { testTypeSelector } from 'redux/testType/testTypeSelector';
import path from 'utils/router';
import s from './TestHeader.module.css';
const { home } = path;
export default function TestHeader() {
  const testType = useSelector(testTypeSelector);
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

  return (
    <div className={s.testHeader}>
      <p className={s.testTitle}>[ {getTitleOfTest(testType)}_ ]</p>
      <Link to={home} className={s.finishTestBtn}>
        Finish Test
      </Link>
    </div>
  );
}
