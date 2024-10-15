import React from 'react'
import { PiStarFourFill } from "react-icons/pi";

const Footer = () => {
  return (
    <div className=' p-10 text-white bg-zinc-950 rounded-3xl'><p className=' flex font-montalt'>© 2024 <PiStarFourFill className=' mt-[4px] ml-1'/> Furnify designed by <span className=' ml-1 font-[600]'><a href="https://jakubkontek.onrender.com"> Jakub Kontek</a></span></p></div>
  )
}

export default Footer