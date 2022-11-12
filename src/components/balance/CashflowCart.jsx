import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March"];

export const data = {
  labels,
  datasets: [
    {
      label: "Income",
      data: [15, 20, 35,],
      borderColor: "#0d6efd",
      backgroundColor: "#0d6efd",
    },
    {
      label: "Expense",
      data: [18, 24],
      borderColor: "#ffc107",
      backgroundColor: "#ffc107",
    },
  ],
};

export default function CashflowCart() {
  return <Line options={options} data={data} className="mt-" />;
}
