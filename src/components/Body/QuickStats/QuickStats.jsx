import React from 'react';
import './QuickStats.css';
import { TrophyIcon, PercentileIcon, CorrectIcon } from './images'

import { useSelector } from "react-redux";

function StatCard({ icon, topText, bottomText }) {
    return (
        <div className="QuickStats-body-items">
            <img src={icon} alt={bottomText} />
            <div className="QuickStats-body-items-text">
                <div className="QuickStats-body-items-text-top">{topText}</div>
                <div className="QuickStats-body-items-text-bottom">{bottomText}</div>
            </div>
        </div>
    );
}

function QuickStats() {
    const data = useSelector((state) => state.scoreReducer.value);

    return (
        <div>
            <div className="QuickStats-body-main">
                <div className="QuickStats-body">
                    <div className="QuickStats-body-heading">Quick Statistics</div>
                    <div className="QuickStats-body-cards">
                        <StatCard icon={TrophyIcon} topText={data.rank} bottomText="Your Rank" />
                        <div className="horizontal-line"></div>
                        <StatCard icon={PercentileIcon} topText={data.percentile} bottomText="percentile" />
                        <div className="horizontal-line"></div>
                        <StatCard icon={CorrectIcon} topText={`${data.current_score} / 15`} bottomText="Correct answers" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuickStats;
