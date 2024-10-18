import React from 'react'
import { PiStarFourFill } from "react-icons/pi";
import { NavLink, Link } from 'react-router-dom';
import { IoBagOutline } from "react-icons/io5";
import { PiHeart } from "react-icons/pi";

const Navbar = () => {

    const navElements= [
        {
            link: '/',
            name: 'Home'
        },
        {
            link: 'products',
            name: 'Produkty'
        },
        {
            link: 'collections',
            name: 'Kolekcje'
        },
        {
            link: 'contact',
            name: 'Kontakt'
        },
    ]

  return (
    <div className=' w-full backdrop-blur-[5px] bg-white/50  fixed top-0 z-[98]'>
        <div className="flex justify-between max-w-[1440px] mx-auto p-3">

            <div className=' flex text-xl cursor-pointer w-[110px]'>
               <Link to='/'>
                <div className=' flex space-x-[2px] group'>
                    <p><PiStarFourFill className=' mt-[4px]'/></p>
                    <h1 className=' font-montalt font-[500] group-hover:ml-2 transition-all duration-150'>Furnify</h1>
                </div>
               </Link>
            </div>

                    <div>
                        <div className=' z-[99] flex space-y-4 sm:space-y-0 flex-col sm:flex-row sm:space-x-2 font-montalt font-[500] fixed sm:relative top-[-300px] sm:top-[50%] sm:translate-y-[-50%] '>
                            {navElements.map((navElement, i)=>{
                                return(
                                <div  key={i}>
                                    <NavLink to={navElement.link}>
                                        <div className=' flex group'>
                                            <p className=' overflow-hidden'><PiStarFourFill className=' mt-[3px] navstar relative left-5 group-hover:left-0 transition-all duration-150'/></p>
                                            <p>{navElement.name}</p>
                                        </div>
                                </NavLink>
                                </div>
                                )
                            })}
                        </div>
                    </div>
                    
                <div className=' w-fit flex space-x-3'>

                      <div>
                      <div className=' relative top-[50%] translate-y-[-50%]'>
                            <PiHeart className='text-2xl cursor-pointer text-black rounded-full  hover:text-[#ff0c3c] transition-all duration-150'/>
                        </div>
                      </div>
                        <div className=' relative top-[50%] translate-y-[-50%]'>
                            <IoBagOutline className='text-4xl cursor-pointer bg-[#072419] text-white rounded-full p-2 hover:text-[#efbf04] transition-all duration-150'/>
                        </div>
                </div>


        </div>
    </div>
  )
}

export default Navbar