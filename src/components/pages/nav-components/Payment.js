import React from 'react'
import PropTypes from "prop-types"


const  Payment =({title})=> {
  return (
    <div className='checkout-section'>
        <div className='checkout-heading'>
            {title}
        </div>
      
    </div>
  )
}
Payment.defaultProps={
    title:"3-PAYMENT",
    
}
Payment.propTypes={
    title: PropTypes.string,
    
}


export default Payment
