import React from 'react'
import '../styles/About.css'

const About = () => {
    return (
        <>
            <div className='container' id="about">
                <div className='row'>
                    <div className='col-lg'>
                        <h1>I'm Joyce Ann Pestin</h1>
                        <h2>An Aspiring Full-Stack Developer.</h2>
                        <p className='work-paragraph'>My work is mainly focused on creating and developing websites and mobile application. I like creating elegant and classy websites, exploring different colors and etc.</p>

                    </div>

                    <div className='col-lg'>
                        <img src={require('../img/joyce-gradpic.jpg')} />
                    </div>

                </div>


                <div class="row">
                    <div class="col-lg education-wrapper">
                        <div class="education-1">
                            <h5>Education</h5>
                        </div>
                    </div>
                    <div class="col-lg education-wrapper">
                        <div class="education-1">
                            <h6>University of Santo Tomas | 2018 - 2022</h6>
                            BS Information Technology
                        </div>
                        <div class="education-2">
                            <h6>University of Santo Tomas | 2016 - 2018</h6>
                            SHS - Music, Arts and Design Track

                        </div>
                        <div class="education-3">
                            <h6>Ramon Magsaysay High School | 2012 - 2016</h6>
                            Junior High School
                        </div>

                    </div>

                </div>

                <div class="row">
                    <div class="col-lg education-wrapper">
                        <div class="education-1">
                            <h5>Organizations</h5>
                        </div>
                    </div>
                    <div class="col-lg education-wrapper">
                        <div class="education-1">
                            <h6>UST Cisco Gateway Academy - CICS | 2020 - 2021</h6>
                            Vice President for Audit and Logistics
                        </div>
                        <div class="education-2">
                            <h6>UST Cisco Gateway Academy - CICS | 2019 - 2020</h6>
                            Vice President for Creatives

                        </div>
                        <div class="education-2">
                            <h6>UST Cisco Gateway Academy - CICS | 2020 - 2021</h6>
                            Executive Associate

                        </div>
                        <div class="education-3">
                            <h6>Becarios de  Santo Tomas | 2018-2022</h6>
                            Executive Associate
                        </div>

                    </div>

                </div>


            </div>

        </>
    )
}

export default About