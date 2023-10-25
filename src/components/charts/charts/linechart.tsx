import { Line } from "react-chartjs-2";
import {Chart, CategoryScale} from 'chart.js/auto'; 

function LineChart({data} : {data: any}) {
    Chart.register(CategoryScale);
    return <Line data={data} />
}

export default LineChart;
