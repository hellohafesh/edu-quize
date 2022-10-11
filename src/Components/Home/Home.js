import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Home.css';

const Home = (props) => {
    const allTopics = useLoaderData();

    const topicArray = Object.entries(allTopics);
    const mainTopicArray = topicArray[1];
    const topics = mainTopicArray[1];


    return (
        <div>
            <div className='home-details'>
                <h1>Edu Quizz For You </h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, mollitia. Facilis sit poro natus dolorem expedita rerum esse laboriosam, !</p>
            </div>

            <div className="topics">


                {topics.map(topic => <Topic key={topics.id} topic={topic}></Topic>)}


                {/* 
                
                <div className="topic">
                    <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg" alt="" />
                    <div className="tipic-detail">
                        <h2>React</h2>
                        <button>Start Quiz</button>
                    </div>
                </div>
                <div className="topic">
                    <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg" alt="" />
                    <div className="tipic-detail">
                        <h2>React</h2>
                        <button>Start Quiz</button>
                    </div>
                </div> */}
            </div>

        </div>
    );
};

export default Home;