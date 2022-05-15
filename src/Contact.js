import React from 'react';
import './App.css';
import arm from './pics/arm.png';

function Contact() {
    return (
        <section className='contact'>
            <div className='container container-contact'>
            <div className='container container-vert'>
                <h1>If you have any of these symptoms, please seek help immediately</h1>
                <p className='highlight-orange'>Emergency number (Thailand)</p>
                <p>1669</p>
                <p className='highlight-orange'>ศูนย์โรคหัวใจและหลอดเลือด รพ.จุฬาภรณ์ Heart Hotline</p>
                <p>(+66)6 4585 5197</p>
            </div>
            <img className='arm-img' src={arm} alt='arm'/>
            </div>
        </section>
    )
}

export default Contact;