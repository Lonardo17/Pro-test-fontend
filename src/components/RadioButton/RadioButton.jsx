import s from './RadioButton.module.css';

const RadioButton = ({ checked }) => {
  return !checked ? (
    <svg
      width="18"
      height="18"
      viewBox="0 0 40 40"
      fontSize="38px"
      className={s.radio}
    >
      <circle cx="50%" cy="50%" r="18px" strokeWidth="1px" fill="none" />
    </svg>
  ) : (
    <svg
      width="18"
      height="18"
      viewBox="0 0 40 40"
      fontSize="38px"
      className={s.radioChecked}
    >
      <circle
        cx="50%"
        cy="50%"
        r="10px"
        stroke="#ff6b09"
        strokeWidth="1px"
        fill="#ff6b09"
      />
      <circle cx="50%" cy="50%" r="18px" strokeWidth="1px" fill="none" />
    </svg>
  );
};

export default RadioButton;
