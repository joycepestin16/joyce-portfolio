import React from 'react'
import '../styles/About.css'
import Education from './Education'
import LineWithTitle from '../components/LineWithTitle';




const About = () => {
    return (
        <>
            <div className='about-wrapper'>
                <div className='container' id="about">
                    <div className='row justify-content-center'>
                        <div className='col-sm'>
                            <div className='inner-content'>
                                <h1>I'm Joyce Ann Pestin</h1>
                                <h2>An Aspiring Full-Stack Developer.</h2>
                                <p className='work-paragraph'>My work is mainly focused on creating and developing websites and mobile application. I like creating elegant and classy websites, exploring different colors and etc.</p>

                            </div>
                        </div>

                        <div className='col-sm d-flex justify-content-center img-gradpic'>
                            <div className='inner-content'>
                                <img src={require('../img/joyce-gradpic.jpg')} className="img-fluid col-sm" />

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