import React from "react";
import "../styles/Skills.css"
import Line from '../components/Line'
const Skills = () => {
    return (
        <>
            <div className="container ">
                <div className="row">
                    <div className="col">
                        <h6 className="skills-title">Skills</h6>
                    </div>

                </div>

                <div className="d-flex justify-content-around skills-wrapper">
                    <div className="skills-icon">
                        <img className="icons" src={require('../img/html.png')} />
                        
                    </div>
                    <div className="skills-icon">
                        <img className="icons" src={require('../img/css-3.png')} />
                    </div>
                    <div className="skills-icon">
                        <img className="icons" src={require('../img/bootstrap.png')} />
                    </div>
                    <div className="skills-icon">
                        <img className="icons" src={require('../img/java-script.png')} />
                    </div>
                    <div className="skills-icon">
                        <img className="icons" src={require('../img/react.png')} />
                    </div>

                </div>

                <div className="row tools-wrapper">
                    <div className="col">
                        <div>
                            <h6  className="skills-title">Tools</h6>
                        </div>
                    </div>

                    <div className="col">
                        <div>
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