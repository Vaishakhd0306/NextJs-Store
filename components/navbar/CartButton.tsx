import React from 'react'
import { MdShoppingCart } from "react-icons/md";
import { Button } from '../ui/button';
import Link from 'next/link';

const CartButton = () => {
    const number= 9;
  return (
    <Button asChild variant='outline' size='icon' className='flex justify-center items-center relative'>
  <Link href='/cart'>
      <MdShoppingCart/>
      <span className='absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center'>{number}</span>
  </Link>
    </Button>
    
  )
}

export default CartButton
