const RadioButton = ({ checked }) => {
  return !checked ? (
    <svg width="18px" height="18px" viewBox="0 0 40 40" fontSize="38px">
      <circle
        cx="50%"
        cy="50%"
        r="18px"
        stroke="#000"
        strokeWidth="1px"
        fill="none"
      />
    </svg>
  ) : (
    <svg width="18px" height="18x" viewBox="0 0 40 40" fontSize="38px">
      <circle
        cx="50%"
        cy="50%"
        r="10px"
        stroke="#ff6b09"
        strokeWidth="1px"
        fill="#ff6b09"
      />
      <circle
        cx="50%"
        cy="50%"
        r="18px"
        stroke="#000"
        strokeWidth="1px"
        fill="none"
      />
    </svg>
  );
};

export default RadioButton;
