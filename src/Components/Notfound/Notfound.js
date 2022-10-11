import React from 'react';
import './Notfound.css'
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div className='notfound'>
            <div className='details'>
                <h1>404 Not Found</h1>
                <p>Click Here For <Link to="/">Back</Link></p>
            </div>
        </div>
    );
};

export default Notfound;