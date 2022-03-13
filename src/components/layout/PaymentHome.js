import React from 'react'
import AlertMessage from '../paymentComponents/Alertmessage'
import PaymentMethods from '../paymentComponents/PaymentMethods'
import CardDetails from '../paymentComponents/payment-methods/CardDetails'
import ShippingDetails from '../paymentComponents/ShippingDetails'
import PropTypes from "prop-types"
import Upidetail from '../paymentComponents/payment-methods/Upidetail'
import Gpay from '../paymentComponents/payment-methods/Gpay'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function PaymentHome({title}) {
  return (
    <Router>
    <div className='main-box'>
      
        <AlertMessage />
        
        
        <div className='pay-detail-box'>
              <div className='payment-title'>
                  {title}
              </div>
              <div className='pay-detail-box-content'>
                <PaymentMethods />
                <Routes>
                  <Route path='/card' element={<CardDetails/>}/>
                  <Route path='/upi' element={<Upidetail/> }/>
                  <Route path='/gpay' element={<Gpay/>}/>
                  <Route path='/netbanking' element={<CardDetails/>}/>
                  <Route path='/mobilewallets' element={<CardDetails/>}/>
                  <Route path='/giftcards' element={<CardDetails/>}/>
                </Routes>
                {/* <div className='pay-detail-content'></div> */}
                
                <ShippingDetails />
              </div>
            
          </div>

        
      </div>
    </Router>
  )
}
PaymentHome.defaultProps={
  title:"CHOOSE YOUR PAYMENT-METHOD",
 
}
PaymentHome.propTypes={
  title: PropTypes.string,

}


export default PaymentHome
