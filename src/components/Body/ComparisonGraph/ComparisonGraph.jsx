import React from 'react'
import './ComparisonGraph.css'
import ApexChart from './ApexChart.jsx'
import { useSelector } from "react-redux"
import { ComparisonGraphIcon } from './images'

function ComparisonGraph() {
    const { percentile } = useSelector((state) => state.scoreReducer.value);

    return (
        <div>
            <div className='ComparisonGraphs-body-main'>
                <div className='ComparisonGraphs-body'>
                    <div className='ComparisonGraphs-body-text'>
                        <div>
                            <div className='ComparisonGraphs-body-text-heading'>Comparison Graph</div>
                            <div className='ComparisonGraphs-body-text-subheading'><span>You scored {percentile} percentile</span> which is lower than the <br /> average percentile 72% of all the engineers who took this assessment</div>
                        </div>
                        <img src={ComparisonGraphIcon} alt='graph' />
                    </div>
                    <ApexChart percentile={percentile}/>
                </div>
            </div>
        </div>
    )
}

export default ComparisonGraph