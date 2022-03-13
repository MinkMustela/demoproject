import React from 'react'
import PropTypes from "prop-types"

function Login({title, email}) {
  return (
    <div className='checkout-section'>
        <div className='checkout-heading'>
            {title}
        </div>
        <div className='checkout-info'>
            {email}
        </div>
       
    </div>
  )
}
Login.defaultProps={
    title:"1-LOGIN",
    email:"emailzxy_abc@gmail.com"
}
Login.propTypes={
    title: PropTypes.string,
    email: PropTypes.string,
}



export default Login
