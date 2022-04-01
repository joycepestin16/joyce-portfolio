import React from 'react'
import '../styles/Hero.css'
import Typewriter from 'typewriter-effect';
import {useState} from 'react';

const Hero = () => {

    const [state] = useState({
        title: "Hi I'm, ",
        title1: "Joyce Ann",
        title2: "Pestin",
    })
    

    return (
        <div className='container'>
            <div className="row">
                <div className="col name-heading">
                    <h1>
                        <div className='title'>{state.title}</div>
                        <div className='title1'>{state.title1}</div>
                        <div className='title2'>{state.title2}</div>
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
                        }}/>
                    </div>
                   {/*  <h1>Hello I'm,</h1>
                    <h1>Joyce Pestin</h1> */}
                </div>
                <div className="col description-heading">
                    <h2 className='description'>A senior-year IT student aspiring to be a full-stack developer.
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Hero