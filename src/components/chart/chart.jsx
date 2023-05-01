import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
const LineChart = (props) => {
    const [orders,setorder] = useState([]);
    useEffect(()=>{
        setorder(props.revenue)
    },[props])
    console.log(orders);
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'],
        datasets: [
            {
                label: 'Doanh thu theo tháng',
                data:orders,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 259, 64, 0.2)',
                    'rgba(255, 459, 64, 0.2)',
                    'rgba(255, 359, 64, 0.2)',
                    'rgba(255, 559, 64, 0.2)',
                    'rgba(255, 759, 64, 0.2)',
                    'rgba(255, 659, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 259, 64, 0.2)',
                    'rgba(255, 459, 64, 0.2)',
                    'rgba(255, 359, 64, 0.2)',
                    'rgba(255, 559, 64, 0.2)',
                    'rgba(255, 759, 64, 0.2)',
                    'rgba(255, 659, 64, 0.2)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1,
            },
        ],
    };
    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };
  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
}

export default LineChart;
