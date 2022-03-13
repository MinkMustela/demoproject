import React from 'react'
import { Link} from 'react-router-dom';
function PaymentMethods() {
  return (
     
    <div className='pay-method'>
        <div className='pay-method-list '>
          <div className='sub-card active'>
            <Link to='/card' className='sub-card '>Credit/Debit </Link>
          </div>
          <div className='sub-card'>
             <Link to ='/upi' className='sub-card'>UPI</Link>
          </div>
          <div className='sub-card'>
          <Link to ='/gpay' className='sub-card'>GPay</Link>
          </div>
          <div className='sub-card'>
          <Link to ='/netbanking' className='sub-card'>Net Banking</Link> 
          </div>
          <div className='sub-card'>
          <Link to ='/mobilewallets' className='sub-card'>Mobile Wallets</Link> 
          </div>
          <div className='sub-card'>
          <Link to ='/giftcards' className='sub-card'>Gift Cards</Link>
          </div>
        </div>        
    </div>
   
  )
}

export default PaymentMethods
