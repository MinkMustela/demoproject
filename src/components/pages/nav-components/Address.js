import React from 'react'
import PropTypes from "prop-types"

function Address({title, address}) {
  return (
    <div className='checkout-section'>
        <div className='checkout-heading'>
            {title}
        </div>
        <div className='checkout-info'>
            {address}
        </div>
       
    </div>
  )
}
Address.defaultProps={
    title:"2-ADDRESS",
    address:"Private Drive, London"
}
Address.propTypes={
    title: PropTypes.string,
    address: PropTypes.string,
}

export default Address
