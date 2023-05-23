import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface DataProps {
  currency: string;
  days: string;
  arr: Array<Array<number>>;
}

const ChartComponent = ({ arr = [], currency, days }: DataProps) => {
  const prices: number[] = [];
  const date: string[] = [];

  for (let i = 0; i < arr.length; i++) {
    const formattedDate =
      days === "24h"
        ? new Date(arr[i][0]).toLocaleTimeString()
        : new Date(arr[i][0]).toLocaleDateString();
    date.push(formattedDate);
    prices.push(arr[i][1]);
  }

  const data = {
    labels: date,
    datasets: [
      {
        label: `Price in ${currency}`,
        data: prices,
        borderColor: "rgb(255,99,132)",
        backgroundColor: "rgba(255,99,132,0.5)",
      },
    ],
  };

  return (
    <Line
      options={{
        responsive: true,
      }}
      data={data}
    />
  );
};

export default ChartComponent;
