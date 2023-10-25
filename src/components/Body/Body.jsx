import React from 'react'
import './Body.css'
import { HtmlHeader, QuickStats, ComparisonGraph, SyllabusAnalysis, QuestionAnalysis } from './index'

function Body() {
    return (
        <div className='Body-page-main'>
            <div className='Body-main-leftside'>
                <div className='Body-heading'>Skill Test</div>
                <div className='Body-Main-Html-Header'>
                    <HtmlHeader />
                </div>
                <div className='Body-Main-Quick-Stats'>
                    <QuickStats />
                </div>
                <div className='Body-Main-Comparison-Graphs'>
                    <ComparisonGraph />
                </div>
            </div>
            <div className="Body-main-rightside">
                <div className='Body-Main-syllabus-wise-analysis'>
                    <SyllabusAnalysis />
                </div>
                <div className='Body-Main-question-wise-analysis'>
                    <QuestionAnalysis />
                </div>
            </div>
        </div>
    )
}

export default Body