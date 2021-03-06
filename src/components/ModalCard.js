import React, { useState } from 'react'
import {
    Modal,
    Button,
    Carousel,
    ModalBody
}
    from 'react-bootstrap';

import { projects } from '../data/ModalData';
import '../assets/furcare1.png';
import '../assets/furcare2.png'
import '../styles/ModalCard.css'
const ModalCard = ({ title, description, tools, imgProj, bg }) => {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)


    return (
        <div className='container'>

            <div className='button-wrapper'>
                <Button
                    variant="light"
                    onClick={handleShow}
                    className="btn btn-sm launch-button">
                    Launch Project
                </Button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='proj-title'>{title}</Modal.Title>
                </Modal.Header>



                {/* <div className='project-picture'>
                    <img
                        src={imgProj}
                        className="img-fluid img-project" 
                        alt="image projects" />
                </div> */}
                <div className='content'>
                    <Modal.Body className='title-description'>
                        <Carousel
                            fade
                            controls={true}
                            indicators={true}
                            prevLabel=""
                            nextLabel=""
                            pause={"hover"}
                        >
                            {imgProj.map(img => {
                                console.log(img)
                                return (
                                    <Carousel.Item>
                                        <img
                                            className="img-fluid d-block w-100 img-proj"
                                            src={img}
                                            alt="slide"
                                        />
                                    </Carousel.Item>
                                )
                            })}


                        </Carousel>
                        <div className='description-wrapper'>
                            <div className='col heading'>
                                <span className='label-title'>Title: </span>
                                {description}
                            </div>


                            <div className='col heading'>
                                <span className='label-title'>Tools: </span>
                                {tools}
                            </div>
                        </div>

                    </Modal.Body>

                </div>

                <Modal.Footer>
                    <Button className="close-btn"variant="secondary" onClick={handleClose}>
                        <span className="text">Close</span><span>Close</span>
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>


    )
}

export default ModalCard