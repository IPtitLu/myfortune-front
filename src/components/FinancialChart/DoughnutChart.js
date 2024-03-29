import React from 'react';
import { Doughnut } from 'react-chartjs-2';

class DoughnutChart extends React.Component {
  render() {
    const data = {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }
      ]
    };

    return (
      <div>
        <h2>Doughnut Chart </h2>
        <Doughnut data={data} />
      </div>
    );
  }
}

export default DoughnutChart;
