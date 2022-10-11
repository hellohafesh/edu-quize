import React from 'react';
import './Questions.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';


const Questions = (props) => {
    const tagQuestion = props.allQuestion.question;
    const question = tagQuestion.slice(3, -4);
    const options = props.allQuestion.options;

    return (
        <div className='allquestion'>
            <div className='questions'>
                <ul>
                    <li><h4>{question}</h4></li>
                </ul>
                <button><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></button>
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