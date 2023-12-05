import React from 'react'
import Link from 'next/link'
import '../eStyle.css'

const AdminNavbar = () => {
  return (
    <div>

        <div className='navigation '>

         <h2 className='welcome-text'>Admin Dashboard</h2>

         
         <div className=''>
         <Link  href="./e-commerce"   className='btn'>
            View Product Page
         </Link>
         <span className='viewOrderBtn'>
            View Orders
         </span>
          </div>



       </div>

    </div>
  )
}

export default AdminNavbar