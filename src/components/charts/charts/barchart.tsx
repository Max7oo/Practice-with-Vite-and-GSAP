import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale } from "chart.js/auto";

function BarChart({ data }: { data: any }) {
  Chart.register(CategoryScale);
  Chart.defaults.color = "white";
  Chart.defaults.font.weight = "600";
  return <Bar data={data} />;
}

export default BarChart;
