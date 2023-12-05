"use client";
import React from 'react'
import { useState } from 'react'
import Navbar from './navbar'
import Footer from './footer'
import client from 'react/jsx-runtime';
import FeauturedProducts from './feauturedProducts'
import Accessory from './accessory'
import '../eStyle.css'


const page = () => {

  const accessories = [
    {
      image: "/haziq-jb-71_GA1KBf_8-unsplash.jpg",
      date: "20 DEC",
      price: "N79,999.99",
      topic: "Fancy Ladies Wristwatch",
      text: "A user experience and design-centered event, focusing on usability, user research, and creating engaging digital interfaces."
    },
    {
      image: "/content-pixie-ZB4eQcNqVUs-unsplash.jpg",
      date: "20 DEC",
      price: "N429,999.99",
      topic: "Female Handbag Collection",
      text: "A user experience and design-centered event, focusing on usability, user research, and creating engaging digital interfaces."
    },
    {
      image: "/kari-shea-1SAnrIxw5OY-unsplash.jpg",
      date: "20 DEC",
      price: "N999,999.99",
      topic: "Apple Macbook Pro Laptop",
      text: "A user experience and design-centered event, focusing on usability, user research, and creating engaging digital interfaces."
    },
    {
      image: "/isabel-garza-wQbHY0M-YOk-unsplash.jpg",
      date: "20 DEC",
      price: "N699,999.99",
      topic: "Men's Macintosh Wristwatch",
      text: "A user experience and design-centered event, focusing on usability, user research, and creating engaging digital interfaces."
    },
    {
      image: "/lum3n-lbEL705stOw-unsplash.jpg",
      date: "20 DEC",
      price: "N5,999,999.99",
      topic: "Female Golden Bracelet",
      text: "A user experience and design-centered event, focusing on usability, user research, and creating engaging digital interfaces."
    },
    {
      image: "/lensabl-0GfPlommtxM-unsplash.jpg",
      date: "20 DEC",
      price: "N6,999.99",
      topic: "Anti-Blue Light Glasses",
      text: "A user experience and design-centered event, focusing on usability, user research, and creating engaging digital interfaces."
    },
  ]


  return (
    <>

      <Navbar />

      <div className='main-content'>
        <FeauturedProducts />

        <div>
          <h1 className='fHeading'>Accessories</h1>
        </div>

        <div className='py-7 px-20'>
          <div className='accessories grid   gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {accessories.map((accessory, index) => (
              <Accessory
                key={index}
                image={accessory.image}
                date={accessory.date}
                price={accessory.price}
                topic={accessory.topic}
                text={accessory.text}
              />
            ))

            }

          </div>
        </div>

      </div>

      <Footer />

    </>
  )
}

export default page