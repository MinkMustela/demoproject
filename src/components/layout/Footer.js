import React from 'react'
import {Link} from "react-router-dom"
import PropTypes from "prop-types"
import ProductFoot from '../pages/footer-components/ProductFoot';
import ShippmentInfo from '../pages/footer-components/ShippmentInfo';
import SecurePayInfo from '../pages/footer-components/SecurePayInfo';

function Footer() {
  return (
    <div className='footer-bar'>
      <div className='footer-content-container'>
        <ProductFoot />
        <ShippmentInfo />
        <SecurePayInfo />

      </div>
      
    </div>
  )
}

export default Footer
