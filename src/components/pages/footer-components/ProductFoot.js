import React from 'react'
import {  FaGratipay } from 'react-icons/fa';
import {Link} from "react-router-dom"
import PropTypes from "prop-types"


function ProductFoot({title, info}) {
  return (
   
    <div className='footer-content-box '>
    <div className='footer-icon'>
     <FaGratipay/>
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
ProductFoot.defaultProps={
    title:"GENUINE PRODUCTS",
    info:"Sourced Directly From Brands"
}
ProductFoot.propTypes={
    title: PropTypes.string,
    info: PropTypes.string,
}

export default ProductFoot
