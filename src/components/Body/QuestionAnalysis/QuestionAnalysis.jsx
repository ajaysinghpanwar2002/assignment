import "./QuestionAnalysis.css"
import QuestionChart from "./QuestionChart"
import { useSelector } from "react-redux"


function QuestionAnalysis() {
    const currentScore = useSelector((state) => state.scoreReducer.value.current_score);

    return (
        <div className="Question-analysis-body-main">
            <div className="Question-analysis-body">
                <div className="Question-analysis-body-heading">
                    <div>Question analysis</div>
                    <div className="Question-analysis-body-heading-score"> {currentScore} / 15</div>
                </div>
                <div className="Question-analysis-body-heading-yes">
                    <span className="Question-analysis-body-heading-subheadingss">You scored {currentScore} question correct out of 15.</span>
                    However it still needs some improvements
                </div>
                <div className="Question-analysis-pie-chart">
                    <QuestionChart currentScore={currentScore} />
                </div>
            </div>
        </div>
    )
}

export default QuestionAnalysis