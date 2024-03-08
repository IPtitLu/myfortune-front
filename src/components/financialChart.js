import React, { useState } from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Chart }            from 'react-chartjs-2';
import { Doughnut,  Line } from 'react-chartjs-2';

import LineChart from './FinancialChart/LineChart';
import DoughnutChart from './FinancialChart/DoughnutChart';
import VerticalBarChart from './FinancialChart/VerticalBarChart';

const FinancialChart = () => {
  const [cryptoData, setCryptoData] = useState({
    btc: 200,
    eth: 200,
    sol: 200,
  });

  const [chartData, setChartData] = useState({
    labels: ['BTC', 'ETH', 'SOL'],
    datasets: [
      {
        data: [cryptoData.btc, cryptoData.eth, cryptoData.sol],
        backgroundColor: ['#3DA9FC', 'rgba(54, 162, 235, 0.6)', '#31e880'],
        borderWidth: 4,
      },
    ],
  });

  const [totalChartData, setTotalChartData] = useState({
    labels: ['2022-02-01', '2022-02-02', '2022-02-03'],
    datasets: [
      {
        label: 'Total Wealth',
        data: [50, 75, 100],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  });

  const handleInputChange = (crypto, value) => {
    setCryptoData((prevData) => ({
      ...prevData,
      [crypto]: parseFloat(value) || 0,
    }));

    setChartData((prevChartData) => ({
      ...prevChartData,
      datasets: [
        {
          ...prevChartData.datasets[0],
          data: [cryptoData.btc, cryptoData.eth, cryptoData.sol],
        },
      ],
    }));

    setTotalChartData((prevTotalChartData) => ({
      ...prevTotalChartData,
      datasets: [
        {
          ...prevTotalChartData.datasets[0],
          data: [
            prevTotalChartData.datasets[0].data[0] + cryptoData.btc,
            prevTotalChartData.datasets[0].data[1] + cryptoData.eth,
            prevTotalChartData.datasets[0].data[2] + cryptoData.sol,
          ],
        },
      ],
    }));
  };

  return (
    <div style={{display: 'flex', flexDirection:'row', justifyContent: 'space-between', width: '100%', marginTop: '2Rem', alignItems: 'center'}}>
          <LineChart />
          <DoughnutChart />
          <VerticalBarChart />
    </div>
  );
};

export default FinancialChart;