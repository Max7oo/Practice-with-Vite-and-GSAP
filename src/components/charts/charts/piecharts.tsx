import { Pie } from "react-chartjs-2";
import {Chart, CategoryScale} from 'chart.js/auto'; 

function PieChart({data} : {data: any}) {
    Chart.register(CategoryScale);
    return <Pie data={data} />
}

export default PieChart;
