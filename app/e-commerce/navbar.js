import React from 'react'
import '../eStyle.css'
import { useCart } from '../contexts/CartContext'
import Link from 'next/link';




const Navbar = () => {
  const { cart } = useCart()
  return (
    <div>

       <div className='navigation '>

        <h2 className='welcome-text'>E-commerce</h2>

        <>
        <Link href="./login" className=" rounded-lg px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-primary-300 
        transition duration-100 hover:text-primary-500 focus-visible:ring active:text-primary-600 md:text-base">
          Sign in
        </Link>

        <Link href="./login" className=" rounded-lg px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-primary-300 
        transition duration-100 hover:text-primary-500 focus-visible:ring active:text-primary-600 md:text-base">
          Sign Up
        </Link>

        <Link  href="./e-commerce/checkoutpage"     className='btn'>
          Cart Items <span id='cart-number'>{cart.length}</span>
        </Link>
       </>
        

       </div>

    </div>
  )
}

export default Navbar;



{/*const Navbar = () => {
  const Navbar = () => {
  const { cart } = useCart()
  return (
    <div>

      <div className='flex items-center justify-between py-4 md:py-8 px-4'>
        <Link href="/" className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
          E-commerce
        </Link>

        <nav className="hidden gap-12 lg:flex">
          <Link href="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary-500 active:text-primary-700">Home</Link>
          <Link href="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary-500 active:text-primary-700">Products</Link>
          {/* <Link href="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary-500 active:text-primary-700">About</Link> */}
      {/*  </nav>
        <div className="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start">
          <Link href="/login" className="inline-block rounded-lg px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-primary-300 transition duration-100 hover:text-primary-500 focus-visible:ring active:text-primary-600 md:text-base">Sign in</Link>

          <Link href="./e-commerce/checkoutpage" className='btn'>
            Cart Items <span id='cart-number'>{cart.length}</span>
          </Link>
        </div> 

      </div>

    </div>
  )
}  

*/}

