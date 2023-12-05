'use client'
import React, { createContext, useContext } from 'react'
import { useLocalStorage } from '../hooks/useStorage'

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

const CartProvider = ({ children, idField = 'topic' }) => {
    const [ cart, setCart ] = useLocalStorage('cart', [])  
    const isInCart = (productId) => {
        return cart.findIndex((val) => val.id == productId)
    }

    const addToCart = (product) => {
        const index = isInCart(product[idField])
        var newArr = [...cart];
        if(index > -1){
            newArr[index].quantity += 1
        }else{
            newArr.push({
                id: product[idField],
                quantity: 1,
                product
            })
        }

        setCart(newArr)
    }

    const deleteFromCart = (product) => {
        const index = isInCart(product[idField])

        if(index < 0) return
        var newArr = [...cart];
        newArr.splice(index, 1)
        setCart(newArr)
    }

    const removeFromCart = (product) => {
        const index = isInCart(product[idField])
        var newArr = [...cart];
        if(index < 0) return

        if (cart[index].quantity > 1) {
            newArr[index].quantity -= 1
            setCart(newArr)
            return
        }
        else if(cart[index].quantity == 1){
            deleteFromCart(product)
        }
    }

    const getCartProductInformation = ((product) => {
        const index = isInCart(product[idField])
        return index > -1 ? cart[index] : null
    })

    return <CartContext.Provider value={{cart, addToCart, removeFromCart, deleteFromCart, getCartProductInformation, isInCart }}>{children}</CartContext.Provider>
}


export default CartProvider