import React from 'react'
import '../styles/About.css'
import Education from './Education'
import LineWithTitle from '../components/LineWithTitle';




const About = () => {
    return (
        <>
            <div className='container about-wrapper' id='about'>
                <div className='container' >
                    <div className='row justify-content-center'>
                        <div className='col-sm'>
                            <div className='inner-content'>
                                <h1 data-aos="slide-left">I'm Joyce Ann Pestin</h1>
                                <h2 data-aos="slide-left">An Aspiring Front End or Full-Stack Developer.</h2>
                                <p className='work-paragraph' data-aos="slide-up">
                                    My work is mainly focused on creating and developing websites and mobile application. 
                                    I like creating simple and classy websites, i also like creating pubmats, exploring different colors and also giving importance to the user experience before deploying it to the cloud.</p>

                            </div>
                        </div>

                        <div className='col-sm d-flex justify-content-center img-gradpic'>
                            <div className='inner-content'>
                                <img 
                                src={require('../img/joyce-gradpic.jpg')} 
                                className="img-fluid col-sm joyce-pic" 
                                data-aos="slide-right"/>

                            </div>

                        </div>
                    </div>
                    <Education />
                </div>


               

            </div>

        </>
    )
}

export default About