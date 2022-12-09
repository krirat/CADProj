import React from 'react';
import '../App.css';
import arm from '../pics/arm.png';

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
                    <p className='highlight-orange'>ศูนย์หัวใจ หลอดเลือด และเมแทบอลิซึม รพ.รามาธิบดี</p>
                    <p>(+66)2 201 2211</p>
                </div>
                <div style={{position:'relative'}}>
                    <img className='arm-img' src={arm} alt='arm'/>
                    <div className='circle orange' style={{position:'absolute',bottom:'130px',left:'25px',width:'60px',height:'60px'}}></div>
                    {/* <div className='semicircle green' style={{position:'absolute',bottom:'-140px',right:'-160px',width:'150px',height:'300px'}}></div> */}
                </div>
            </div>
        </section>
    )
}

export default Contact;