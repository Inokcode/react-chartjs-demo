import { Bar } from "react-chartjs-2";
import { Chart as chartjs } from "chart.js/auto";

const BarChart = ({ chartData }) => {
  return (
    <div>
      <Bar data={chartData} />
    </div>
  );
};
export default BarChart;
