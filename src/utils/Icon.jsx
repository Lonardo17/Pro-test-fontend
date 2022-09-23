import IconsSVG from '../img/symbol-defs-min.svg';

export default function Icons({ name, fill, stroke, width, height, className }) {
  return (
    <svg
      className={`icon icon-${name} ${className}`}
      fill={fill}
      stroke={stroke}
      width={width}
      height={height}
    >
      <use href={`${IconsSVG}#icon-${name}`} />
    </svg>
  );
}