import { getName, getAvatar } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import s from './UserAvatar.module.css';
const UserAvatar = () => {
  const userName = useSelector(getName);
  const avatar = useSelector(getAvatar);
  const user = userName?.split('@')[0];
  return (
    <div className={s.wrapper}>
      <div className={s.user}>
        <img src={avatar} alt="" className={s.avatar} width="31" height="31" />
      </div>
      <p className={s.name}>{user}</p>
    </div>
  );
};

export default UserAvatar;
