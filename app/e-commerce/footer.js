import React from 'react'
import '../eStyle.css';

 const Footer = () => {
  return (

    <>
     <div className='footerHeader'>
      GIGA-GIGA
    </div>
    <div className='footer'>
        <div>
        <p className='foot-text'>Giga-Giga</p>
        <p className='foot-text'>About</p>
        <p className='foot-text'>Blog</p>
        </div>
        <div>
        <p className='foot-text'>Prices</p>
        <p className='foot-text'>Documentation</p>
        <p className='foot-text'>Terms & Conditions</p>
        </div>
        <div>
        <p className='foot-text'>Twitter</p>
        <p className='foot-text'>Facebook</p>
        <p className='foot-text'>Instagram</p>
        </div>
    </div>
    <div className='copyright '>
      &copy; Copyright 2023
    </div>
    </>
  )
}

export default Footer;