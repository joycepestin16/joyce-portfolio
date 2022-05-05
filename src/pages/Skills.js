import React from "react";
import "../styles/Skills.css"
import Line from '../components/Line'
import { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css"
import ScrollToTop from "react-scroll-to-top";


const Skills = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <>
            <div className="container">
            <ScrollToTop smooth />
                <div className="row">
                    <div className="col">
                        <h6 className="skills-title offset-sm-1">Skills</h6>
                    </div>

                </div>

                <div className="d-flex justify-content-around offset-1 skills-wrapper">
                    <div className="skills-icon" data-aos="zoom-in-right">
                        <img className="img-fluid icons" src={require('../img/html.png')} alt="html icon" />
                        
                    </div>
                    <div className="skills-icon" data-aos="zoom-in-right">
                        <img className="img-fluid icons" src={require('../img/css-3.png')} alt="html icon"  />
                    </div>
                    <div className="skills-icon" data-aos="zoom-in-right">
                        <img className="img-fluid icons" src={require('../img/bootstrap.png')} alt="bootstrap icon" />
                    </div>
                    <div className="skills-icon" data-aos="zoom-in-right">
                        <img className="img-fluid icons" src={require('../img/java-script.png')}alt="javascript icon"  />
                    </div>
                    <div className="skills-icon" data-aos="zoom-in-right">
                        <img className="img-fluid icons" src={require('../img/react.png')} alt="react icon" />
                    </div>

                </div>

                <div className="row tools-wrapper">
                    <div className="col-sm-2 offset-sm-1">
                        <div>
                            <h6  className="skills-title">Tools</h6>
                        </div>
                    </div>

                    <div className="col">
                        <div className="tools-desc">
                            <p>MS Word, PPT, Excel, VSCODE, Eclipse, Intellij, Figma, Canva, Adobe Photoshop, Adobe Illustrator, Adobe XD, Adobe Indesign.</p>
                        </div>
                    </div>


                </div>
                <Line/>
            </div>
            
        </>
    )
}

export default Skills;