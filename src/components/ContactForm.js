import React, { useState, useRef} from 'react'
import emailjs from '@emailjs/browser';

const Result = () => {
    return(
        <p>Your Message has been sent!</p>
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
          },e.target.reset(
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
            <form ref={form} onSubmit={sendEmail}>
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Contact Form</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className='container'>
                                    <div className='col'>
                                        <span className="input">Name</span>
                                        <span><input type="text" aria-label="First name" className="form-control" placeholder='Juan' name='firstName'/></span>
                                    </div>

                                    <div className='col'>
                                        <span className="input">Surname</span>
                                        <span><input type="text" aria-label="Surname" className="form-control" placeholder='Dela Cruz' name='lastName'/></span>
                                    </div>

                                    <div className='col'>
                                        <span className="input">Mobile Number</span>
                                        <span><input type="number" aria-label="Surname" className="form-control" placeholder='091234578' name='phone'/></span>
                                    </div>

                                    <div className='col'>
                                        <span className="input">Email</span>
                                        <span><input type="email" aria-label="Surname" className="form-control" placeholder='juandc@gmail.com' name='email'/></span>
                                    </div>

                                    <div className='col'>
                                        <span className="input">Your Message</span>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='message'></textarea>
                                    </div>

                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary" onSubmit={sendEmail}>Submit</button>
                                <div className='row'>{result ? <Result /> : null }</div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default ContactForm