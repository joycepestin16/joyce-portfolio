import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import '../styles/ContactForm.css'

const Result = () => {
    return (
        <p className='alert-message'>Your Message has been sent!</p>
    )
}

function ContactForm() {
    const form = useRef();

    const [result, showResult] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        console.log('hsdfh');
        emailjs.sendForm('service_x7qxdjs', 'template_t6gas59', form.current, '1mwt_YVCrX9_stOxd')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            }, e.target.reset(
                showResult(true)
            ));

    };

    //hide result
    setTimeout(() => {
        showResult(false)
    }, 5000);

    return (
        <>
            {/* <!-- Modal --> */}
            <form ref={form} onSubmit={sendEmail} className="form">
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Contact</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className='container contact-form'>


                                    <div className='row'>
                                        <div className='col'>
                                            <div className="label">Name</div>
                                            <div><input
                                                type="text"
                                                aria-label="First name"
                                                className="form-control"
                                                placeholder='Ex. Juan'
                                                name='firstName'
                                                required
                                            />
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div className="label">Surname</div>
                                            <div><input
                                                type="text"
                                                aria-label="Surname"
                                                className="form-control"
                                                placeholder='Ex. Dela Cruz'
                                                name='lastName'
                                                required
                                            /></div>
                                        </div>
                                    </div>


                                    <div className='col'>
                                        <div className="label">Mobile Number</div>
                                        <div><input
                                            type="number"
                                            aria-label="Surname"
                                            className="form-control"
                                            placeholder='Ex. 091234578'
                                            name='phone'
                                            required
                                            maxLength='11'
                                        /></div>
                                    </div>

                                    <div className='col'>
                                        <div className="label">Email</div>
                                        <div><input
                                            type="email"
                                            aria-label="Surname"
                                            className="form-control"
                                            placeholder='juandc@gmail.com'
                                            name='email'
                                            required
                                        /></div>
                                    </div>

                                    <div className='col'>
                                        <div className="label">Your Message</div>
                                        <textarea
                                            className="form-control"
                                            id="exampleFormControlTextarea1"
                                            rows="3"
                                            name='message'
                                            required
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn contact-btn" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn contact-btn" onSubmit={sendEmail}>Submit</button>
                                <div className='row'>{result ? <Result /> : null}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default ContactForm