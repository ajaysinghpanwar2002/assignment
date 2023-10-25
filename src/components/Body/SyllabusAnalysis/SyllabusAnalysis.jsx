// SyllabusAnalysis.jsx
import React from 'react';
import './SyllabusAnalysis.css';
import ProgressBar from "@ramonak/react-progress-bar";

function SyllabusProgressBar({ heading, completed, bgColor }) {
    return (
        <div className='Syllabus-wise-body-cards'>
            <div className='Syllabus-wise-body-cards-heading'>{heading}</div>
            <ProgressBar
                completed={completed}
                bgColor={bgColor}
                height="10px"
                labelAlignment="outside"
                baseBgColor="#ecf3fe"
                labelColor={bgColor}
                transitionDuration=""
                animateOnRender
                maxCompleted={100}
                customLabel={`${completed}%`}
            />
        </div>
    );
}

function SyllabusAnalysis() {
    return (
        <div>
            <div className='Syllabus-wise-body-main'>
                <div className='Syllabus-wise-body'>
                    <div>
                        <div className='Syllabus-wise-body-text'>Syllabus wise Analysis</div>
                        <SyllabusProgressBar heading='HTML Tools, Forms, History' completed={80} bgColor="#438AF6" />
                        <SyllabusProgressBar heading='Tags & References in HTML' completed={60} bgColor="#FF9142" />
                        <SyllabusProgressBar heading='Tables & CSS Basics' completed={24} bgColor="#FB5E5E" />
                        <SyllabusProgressBar heading='Tables & CSS Basics' completed={96} bgColor="#2EC971" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SyllabusAnalysis;
