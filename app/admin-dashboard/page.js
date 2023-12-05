'use client'

// import { Formik, Field } from 'formik'
import React from 'react'
// import * as yup from "yup"
import '../eStyle.css'
// import { useMutation } from '../hooks/useMutation'
// import { loginFn } from '../utils/requests'
// import { useTimeout } from '../hooks/useTimeout'
// import { useRouter } from 'next/navigation'
// import { twMerge } from 'tailwind-merge'
import ProductCreationForm from './ProductCreationForm'
import AdminNavbar from './adminNavbar'
import { useUser } from '../contexts/UserContext'
import AliceCarousel from 'react-alice-carousel';
import Event from '../e-commerce/productsPage'
import Link from 'next/link'

// const fieldClassname = ''
const events = [
  {
    image: "/troydon-dcruz-9SD5cs9KVBE-unsplash.jpg",
    date: "20 DEC",
    price: "N4,999,000.99",
    topic: "Luxury Diamond Wristwatch",
    text: "A user experience and design-centered event, focusing on usability, user research, and creating engaging digital interfaces."
  },
  {
    image: "/samantha-ram-Ha5_JcYArf0-unsplash.jpg",
    date: "20 DEC",
    price: "N49,999.99",
    topic: "White Ceramic Mug",
    text: "A user experience and design-centered event, focusing on usability, user research, and creating engaging digital interfaces."
  },
  {
    image: "/nordwood-themes-_sg8nXmpWDM-unsplash.jpg",
    date: "20 DEC",
    price: "N520,999.99",
    topic: "HP Classic Laptop",
    text: "A user experience and design-centered event, focusing on usability, user research, and creating engaging digital interfaces."
  },
  {
    image: "/nordwood-themes-nDd3dIkkOLo-unsplash.jpg",
    date: "20 DEC",
    price: "N39,999.99",
    topic: "White VIP  Mug",
    text: "A user experience and design-centered event, focusing on usability, user research, and creating engaging digital interfaces."
  },
  {
    image: "/Pexels Photo by Darlene Alderson.png",
    date: "20 DEC",
    price: "N249,999.99",
    topic: "AR/VR Glasses",
    text: "A user experience and design-centered event, focusing on usability, user research, and creating engaging digital interfaces."
  },
  {
    image: "/nimble-made-BKYeLLB1OxI-unsplash.jpg",
    date: "20 DEC",
    price: "N19,999.99",
    topic: "4-in-1 Packing Shirt",
    text: "A user experience and design-centered event, focusing on usability, user research, and creating engaging digital interfaces."
  },
]

const eventItems = events.map((event, index) => (
    <Event
      key={index}
      image={event.image}
      date={event.date}
      price={event.price}
      topic={event.topic}
      text={event.text}
    />
  ))

const page = () => {
    const { user, isUserLoading } = useUser()
    return (
        <>
            <AdminNavbar/>
            <div>
               {/* <h1 className='fHeading'>Admin {!isUserLoading && user.fullname}</h1> */}
                <h2 className='text-xl font-bold'>Your products</h2>
                <div className='w-full mx-auto overflow-hidden'>
                    <AliceCarousel mouseTracking autoHeight autoWidth infinite animationDuration={2000} autoPlay items={eventItems} />
                </div>
            </div>
            <ProductCreationForm/>
        </>
    )
}

export default page