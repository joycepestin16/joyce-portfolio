import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MdTrendingFlat } from "react-icons/md";
import { Button } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import CV from '../files/PESTIN_JOYCEANN_V_RESUME.pdf';


const Footer = () => {
  return (
    <IconContext.Provider value={{ size: "2em" }}>
      <>
        <div className='container justify-content-center'>
          <div className='row'>
            <div className='col'>
              <div>
                <h4>I am thrilled to work with you</h4>
                <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <MdTrendingFlat />
                </button>
              </div>
            </div>
            <div className='col'>
              <h4>joycepestin@gmail.com</h4>
              <Button 
              variant="light"
              className='btn-download'
              href={CV}
              download="PESTIN_JOYCEANN_V_RESUME.pdf">
                view my resume</Button>{' '}
            </div>
          </div>

          <footer>
            <h6>Joyce Ann Pestin</h6>
          </footer>
        </div>
      </>
    </IconContext.Provider>
  )
}

export default Footer