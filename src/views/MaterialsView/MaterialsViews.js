import s from './MaterialsViews.module.css';
import Literature from '../../components/Materials/Literature';
import Resources from '../../components/Materials/Resources';
import { useDispatch, } from 'react-redux';
import { resetHuman } from 'redux/human/humanSlices';
const MaterialsViews = () => {
  const dispatch = useDispatch();
  dispatch(resetHuman())

  return (
    <div className={s.wrap}>
      <div className={s.container}>
        <Literature />
        <Resources />
      </div>
    </div>
  );
};

export default MaterialsViews;
