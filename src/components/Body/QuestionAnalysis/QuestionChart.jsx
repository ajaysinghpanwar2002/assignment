import React, { useEffect } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const QuestionChart = (props) => {
    useEffect(() => {
        const currentScore = props.currentScore ;
        const options = {
            animationEnabled: true,
            title: {
            },
            subtitles: [{
                text: `${currentScore}/15`,
                verticalAlign: "center",
                fontSize: 24,
                dockInsidePlotArea: true
            }],
            data: [{
                type: "doughnut",
                showInLegend: true,
                yValueFormatString: "#,###'%'",
                dataPoints: [
                    { name: "correct", y: (currentScore/15)*100 },
                    { name: "incorrect", y: ((15-currentScore)/15)*100 },
                ]
            }
            ]
        };
        const chart = new CanvasJS.Chart("questionChart", options);
        chart.render();

        // Clean up the chart when the component unmounts
        return () => chart.destroy();
    }, [props.currentScore]);

    return (
        <div id="questionChart" style={{height:"250px"}}></div>
    );
}

export default QuestionChart;
