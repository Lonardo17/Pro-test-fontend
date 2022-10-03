import { useSelector } from 'react-redux';
import { seeHuman } from 'redux/human/humanSelectors';
import Spline from '@splinetool/react-spline';
import s from './Human.module.css'

const Human = () => { 
const human = useSelector(seeHuman);
const maxWidth = 1600;
const maxHeight = 850;
const width = window.innerWidth;
const height = window.innerHeight;
    return (<>
         {human && width >= maxWidth && height>= maxHeight && (
        <div className={s.man}>
          <Spline scene="https://prod.spline.design/wV7u1xT5Af3V0k1O/scene.splinecode" />
            </div>)}
        </>
     )
}
export default Human;