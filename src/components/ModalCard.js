import React, { useState } from 'react'
import {
    Modal,
    Button,
}
    from 'react-bootstrap';
import ModalData from '../data/ModalData'
import { projects } from '../data/ModalData';

const ModalCard = ({ title, description, tools }) => {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    return (
        <div>

            <Button
                variant="light"
                onClick={handleShow}
                style={{
                    alignItems: 'center',
                    marginTop: '3rem'
                }}>
                Launch Project
            </Button>
            <div data-aos="fade-up" data-aos-duration="3000">


                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{description}</Modal.Body>
                    <Modal.Body>{tools}</Modal.Body>
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

        </div>
    )
}

export default ModalCard