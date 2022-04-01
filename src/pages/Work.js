import { Modal } from 'bootstrap'
import React from 'react'
import ModalCard from '../components/ModalCard'
import { projects } from '../data/ModalData'
import '../styles/Work.css'
import Line from '../components/Line'


const Work = () => {
    console.log(projects)
    return (
        <div className='container' id='work'>
            {
                projects.map((project, index) => (
                    <>
                        <div className='row d-flex flex-row'>

                            <div className="col">
                                <h6>0{index + 1}/{project.title}</h6>

                                <p>{project.description}</p>

                                <p className='tools-text'>{project.tools}</p>
                            </div>

                            <div className='col'>
                                <div className='wrapper-modal'>
                                    <ModalCard
                                        className="modal-card"
                                        title={project.title}
                                        description={project.description}
                                        tools={project.tools}
                                    />
                                </div>

                            </div>
                            <Line/>



                        </div>

                    </>

                ))
            }



        </div>
    )
}

export default Work