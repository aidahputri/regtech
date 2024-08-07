import { ComponentPropsWithoutRef } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

type AnalyticsItemChartProps = {
  title: string;
  value: string;
  percentage: number;
};

export const AnalyticsItemChart: React.FC<
  AnalyticsItemChartProps & ComponentPropsWithoutRef<"div">
> = ({ title, value, className, percentage }) => {
  const chartOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const exampleChartData = {
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: ["#00ACE0", "#F4BF22"],
        borderColor: ["#00ACE0", "#F4BF22"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div
      className={`flex flex-col p-4 gap-4 bg-white rounded-xl shadow ${className}`}
    >
      <span className="text-sm lg:text-base">{title}</span>
      <span className="font-bold text-xl lg:text-2xl">{value}</span>
      <div className="w-full h-full">
        <Pie data={exampleChartData} options={chartOptions} />
      </div>
    </div>
  );
};
