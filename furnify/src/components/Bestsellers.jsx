import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'
// import products from '../assets.js'

const Bestsellers = () => {
  const {products} = useContext(ShopContext)
  return (
    <div>
      <h1 className=' text-4xl sm:text-6xl font-playfair text-center'>Nasze ostatnie bestsellery</h1>

     <div className=' grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
      {products.map((product, i)=>{
          return(
            <ProductItem key={i} image={product.image} name={product.name} price={product.price} id={product.id}/>
          )
        })}
     </div>
    </div>
  )
}

export default Bestsellers