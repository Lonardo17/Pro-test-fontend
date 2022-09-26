import Sprite from '../../img/symbol-defs-min.svg';

export default function Icon({ iconId, width, height }) {
  return (
    <svg width={width} height={height}>
      <use href={`${Sprite}#${iconId}`}></use>
    </svg>
  );
}

//TODO props
