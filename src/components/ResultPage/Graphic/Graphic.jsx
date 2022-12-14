import s from './Graphic.module.css';
import { PieChart, Pie, Cell } from 'recharts';

const COLORS = ['#FF6B01', '#D7D7D7'];

const RADIAN = Math.PI / 180;
const theme = localStorage.getItem('theme');

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  value,
  fill,
  name,
}) => {
  const sin = Math.sin(-RADIAN * midAngle);

  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius - 20) * cos;
  const sy = cy + (innerRadius + 70) * sin;
  const mx = cx + (outerRadius + 10) * cos;
  const my = cy + (outerRadius - 10) * sin;
  const ex = mx + (cos >= 0 ? 3 : -3) * 22;
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
        x={ex + (cos >= 0 ? 3 : -3) * 15}
        y={ey + (cos >= 0 ? 0.5 : 0.5) * 12}
        fill={theme === 'dark' ? '#FFFFFF' : '#000000'}
        textAnchor={textAnchor}
        className={s.labelNumber}
      >
        {`${value}% ${name}`}
      </text>

      <rect
        fill={fill}
        width="25"
        height="25"
        x={ex + (cos >= 0 ? 1 : -3) * 12}
        y={ey + (cos >= 0 ? -1 : -1) * 12}
      />
    </>
  );
};

export default function Graphic({ percentCorrect, percentIncorrect }) {
  const data = [
    { name: 'Correct', value: percentCorrect },
    { name: 'Incorrect', value: percentIncorrect },
  ];
  return (
    <PieChart width={768} height={286} className={s.graphic}>
      <Pie
        data={data}
        cx={384}
        cy={138}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={142.5}
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
