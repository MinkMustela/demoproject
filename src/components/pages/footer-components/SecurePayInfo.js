import React from 'react'
import { FaMonero } from 'react-icons/fa';
import {Link} from "react-router-dom"
import PropTypes from "prop-types"

function SecurePayInfo({title, info}) {
  return (
   
    <div className='footer-content-box'>
          <div className='footer-icon'>
          <FaMonero/>
          </div>
          <div className='footer-content-list'>
            <div className='footer-heading'>
                {title}
            </div>
            <div className='footer-para'>
                {info}
            </div>

          </div>
        </div>
  )
}
SecurePayInfo.defaultProps={
    title:"SECURE PAYMENTS",
    info:"Using 128-bit SSL Encryption"
}
SecurePayInfo.propTypes={
    title: PropTypes.string,
    info: PropTypes.string,
}

export default SecurePayInfo
