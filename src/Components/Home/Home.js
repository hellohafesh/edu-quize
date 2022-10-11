import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Home.css';
import Header from '../Header/Header';

const Home = (props) => {
    const allTopics = useLoaderData();

    const topicArray = Object.entries(allTopics);
    const mainTopicArray = topicArray[1];
    const topics = mainTopicArray[1];


    return (
        <div>
            <Header></Header>

            <div className="topics">
                {topics.map(topic => <Topic key={topics.id} topic={topic}></Topic>)}
            </div>

        </div>
    );
};

export default Home;