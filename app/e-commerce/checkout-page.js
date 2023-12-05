"use client";
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'; 
import '../eStyle.css'

const CheckoutPage = () => {

    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [email, setEmail] = useState();
    const [phonenumber, setPhonenumber] = useState();
    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [country, setCountry] = useState();

  return (
    <div>

        <div className='cartHeading'>
            <h1>Your Cart</h1>
            <Image src='/shopping-cart.gif' width={120} height={80} alt='shopping cart'/>
        </div>


        <div className='showSelectedOrder'>

        </div>

         
         <form>
            <div className='fieldbox'>
             <div className='fieldtitle'> 
                    Enter your first name
             </div>
            <input
             type = 'text'
             className='textfield shadow-lg'
             value={firstname}
             onChange={(e) => setFirstname(e.target.value)}
             />
             </div>
            


             <div className='fieldbox'>
             <div className='fieldtitle'> 
                Enter your last name
             </div>
            <input
             type = 'text'
             className='textfield shadow-lg'
             value={lastname}
             onChange={(e) => setLastname(e.target.value)}
             />
             </div>
             

             <div className='fieldbox'>
             <div className='fieldtitle'> 
                Enter your email
             </div>
            <input
             type = 'email'
             className='textfield shadow-lg'
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             />
             </div>


             <div className='fieldbox'>
             <div className='fieldtitle'> 
                Enter your Phone Number
             </div>
            <input
             type = 'text'
             className='textfield shadow-lg'
             value={phonenumber}
             onChange={(e) => setPhonenumber(e.target.value)}
             />
             </div>



             <div className='fieldbox'>
             <div className='fieldtitle'> 
                Enter your Home/Delivery Address
             </div>
            <input
             type = 'text'
             className='textfield  shadow-lg'
             value={address}
             onChange={(e) => setAddress(e.target.value)}
             />
             </div>


             <div className='fieldbox'>
             <div className='fieldtitle'> 
                Enter your City
             </div>
            <input
             type = 'text'
             className='textfield   shadow-lg'
             value={city}
             onChange={(e) => setCity(e.target.value)}
             />
             </div>


             <div className='fieldbox'>
             <div className='fieldtitle'> 
                Enter your State
             </div>
            <input
             type = 'text'
             className='textfield  shadow-lg '
             value={state}
             onChange={(e) => setState(e.target.value)}
             />
             </div>


             <div className='fieldbox'>
             <div className='fieldtitle'> 
                Enter your Country
             </div>
            <input
             type = 'text'
             className='textfield   shadow-lg'
             value={country}
             onChange={(e) => setCountry(e.target.value)}
             />
             </div>

            <div className='order-btn'>
               Proceed To Order
            </div>

         </form>

    </div>
  )
}

export default CheckoutPage;