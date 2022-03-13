import React from 'react'
import { FaMegaport} from 'react-icons/fa';
import {Link} from "react-router-dom"
import PropTypes from "prop-types"

function ShippmentInfo({title, info}) {
  return (
    <div className='footer-content-box'>
          <div className='footer-icon'>
            <FaMegaport />
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
ShippmentInfo.defaultProps={
    title:"FREE SHIPPING",
    info:"For orders above Rs.299"
}
ShippmentInfo.propTypes={
    title: PropTypes.string,
    info: PropTypes.string,
}

export default ShippmentInfo
