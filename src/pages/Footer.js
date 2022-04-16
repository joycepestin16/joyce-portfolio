import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MdTrendingFlat } from "react-icons/md";
import { Icon } from '@mui/material';
import { IconContext } from 'react-icons';


const Footer = () => {
  return (
    <IconContext.Provider value={{ size: "2em" }}>
      <>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div>
                <h4>I am thrilled to work with you</h4>
                <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <MdTrendingFlat />
                </button>
              </div>
            </div>
            <div className='col'></div>

          </div>
        </div>
      </>
    </IconContext.Provider>
  )
}

export default Footer