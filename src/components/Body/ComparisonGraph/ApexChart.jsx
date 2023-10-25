import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = (props) => {
    const newPercentile = props.percentile
    const [series, setSeries] = useState([{
        name: 'Percentile',
        data: [4, newPercentile, 5, 58, 25, 34]
    }]);
    
    const [options] = useState({
        chart: {
            height: 350,
            type: 'line',
        },
        forecastDataPoints: {
            count: 7
        },
        stroke: {
            width: 5,
            curve: 'smooth'
        },
        xaxis: {
            categories: ['0%', '20%', '40%', '60%', '80%', '100%'],
        },
        title: {
            text: '',
            align: 'left',
            style: {
                fontSize: "16px",
                color: '#666'
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                gradientToColors: ['#FDD835'],
                shadeIntensity: 1,
                type: 'horizontal',
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100]
            },
        },
        yaxis: {
            min: 0,
            max: 100
        }
    });

    return (
        <div id="chart">
            <ReactApexChart options={options} series={series} type="line" height={350} />
        </div>
    );
};

export default ApexChart;
