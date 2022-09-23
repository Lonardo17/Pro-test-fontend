import s from './MaterialsViews.module.css';
import Literature from '../../components/Materials/Literature';
import Resources from '../../components/Materials/Resources';
const MaterialsViews = () => {
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
