import React from 'react'
import { PiStarFourFill } from "react-icons/pi";
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const navElements= [
        {
            link: '/',
            name: 'Home'
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

            <div className=' flex text-xl space-x-[2px] cursor-pointer'>
                <p><PiStarFourFill className=' mt-[4px]'/></p>
                <h1 className=' font-mont font-[600]'>Furnify</h1>
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

            <div>

            </div>

        </div>
    </div>
  )
}

export default Navbar