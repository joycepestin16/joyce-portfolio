import React from 'react'
import '../styles/Hero.css'
import Typewriter from 'typewriter-effect';
import { useState } from 'react';
import LineWithTitle from '../components/LineWithTitle';
import Line from '../components/Line';
import '../img/bg.jpg';


const Hero = () => {

    const [state] = useState({
        title: "Hi I'm, ",
        title1: "Joyce Ann",
        title2: "Pestin",
    })


    return (
        <div className="bg-wrapper">
            <div className='container hero-wrapper' id="#hero">
                <div className="row">
                    <div className="col name-heading">
                        <h1 className='joyce-title'>
                            <div className='heading-title1'>{state.title}</div>
                            <div className='heading-title2'>{state.title1}</div>
                            <div className='heading-title3'>{state.title2}</div>
                        </h1>
                        <div className='text'>
                            <Typewriter options={{
                                autoStart: true,
                                loop: true,
                                delay: 40,
                                strings: [
                                    "A 4th year student from",
                                    "The University of Santo Tomas"
                                ]
                            }} />
                        </div>

                    </div>
                    <div className="col description-heading">
                        <h2 className='description'>A senior-year IT student aspiring to be a full-stack developer.
                        </h2>
                    </div>
                </div>

            </div>
           
        </div>
       

    )
}

export default Hero