import React from "react";
import Image from "next/image";
import '../eStyle.css'

const Accessory = ({image , date , topic , text , price }) =>{
    return(
        <>

        <div className="second-cont">
         
         <Image src={image} width={380} height={252} alt='kwe' className='fImage' />

         <div className="text-and-action">
            <h2 className="pt-[10px]">{topic}</h2>
            <br/>
            <h3><b>Price:</b> {price}</h3>
            <h4>{text}</h4>
            <div className="cta">
                Add to cart
            </div>
         </div>

        </div>
        
        
        
        
        
        
        {/*<div  className='w-full'>
    
        <Image src={image} width={380} height={252} alt='kwe' className=' ' />
       
         
       <div class="relative px-2 -mt-26  ">
        
       </div>
       
    </div> */}

</>
    )
}
export default Accessory;