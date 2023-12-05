"use client";
import React, { useEffect } from 'react'
import Event from './productsPage'
import { useState } from 'react'
import { useTimeout } from '../hooks/useTimeout'
import { useToggle } from '../hooks/useToggle'


const brandId = "6569aa9385dffe8e19630c7c";
const categoryId = "6569aeaebb2bd30f505d323f"
const colorId = "6569af2c6ee31cdce75a51a9"

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

const FeauturedProducts = () => {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(0)
  // const [canLoadMore, , set] = useToggle(true)
  // const [, reset] = useTimeout(() => { set(true) }, 1000, false)
  const fetchProducts = async (page) => {
    try {
      // if (canLoadMore) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_start=${((page-1)*6)+1}&_limit=6`) 
        const data = await response.json()
        setProducts((prevProducts) => {
          return [...prevProducts, ...data]
        })
      // }
      // set(false)
    } catch (error) {
      console.log(error)
    }
    finally {
      // reset()
    }
  }

  useEffect(() => {
    page > 0 && fetchProducts(page)
  }, [page])


  return (
    <>
      <div>
        <h1 className='fHeading'>Featured Products</h1>
      </div>

      <div className='py-7 px-20'>

        <div className='grid   gap-8 md:grid-cols-2 lg:grid-cols-3 '>
          {events.map((event, index) => (
            <Event
              key={index}
              image={event.image}
              date={event.date}
              price={event.price}
              topic={event.topic}
              text={event.text}
            />
          ))}
        </div>
      </div>

      <div>
        {
          products.length > 0 && products.map(product => {
            return (

          <div key={product.index} className="second-cont">
         
              <Image src={product.image} width={380} height={252} alt='kwe' className='fImage' />

              <div className="text-and-action">
                <h2 className="pt-[10px]">{product.name}</h2>
                <br/>
                <h3><b>Price:</b> {product.price}</h3>
                <h4>{product.description}</h4>
                <div className="cta">
                Add to cart
                </div>
             </div>
          </div>


            )
          })}
      </div>


      <div className='loadMore' onClick={() => setPage(page + 1)}>
        Load More
      </div>

    </>
  )
}

export default FeauturedProducts