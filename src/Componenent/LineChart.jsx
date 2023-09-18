import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts';
import './LineChart.css';

export default function LineChart() {
  const [chartData, setChartData] = useState(null);
  const userId = 3;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:3019/api/line-chart-data?userId=${userId}`);
        setChartData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  // Check if chartData is null and render a loading message or the chart
  if (chartData === null) {
    return <div>Loading...</div>;
  }

  // Calculate total marks for percentage calculation
  let total = 0;
  for (let i = 0; i < chartData.marks.length; i++) {
    total += chartData.marks[i];
    total += chartData.communicationScore[i];
    total += chartData.sportsScore[i];
  }

  // Calculate percentages
  let percentage1 = (chartData.marks.reduce((acc, val) => acc + val, 0) / total) * 100;
  let percentage2 = (chartData.communicationScore.reduce((acc, val) => acc + val, 0) / total) * 100;
  let percentage3 = (chartData.sportsScore.reduce((acc, val) => acc + val, 0) / total) * 100;

  return (
    <>
      <div className='line-chart'>
        <Chart
          type='area'
          width={700}
          height={500}
          series={[
            {
              name: 'marks',
              data: chartData.marks,
            },
            {
              name: 'Communication-score',
              data: chartData.communicationScore,
            },
            {
              name: 'sports-score',
              data: chartData.sportsScore,
            },
          ]}
          options={{
            title: { text: 'Performance' },
            xaxis: {
              title: { text: 'score' },
              categories: chartData.categories,
            },
          }}
        />
      </div>
      <div className='piechart'>
        <Chart
          type='pie'
          width={400}
          height={300}
          series={[percentage1, percentage2, percentage3]}
          options={{
            labels: ['Study', 'Communi', 'Sports'],
          }}
        />
      </div>
    </>
  );
}
