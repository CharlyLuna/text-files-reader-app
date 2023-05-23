/* eslint-disable react/prop-types */
import { Bar } from "react-chartjs-2";
// eslint-disable-next-line no-unused-vars
import ChartJS from "chart.js/auto";

export const BarChart = ({ data }) => {
  return (
    <div>
      <Bar
        data={data}
        height={400}
        width={600}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: {
              top: 50,
              left: 100,
              right: 100,
            },
          },
        }}
      />
    </div>
  );
};
