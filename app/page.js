import React from 'react'
import './eStyle.css'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div   className='my-[50px]'>
        
    <div className='welcomeTxt'>
        <p>Click on the <b> Petal </b> To Proceed</p>
    </div>

   

    <Link href="./e-commerce" className='welcomeImg'>
    <Image src='/Group 1251.jpg' width={500} height={350} alt='giga-giga logo' className='welImg' /> 
    </Link>
        
    </div>
  )
}

export default page