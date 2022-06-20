import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "../styles/newsletter.css"

const Newsletter = () => {
    return (
        <div className='new-container'>
            <div className='new-row'>
                <div className='new-col'>
                    <h2 className='new-title'>Stay In the Loop</h2>
                    <p className='new-desc'>subscribe</p>
                    <div className='input-container'>
                        <input type='text' placeholder='Enter your email' />
                        <button><FontAwesomeIcon icon={faPaperPlane} /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;