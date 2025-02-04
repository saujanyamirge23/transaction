import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { getBarChartData } from '../api';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const BarChart = ({ month }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchBarChartData = async () => {
      const response = await getBarChartData(month);
      const data = response.data;

      setChartData({
        labels: data.map((range) => range.range),
        datasets: [
          {
            label: 'Number of Items',
            data: data.map((range) => range.count),
            backgroundColor: '#4e73df',
          },
        ],
      });
    };
    fetchBarChartData();
  }, [month]);

  return (
    <div>
      {chartData ? (
        <Bar data={chartData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
};

export default BarChart;
