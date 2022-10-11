import React from 'react';
import './Questions.css';


const Questions = (props) => {
    const tagQuestion = props.allQuestion.question;
    const question = tagQuestion.slice(3, -4);
    const options = props.allQuestion.options;


    console.log(options);
    return (
        <div className='allquestion'>
            <div>
                <ol type='1'>
                    <li>{question}</li>
                </ol>
            </div>
            <div>
                {
                    // { topics.map(topic => <Topic key={topics.id} topic={topic}></Topic>) }
                    options.map(option => <ul><li>{option}</li></ul>)
                }
            </div>


        </div>

    );
};

export default Questions;