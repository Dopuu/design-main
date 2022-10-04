import React from 'react'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js'


ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)
const Graph = () => {
    const data = {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        datasets: [{
            data: [1, 8, 3, 4, 3, 6, 4, 8, 7],
            backgroundColor: 'transparent',
            borderColor: 'black',
            tension: 0.5
        }]
    }
    const options = {
        plugins: {
            legend: false
        },
        scales: {
            y: {
                display: false,
                ticks: {
                    stepSize: 1
                },
                grid: {
                    display: false
                },
            },
        }
    }
    return (
        <div className='desktop3:w-[600px] h-[200px]'>
            <Line data={data} options={options}></Line>
        </div>
    )
}

export default Graph