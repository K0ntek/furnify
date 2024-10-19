import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { PiStarFourFill } from "react-icons/pi";

const ProductItem = ({id, image, name, price}) => {

    const {currency} = useContext(ShopContext)
  return (
    <div className='cursor-pointer aspect-square rounded-3xl relative overflow-hidden group text-white font-playfair text-xl shadow-[0px_0px_10px_0px] shadow-black/50'>

        <div className=' flex space-x-1 text-2xl absolute top-[50%] translate-y-[-50%] z-[97] left-[100%] group-hover:left-[50%] group-hover:translate-x-[-50%] transition-all duration-200'>
            <PiStarFourFill className=' mt-[3px]'/>
            <h1 className=' font-montalt font-[200]'>SPRAWDŹ</h1>
        </div>

        <img src={image} alt="productImage" className=' w-full h-full object-cover rounded-3xl'/>
        <div className="w-full h-full absolute top-0 right-0 bg-gradient-to-b from-black/80 to-transparent group-hover:to-black/60"></div>
        <h1 className=' absolute top-3 left-3 text-md sm:text-lg'>{name}</h1>
        <p className=' absolute top-3 right-3 text-md sm:text-lg'>{price} {currency}</p>

        <div className=' absolute bottom-3 right-3'>
            <button className=' font-montalt text-sm bg-white rounded-full p-2 text-black hover:tracking-wider transition-all duration-150'>Do koszyka</button>
        </div>
    </div>
  )
}

export default ProductItem