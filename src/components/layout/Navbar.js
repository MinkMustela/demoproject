import React from 'react'
import {Link} from "react-router-dom"
import PropTypes from "prop-types"
import Login from '../pages/nav-components/Login'
import Address from '../pages/nav-components/Address'
import Payment from '../pages/nav-components/Payment'
import { FaShoppingCart } from 'react-icons/fa';

function Navbar({title}) {
  return (
    <nav>
        <div className='navbar'>
            <div className='navbar-content-container'>
                <div className='navbar-container'>
                    <div className='logo'>
                        <div className='brand-logo'>
                            <div className='logo-content'>
                                
                                    {title}
                             </div>
                             <div className='logo-icon'>
                             <FaShoppingCart className='nav-icon' />
                             </div>
                        </div>

                    </div>
                    <div className='checkout-main-container'>
                        <div className='checkout-container'>
                            <div className='checkout-content'>
                            <Login />
                            </div>
                            
                        </div>
                        <div className='checkout-container'>
                        <div className='checkout-content'>
                            <Address />
                            </div>
                        </div>
                        <div className='checkout-container'>
                        <div className='checkout-content'>
                            <Payment />
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </nav>
  )
}

Navbar.defaultProps={
    title:"ECart",
}
Navbar.propTypes={
    title: PropTypes.string,
}
export default Navbar
