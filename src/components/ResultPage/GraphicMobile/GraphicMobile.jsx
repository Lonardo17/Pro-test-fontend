import s from './GraphicMobile.module.css';
import { PieChart, Pie, Cell } from 'recharts';

const COLORS = ['#FF6B01', '#D7D7D7'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  fill,
  value,
  name,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <>
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        className={s.label}
      >
        {`${value}%`}
      </text>
      <text
        x={x}
        y={y + 8}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        className={s.label}
      >
        {`${name}`}
      </text>
    </>
  );
};

export default function GraphicMobile({ percentCorrect, percentIncorrect }) {
  const data = [
    { name: 'Correct', value: Number(percentCorrect) },
    { name: 'Incorrect', value: Number(percentIncorrect) },
  ];

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
