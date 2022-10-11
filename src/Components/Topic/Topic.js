import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css';

const Topic = (props) => {

    const onID = (id) => {
        // console.log(id);
    }
    // console.log(props)
    const { topic } = props;
    return (
        <div>
            <div className="topic">
                <img src={topic.logo} alt="" />
                <div className="tipic-detail">
                    <div>
                        <h3>{topic.name}</h3>
                        <p><small>Total Quiz :{topic.total}</small></p>
                    </div>
                    <button onClick={() => onID(topic.id)} ><Link to={`/quize/${topic.id}`}>Start Quiz</Link ></button>
                </div>
            </div>
        </div>
    );
};

export default Topic;