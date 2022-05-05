import React from 'react'
import '../styles/Footer.css'
import { MdTrendingFlat } from "react-icons/md";
import { Button } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import CV from '../files/PESTIN_CV.pdf';


const Footer = () => {
  return (
    <IconContext.Provider value={{ size: "2em" }}>
      <>
        <div className='container footer-wrapper' id='contact'>
          <div className='row '>
            <div className='col justify-content-center'>

              <h4 className='d-flex justify-content-center footer-heading' data-aos="slide-down" >I am thrilled to work with you</h4>
              <div className='d-flex justify-content-center '>
                <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <MdTrendingFlat />
                </button>
              </div>


            </div>
            <div className='col justify-content-center'>
              <h4 className='col d-flex justify-content-center footer-heading'  data-aos="slide-down">joycepestin@gmail.com</h4>
              <div className='col d-flex justify-content-center '>
                <Button
                  variant="light"
                  className='btn btn-light'
                  href={CV}
                  download="PESTIN_CV.pdf">
                  view my resume</Button>{' '}
              </div>
            </div>
          </div>

          <footer>
            <div className='row'>
              <div className='col d-flex justify-content-center'>
                <h6 className='d-flex justify-content-sm-center footer'>Joyce Ann Pestin &copy; 2022</h6>
              </div>
              <div className='col d-flex justify-content-center'>
                <a href='https://github.com/joycepestin16' target="_blank" className='links'>
                  <img src={require('../img/github.png')} className='icon' />
                </a>
                <a href='https://www.linkedin.com/in/joyce-ann-pestin-ab2a73220/' target="_blank" className='links'>
                  <img src={require('../img/linkedin.png')} className='icon' />
                </a>
                <a href='https://twitter.com/joycekrungy' target="_blank" className='links'>
                  <img src={require('../img/twitter-sign.png')} className='icon' />
                </a>

                <a href='https://www.instagram.com/joycekrungy/' target="_blank" className='links'>
                  <img src={require('../img/instagram.png')} className='icon' />
                </a>
              </div>
            </div>

          </footer>


        </div>
      </>
    </IconContext.Provider >
  )
}

export default Footer