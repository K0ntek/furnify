import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import Bestsellers from '../components/Bestsellers'
import waves from '../../public/waves.png'

const Product = () => {

    const {productId} = useParams()
    const {products} = useContext(ShopContext)
    // const [productData, setProductData] = useState(false)

    // const fetchProductData = async () =>{
    //     products.map((item)=>{
    //         if (item.id === productId) {
    //             setProductData(item)
    //             return null
    //         }
    //     })
    // }

    // useEffect(()=>{
    //     fetchProductData()
    // }, [productId])
    

    const { id } = useParams();
	const [product, setProduct] = useState();
	useEffect(() => {
		setProduct(products.find((product) => product.id === id));
	}, [id])

    const [activeSize, setActiveSize] = useState()
    const [activePrice, setActivePrice] = useState()

    useEffect(()=>{
        setActiveSize
    },[])

  return (
    <div className=' min-h-screen mt-[100px] max-w-[1500px] mx-auto px-3'>
         <img src={waves} alt="" className=' wavesBg fixed top-0 left-0 z-[-1] opacity-5 w-full h-screen object-cover'/>
        {product &&(
            <div>
                <div className="grid lg:grid-cols-2 gap-10 text-center lg:text-start">

                <div>
                    <img src={product.image} alt="" className=' w-full sm:w-1/2 mx-auto lg:w-full aspect-square object-cover rounded-[40px]'/>
                </div>

                <div>
                    <div className=' space-y-4 relative top-[50%] translate-y-[-50%]'>
                        <div>
                            <h2 className=' font-mont font-[500] text-2xl -mb-2'>{product.category}</h2>
                            <h1 className=' font-playfair text-5xl capitalize font-[500]'>{product.name}</h1>
                        </div>
                        <h2 className=' font-playfair text-3xl'>cena: {activePrice} PLN</h2>
                        <h2 className=' font-playfair text-xl'>rozmiar: {activeSize} </h2>
                        <p className=' font-mont font-[500] text-lg w-5/6 mx-auto lg:mx-0 text-justify'>{product.desc}</p>

                    <div>
                        <p className=' font-playfair font-[700] text-xl mb-1'>Wybierz rozmiar:</p>
                            <div className=' flex flex-wrap gap-2 justify-center lg:justify-start'>
                                {product['sizes'].map((size, i)=>{
                                    return(
                                        <div onClick={()=> {setActivePrice(size.price), setActiveSize(size.size)}} className={` cursor-pointer p-5 rounded-2xl font-[700] font-playfair ${i % 2 == 0 ? ' bg-[#dadada]' : ' bg-[#161616] text-white'} `} key={i}>
                                            <h1 className={` text-xl `}>{size.size}</h1>
                                        </div>
                                    )
                                })}
                            </div>
                    </div>
                        <button className=' font-montalt bg-zinc-950 text-white p-3 text-lg rounded-full font-[500] hover:tracking-wider transition-all duration-150'>Do koszyka</button>
                    </div>

                </div>
                </div>
            </div>
        )}

        <div className=" mt-[60px] mb-10">
            <Bestsellers/>
        </div>

    </div>
  )
}

export default Product