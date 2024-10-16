import React from 'react'
import { PiStarFourFill } from "react-icons/pi";

const Header = () => {

    const headerImages = [
        "https://images.unsplash.com/photo-1614255976202-8ce52bfcb655?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1507149833265-60c372daea22?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1522156373667-4c7234bbd804?q=80&w=1883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]

  return (
    <div>
        <div className='w-full min-h-screen p-6 rounded-3xl relative bg-[url("https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'>
        <div className="bg-black/40 absolute top-0 left-0 w-full h-full rounded-3xl"></div>
            <div className=' h-full'>
                <div className=' max-w-[800px] text-center pt-[80px] mx-auto relative text-white space-y-5'>

                    <div className='space-y-5 pt-10'>
                        <div className="flex text-xl text-black bg-white w-fit px-2 py-1 rounded-full">
                            <PiStarFourFill className=' mt-1'/>
                            <h2 className=' font-montalt'>Furnify</h2>
                        </div>
                        
                        <div className=' flex'>
                            {headerImages.map((image, i)=>{
                                return(
                                    <div key={i} className=' w-[65px] sm:w-[80px]'>
                                        <img src={image} alt='image' className=' w-full aspect-square rounded-full object-cover' style={{marginLeft: ` ${-20 * i}px` }}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <h1 className=' font-playfair text-7xl lg:text-8xl capitalize'>Komfort i design w Twoim domu</h1>

                    <p className=' font-mont text-xl capitalize'>Znajdziesz u nas wyjątkowe meble, które łączą styl, komfort i funkcjonalność, tworząc przestrzeń idealnie dopasowaną do Twojego domu.</p>

                    <div className=' flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center'>
                        <button className=' font-montalt p-3 text-lg hover:tracking-wider transition-all duration-150 bg-zinc-900 text-white rounded-3xl'>Zobacz więcej</button>
                        <button className=' font-montalt p-3 text-lg hover:tracking-wider transition-all duration-150 bg-white text-black rounded-3xl'>Zobacz więcej</button>
                    </div>
                </div>
            </div>

    </div>
    </div>
  )
}

export default Header