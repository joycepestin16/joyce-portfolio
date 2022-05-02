import React, { useState } from 'react'
import {
    Modal,
    Button,
    Carousel,
    ModalBody
}
    from 'react-bootstrap';

import '../styles/ModalCard.css'
const ModalCard = ({ title, description, tools, imgProj }) => {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)


    return (
        <div className='container'>

            <div className='button-wrapper'>
                <Button
                    variant="light"
                    onClick={handleShow}
                    className="btn launch-button">
                    Launch Project
                </Button>
            </div>




            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='proj-title'>{title}</Modal.Title>
                </Modal.Header>
                <div className='project-picture'>
                    <img
                        src={imgProj}
                        className="img-fluid img-project" 
                        alt="image projects" />
                </div>
                <div className='content'>
                    <Modal.Body className='title-description'>
                        <span className='heading'>Title: </span>
                        {description}
                    </Modal.Body>
                    <Modal.Body className='title-description'>
                        <span className='heading'>Tools: </span>
                        {tools}
                    </Modal.Body>
                </div>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button> */}
                </Modal.Footer>
            </Modal>
        </div>


    )
}

export default ModalCard