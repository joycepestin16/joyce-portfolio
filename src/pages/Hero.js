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
            <div className='container' id="#hero">
                <div className="row hero-wrapper">
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
                                    "Born in 2000",
                                    "Manila, Philippines"
                                ]
                            }} />
                        </div>

                    </div>
                    <div className="col description-heading">
                        <h2 className='description'>An aspiring full-stack developer, and continue to explore more
                        </h2>
                    </div>
                </div>

            </div>
           
        </div>
       

    )
}

export default Hero