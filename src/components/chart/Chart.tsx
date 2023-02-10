import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./chart.scss";
interface LineChartProps {
  title: string;
  data: any[];
  datakey: string;
  grid: boolean;
}

const Chart: React.FC<LineChartProps> = ({ title, data, datakey, grid }) => {
 
  return (
    <div className="chart">
      <h3>{title}</h3>
      <div className="chart-container">
        <ResponsiveContainer width={"100%"} aspect={4 / 1}>
          <LineChart width={300} height={100} data={data}>
            <XAxis dataKey={"monthAbbrevietion"} />
            <Line
              type="monotone"
              dataKey={datakey}
              stroke="#8884d8"
              strokeWidth={2}
            />
            <Tooltip />
            {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray={"5 5"} />}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
