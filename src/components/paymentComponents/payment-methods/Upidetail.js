import React from 'react'



const Upidetail =()=> {
    return (
      <div className='pay-detail-content'>
        <div className='card-container'>
          {/*Title of payment section */}
          <div className='card-title'>
            BHIM UPI
          </div>
          {/*form / input section*/}
          <div className='card-content-container'>
            <form>
              <div className='credit-card-number'>
                <input type='text' placeholder="VPA/UPI ID (eg. 9876543210@upi)
VPA" pattern='[0-9]{10}@upi' required></input>
              </div>
              <div className='expiry-detail'>
                
           
            
                <div className='submit-btn'>
                  <button type='submit'>PAY NOW</button>
                </div>
              </div>
  
            </form>
          </div>
        </div>
      </div>
    )
  }
  
  export default Upidetail
  