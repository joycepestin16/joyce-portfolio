
import React from 'react'
import ModalCard from '../components/ModalCard'
import { projects } from '../data/ModalData'
import '../styles/Work.css'
import Line from '../components/Line'
import { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css"
import LineWithTitle from '../components/LineWithTitle.js'
import { red } from '@mui/material/colors'



const Work = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <div className=''>
            <div className='container work-wrapper' id='work'>
                <LineWithTitle title="WORKS" />
                {
                    projects.map((project, index) => (
                        <>
                            <div className='row d-flex flex-row'>

                                <div className="col">
                                    <h6>0{index + 1}/{project.title}</h6>

                                    <p>{project.description}</p>

                                    <p className='tools-text'>{project.tools}</p>
                                </div>
                                <div className='col' data-aos="slide-right">
                                    <div className='wrapper-modal' style={{backgroundColor: project.bgColor}}>
                                        <img className='img-fluid cover-photo' src={project.bg} ></img>

                                        <ModalCard
                                            className="modal-card"
                                            imgProj={project.imgProj}
                                            title={project.title}
                                            description={project.description}
                                            tools={project.tools}

                                        />

                                    </div>


                                </div>
                            </div>
                            <Line />

                        </>

                    ))
                }



            </div>
        </div>

    )
}

export default Work