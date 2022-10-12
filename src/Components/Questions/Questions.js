
import './Questions.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Questions = (props) => {
    const tagQuestion = props.allQuestion.question;
    const question = tagQuestion.slice(3, -4);
    const options = props.allQuestion.options;

    const notify = () => toast(<p>Correce ANswer: <b>{props.allQuestion.correctAnswer} </b></p>);

    const handleChange = (event) => {
        const ans = event.target.value;
        if (ans === props.allQuestion.correctAnswer) {
            toast(<h3>Correct Answer</h3>);

        } else {
            toast(<div>
                <h6>Wrong Answer</h6> <br />
                <p>Crrecet Answer:<h5>{props.allQuestion.correctAnswer}</h5> </p>
            </div>);
        };

    }
    return (
        <div className='allquestion'>
            <div className='questions'>
                <ul>
                    <li><h4>{question}</h4></li>
                </ul>
                <button onClick={notify} ><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></button>
            </div>
            <div className='allOptions'>
                {
                    options.map(option =>
                        <label>
                            <div className='options'>
                                <div className='option'>
                                    <div>
                                        <input type="radio" value={option} name={option}
                                            onChange={handleChange}
                                        />
                                        {option}</div>

                                </div>
                            </div>
                        </label>

                    )
                }
                <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>

        </div>

    );
};

export default Questions;