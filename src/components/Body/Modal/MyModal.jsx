import React, { useState } from 'react';
import Modal from 'react-modal';
import Button from '../Button/Button';
import './MyModal.css';
import { HtmlIcon } from './images';

//redux
import { Update } from '../../../redux/features/score-slice';
import { useDispatch } from "react-redux";

const customStyles = {
    content: {
        width: '50%',
        height: '300px',
        margin: 'auto',
        zIndex: 9999,
    },
};

function MyModalContent(props) {
    const [rank, setRank] = useState("");
    const [percentile, setPercentile] = useState("");
    const [currentScore, setCurrentScore] = useState("");

    //redux
    const dispatch = useDispatch();

    const handleRankChange = (event) => {
        setRank(event.target.value);
    };

    const handlePercentileChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (value >= 0 && value <= 100) {
            setPercentile(value);
        }
    };

    const handleCurrentScoreChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (value >= 0 && value <= 15) {
            setCurrentScore(value);
        }
    };

    const handleSubmit = () => {
        if (rank && percentile >= 0 && percentile <= 100 && currentScore >= 0 && currentScore <= 15) {
            dispatch(Update({ rank, percentile, current_score: currentScore }));
            props.onClose();
        } else {
            alert("invalid input")
        }
    };

    return (
        <div>
            <div className='MyModal-First-div'>
                <h2>{props.title}</h2>
                <img src={HtmlIcon} alt='html' />
            </div>
            <div className='MyModal-Horizontal-line'></div>
            <div>
                <RankInput handleRankChange={handleRankChange} />
                <PercentileInput handlePercentileChange={handlePercentileChange} />
                <CurrentScoreInput handleCurrentScoreChange={handleCurrentScoreChange} />
            </div>
            <div className='MyModal-Horizontal-line'></div>
            <div className='MyModal-Horizontal-Button-parent'>
                <button onClick={props.onClose} className='MyModal-Horizontal-Button-cancel'>Cancel</button>
                <Button onClick={handleSubmit} text="Save →"></Button>
            </div>
        </div>
    );
}

function RankInput({ handleRankChange }) {
    return (
        <div className='MYModal-Content-cards'>
            <div className='MYModal-Content-cards-first'>
                <div className="circular-element">1</div>
                <div className='MYModal-Content-cards-text'>Update your rank</div>
            </div>
            <input className="input-style" type="number" onChange={handleRankChange} />
        </div>
    );
}

function PercentileInput({ handlePercentileChange }) {
    return (
        <div className='MYModal-Content-cards'>
            <div className='MYModal-Content-cards-first'>
                <div className="circular-element">2</div>
                <div className='MYModal-Content-cards-text'>Update your Percentile</div>
            </div>
            <input className="input-style" type="number" onChange={handlePercentileChange} />
        </div>
    );
}

function CurrentScoreInput({ handleCurrentScoreChange }) {
    return (
        <div className='MYModal-Content-cards'>
            <div className='MYModal-Content-cards-first'>
                <div className="circular-element">3</div>
                <div className='MYModal-Content-cards-text'>Update your current score (out of 15)</div>
            </div>
            <input className="input-style" type="number" onChange={handleCurrentScoreChange} />
        </div>
    );
}

// The rest of the code remains the same

function MyModal() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <Button text="Update" onClick={openModal}></Button>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                style={customStyles}
            >
                <MyModalContent
                    title="Update Scores"
                    content="This is the content of my modal."
                    onClose={closeModal}
                />
            </Modal>
        </div>
    );
}

export default MyModal;