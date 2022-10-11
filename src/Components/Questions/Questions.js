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
                <ul >
                    <li>{question}</li>
                </ul>
            </div>
            <div className='allOptions'>
                {
                    options.map(option =>

                        <div className='options'>
                            <div className='option'>
                                <div><input type="radio" placeholder={option} value="Female" name="gender" /> {option}</div>
                            </div>

                        </div>

                    )
                }
            </div>


        </div>

    );
};

export default Questions;