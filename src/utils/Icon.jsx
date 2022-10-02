import IconsSVG from '../img/symbol-defs-min.svg';

export default function Icon({ name, width, height, className }) {
  return (
    <svg
      className={`icon icon-${name} ${className}`}
      width={width}
      height={height}
    >
      <use href={`${IconsSVG}#icon-${name}`} />
    </svg>
  );
}
