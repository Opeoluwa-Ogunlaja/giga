import React from "react";
import Image from "next/image";
import '../eStyle.css';
import { useCart } from '../contexts/CartContext'
import { useUser } from "../contexts/UserContext";

const Event = ({ image, date, topic, text, price }) => {
    const { user } = useUser()
    const { cart, addToCart, getCartProductInformation, removeFromCart } = useCart();

    const CartControls =  () => {
        return !getCartProductInformation({ image, date, topic, text, price }) ?
        <button className="cta !w-full" onClick={() => addToCart({ image, date, topic, text, price })}>
            Add to cart
        </button>
        : <div className="atc">
            <button onClick={() => removeFromCart({ image, date, topic, text, price })}>-</button>
            <span>{getCartProductInformation({ image, date, topic, text, price }).quantity}</span>
            <button onClick={() => addToCart({ image, date, topic, text, price })}>+</button>
        </div>
    }

    return (
        <>

            <div className="first-cont m-2">

                <Image src={image} width={380} height={252} alt='kwe' className='fImage' />

                <div className="text-and-action">
                    <h2 className="pt-[10px]">{topic}</h2>
                    <br />
                    <h3>Price: <b>{price}</b></h3>
                    <h4>{text}</h4>
                    {!user?.isAdmin && <CartControls />} 
                  
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
export default Event;