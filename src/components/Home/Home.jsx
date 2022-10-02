import s from './Home.module.css';
import { Link } from 'react-router-dom';
import Icon from '../../utils/Icon';
import path from 'utils/router';
import { useDispatch } from 'react-redux';
import { setTestType } from 'redux/testType/testTypeSlice';
import { theoryTest, techTest } from 'utils/constants';
const { theoryTestPath, techTestPath } = path;

export default function Home() {
  localStorage.clear();
  const dispatch = useDispatch();
  return (
    <div className={s.container}>
      <q className={s.cite}>
        Regression testing. What is it?
        <br /> If the system compiles, that's good, if it boots, that's great!{' '}
      </q>
      <div className={s.line}></div>
      <p className={s.author}>Linus Torvalds</p>
      <p className={s.description}>Linux kernel creator, hacker, 1969</p>
      <div className={s.button}>
        <Link
          to={techTestPath}
          className={s.link}
          onClick={() => {
            dispatch(setTestType(techTest));
          }}
        >
          QA technical
          <br /> training
          <Icon
            name="arrow"
            width="24"
            height="24"
            className={s.arrowIconTechBtn}
          />
        </Link>

        <Link
          to={theoryTestPath}
          className={s.link}
          onClick={() => {
            dispatch(setTestType(theoryTest));
          }}
        >
          Testing
          <br /> theory
          <br />
          <Icon
            name="arrow"
            width="24"
            height="24"
            className={s.arrowIconTheoryBtn}
          />
        </Link>
      </div>
    </div>
  );
}
