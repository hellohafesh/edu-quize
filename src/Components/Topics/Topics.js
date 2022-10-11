import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './Topics.css';

const Topics = () => {
    const allTopics = useLoaderData();

    const topicArray = Object.entries(allTopics);
    const mainTopicArray = topicArray[1];
    const topics = mainTopicArray[1];
    console.log(topics);


    return (
        <div>
            <div className="topics-header">
                <h1>Hey,</h1>
                <h1>Wellcome Again .</h1>
                <h5>You Also Can Participate In Our Quize From These Option's.</h5>
            </div>
            <div className="topics">

                <div className="tii">
                    {topics.map(topic => <div className="ti">
                        <h3>Quize Name:{topic.name}</h3>
                        <h5>Total Quize:{topic.total}</h5>
                        <button className='btn-topic'><Link to={`/quize/${topic.id}`}>Start Quiz</ Link></button>
                    </div>)}
                </div>

            </div>
        </div>
    );
};

export default Topics;