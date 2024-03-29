import React from 'react'
import Link from 'next/link'
import {AiOutlineShopping} from 'react-icons/ai'
import Cart from './Cart'
import { useStateContext } from '@/context/StateContext'
function Navbar() {
  const {showCart, setShowCart, totalQuantities,qty} = useStateContext()

  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href="/">VJK Headphones</Link>
      </p>
      <button type='button' className='cart-icon' onClick={()=>setShowCart(true)}>
        <AiOutlineShopping />
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </div>
  )
}

export default Navbar