import React from 'react';
import './Topic.css';

const Topic = (props) => {
    // console.log(props)
    const { topic } = props;
    return (
        <div>
            <div className="topic">
                <img src={topic.logo} alt="" />
                <div className="tipic-detail">
                    <h2>{topic.name}</h2>
                    <button>Start Quiz</button>
                </div>
            </div>
        </div>
    );
};

export default Topic;