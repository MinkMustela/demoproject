import React from 'react'
import PropTypes from "prop-types"
import {GrCircleInformation} from 'react-icons/gr'

function Alertmessage({title}) {
  return (
    <div className='home-alert'>
            <div className='alert-icon'>
                <GrCircleInformation/>
            </div>
            <div className='alert-message'>
                {title}
            </div>
        </div>
  )
}
Alertmessage.defaultProps={
    title:"Please use a digital payment method & help us ensure contactless delivery for your safety",
}
Alertmessage.propTypes={
    title: PropTypes.string,
}

export default Alertmessage
