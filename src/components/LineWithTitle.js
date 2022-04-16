import React from 'react'
import '../styles/LineWithTitle.css'


const LineWithTitle = (props) => {
  return (
    <>
          <div className='container-line'>
            <div className='line'>
              <div className='title'>{props.title}</div>
            </div>
          </div>


      

    </>
  )
}

export default LineWithTitle