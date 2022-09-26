import s from './UserAvatar.module.css';
const UserAvatar = () => {
  const userName = 'user'; //TODO: add Redux Auth State support
  return (
    <div className={s.wrapper}>
      <div className={s.user}>
        <span className={s.avatar}>{userName[0].toUpperCase()}</span>
      </div>
      <p className={s.name}>{userName}</p>
    </div>
  );
};

export default UserAvatar;
