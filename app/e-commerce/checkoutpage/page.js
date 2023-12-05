"use client";
import React from 'react'
import { useState } from 'react'
import Image from 'next/image';
import button from 'react';
import '../../eStyle.css'
import { useCart } from '@/app/contexts/CartContext';
import Link from 'next/link';


const CartItem = (props) => {
   const { quantity, product, id, addToCart, removeFromCart, deleteFromCart } = props

   return <div className="py-5 sm:py-8">
      <div className="flex flex-wrap gap-4 sm:py-2.5 lg:gap-6">
         <div className="sm:-my-2.5">
            <a href="#" className="group relative block h-40 w-24 overflow-hidden rounded-lg bg-gray-100 sm:h-56 sm:w-40">
               <Image src={product.image} width={200} height={140} loading="lazy" alt='' className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            </a>
         </div>

         <div className="flex flex-1 flex-col justify-between">
            <div>
               <a href="#" className="mb-1 inline-block text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">{product.text}</a>
            </div>

            <div>
               <span className="mb-1 block font-bold text-gray-800 md:text-lg">${product.price}</span>
            </div>
         </div>

         <div className="flex w-full justify-between border-t pt-4 sm:w-auto sm:border-none sm:pt-0">
            <div className="flex flex-col items-start gap-2">
               <div className="flex h-12 w-20 overflow-hidden rounded border">
                  <input type="number" value={quantity} className="w-full px-4 py-2 outline-none ring-inset ring-primary-300 transition duration-100 focus:ring" disabled />

                  <div className="flex flex-col divide-y border-l">
                     <button className="flex w-6 flex-1 select-none items-center justify-center bg-white leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200" onClick={() => addToCart(product)}>+</button>
                     <button className="flex w-6 flex-1 select-none items-center justify-center bg-white leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200" onClick={() => removeFromCart(product)}>-</button>
                  </div>
               </div>

               <button className="select-none text-sm font-semibold text-primary-500 transition duration-100 hover:text-primary-600 active:text-primary-700" onClick={() => deleteFromCart(product)}>Delete</button>
            </div>

            <div className="ml-4 pt-3 sm:pt-2 md:ml-8 lg:ml-16">
               <span className="block font-bold text-gray-800 md:text-lg">N{product.price}</span>
            </div>
         </div>
      </div>
   </div>
}



const CartListing = () => {
   const { cart, addToCart, removeFromCart, deleteFromCart } = useCart()

   const removeLetters = (string) => {
      return string.replace(/[A-Za-z]/g, '');
   }

   const getTotalPrice = () => {
      const pricesArr = cart.map((item) => {
         return Number(item.quantity) * Number(removeLetters(item.product.price.replace(',', '')))
      })



      return pricesArr.reduce(function (a, b) {
         return a + b
      }, 0)
   }

   return <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className='mx-auto max-w-screen-lg px-4 md:px-8'>
         <div className="mb-6 sm:mb-10 lg:mb-16">
           {/* <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Your Cart</h2>*/}
         </div>
         <div className="mb-5 flex flex-col sm:mb-8 sm:divide-y sm:border-t sm:border-b">
            {cart.map((cartItem) => {
               return <CartItem key={cartItem.id} {...cartItem} addToCart={addToCart} removeFromCart={removeFromCart} deleteFromCart={deleteFromCart} />
            })}

         </div>
      </div>
      
      <div className="flex flex-col items-end gap-4">
         <div className="w-full rounded-lg bg-gray-100 p-4 sm:max-w-xs">
            <div className="space-y-1">
               <div className="flex justify-between gap-4 text-gray-500">
                  <span>Subtotal</span>
                  <span>N{getTotalPrice()}</span>
               </div>

               <div className="flex justify-between gap-4 text-gray-500">
                  <span>Logistics</span>
                  <span>N{getTotalPrice() * (0.5 / 100)}</span>
               </div>
            </div>

            <div className="flex items-start justify-between gap-4 text-gray-800">
               <span className="text-lg font-bold">Total</span>

               <span className="flex flex-col items-end">
                  <span className="text-lg font-bold">N{getTotalPrice() + (getTotalPrice() * (0.5 / 100))}</span>
                  {/* <span className="text-sm text-gray-500">including VAT</span> */}
               </span>
            </div>
         </div>
         <button className="inline-block rounded-lg bg-primary-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-primary-300 transition duration-100 hover:bg-primary-600 focus-visible:ring active:bg-primary-700 md:text-base">Check out</button>
      </div>
   </div>
}

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

         <div className='mx-[80px] my-[40px]'>


            <div className='flex justify-between '>
               <div className='cartHeading'>
                  <h1>Your Cart</h1>
                  <Image src='/shopping-cart.gif' width={120} height={80} alt='shopping cart' />
               </div>
               <div>
                  <Link href="/e-commerce" className='text-purple-800 mt-[60px]'>Back to Products Page</Link>
               </div>
            </div>


            <CartListing />

            <form>
               <div className='fieldbox'>
                  <h1 className='text-[30px] my-[20px]'>Billing Details:</h1>
                  <div className='fieldtitle'>
                     Enter your first name
                  </div>
                  <input
                     type='text'
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
                     type='text'
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
                     type='email'
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
                     type='text'
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
                     type='text'
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
                     type='text'
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
                     type='text'
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
                     type='text'
                     className='textfield   shadow-lg'
                     value={country}
                     onChange={(e) => setCountry(e.target.value)}
                  />
               </div>

               <button className='order-btn'>
                  Proceed To Order
               </button>

            </form>

         </div>

      </div>
   )
}

export default CheckoutPage;