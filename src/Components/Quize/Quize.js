import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';
import './Quize.css';

const Quize = (props) => {
    const quizes = useLoaderData();
    const allQuestions = quizes.data.questions;
    // console.log(allQuestions);

    return (
        <div className='quizes'>
            <div>
                <div className='quize-details'>
                    <div>
                        <h1>Quize Of: {quizes.data.name} </h1>
                        <h4>Total Quize :{quizes.data.total}</h4>
                        <img src={quizes.data.logo} alt="" />
                    </div>
                </div>
                {

                    allQuestions.map(allQuestion => <Questions key={allQuestion.id} allQuestion={allQuestion}></Questions>)
                }
            </div>
        </div>
    );
};

export default Quize;