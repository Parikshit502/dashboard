// src/components/BarChart.tsx

import React, { useRef, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto'; // Automatically register Chart.js components
import { Chart as ChartJS, ChartData } from 'chart.js';

const BarChart: React.FC = () => {
  const chartRef = useRef<ChartJS<'bar'>>(null);

  // Sample data for Bar Chart
  const data: ChartData<'bar'> = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56],
        backgroundColor: (context: any) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return null;
          }

          const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
          gradient.addColorStop(0, 'rgba(75, 192, 192, 0.2)');
          gradient.addColorStop(1, 'rgba(75, 192, 192, 1)');

          return gradient;
        },
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-4">
      <Bar data={data} options={{ maintainAspectRatio: false }} />
    </div>
  );
};

export default BarChart;
