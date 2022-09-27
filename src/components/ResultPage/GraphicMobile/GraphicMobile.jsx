import s from './GraphicMobile.module.css';
import { PieChart, Pie, Cell } from 'recharts';

const correctAnswer = localStorage.getItem('answer1');
const incorrectAnswer = localStorage.getItem('answer2');

const data = [
  { name: 'Correct', value: Number(correctAnswer) },
  { name: 'Incorrect', value: Number(incorrectAnswer) },
];

const COLORS = ['#FF6B01', '#D7D7D7'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  payload,
  fill,
  value,
  name,
}) => {
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(RADIAN * midAngle);
  const sx = cx + (outerRadius - 20) * cos;
  const sy = cy + (innerRadius + 40) * sin;
  const mx = cx + (outerRadius - 3) * cos;
  const my = cy + (outerRadius - 70) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <>
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke="#00000081"
        fill="none"
      />
      <circle cx={sx} cy={sy} r={3} fill="#FFFFFF" stroke="none" />
      <text
        x={ex + (cos >= 0 ? 2 : -2) * 11}
        y={ey + 2}
        textAnchor={textAnchor}
        fill="#333"
        className={s.labelNumber}
      >{`${value}%`}</text>

      <text
        x={ex + (cos >= 0 ? 1 : -1) * 6}
        y={ey + (cos >= 0 ? 2 : -2) * 7}
        textAnchor={textAnchor}
        fill="#333"
        className={s.label}
      >{`${name}`}</text>
      {data.map((entry, index) => (
        <rect
          key={`cell-${index}`}
          fill={fill}
          width="14"
          height="14"
          x={ex + (cos >= 0 ? 1 : -3) * 6}
          y={ey + (cos >= 0 ? -1 : -1) * 8}
        />
      ))}
    </>
  );
};

export default function GraphicMobile() {
  return (
    <PieChart width={320} height={160} className={s.graphic}>
      <Pie
        data={data}
        cx={160}
        cy={75}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={78}
        fill="#8884d8"
        stroke="none"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
