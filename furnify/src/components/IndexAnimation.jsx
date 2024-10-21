import React, { useEffect } from 'react'
import gsap from 'gsap'
import { PiStarFourFill } from "react-icons/pi";

const IndexAnimation = () => {

    useEffect(()=>{
        gsap.fromTo('.greenBlock', {width:0, }, {width: '100%', duration:1, stagger:.2, delay:.4})
        gsap.to('.animationLogo', {top: '-5px', duration:.5, stagger:.1,  delay:1})
        gsap.to('.greenBlocks', {top: '-100%', duration:1, delay:2})
        gsap.to('.blackBlock', {top: '-100%', duration:1, delay:2.2})
        gsap.to('.whiteBlock', {top: '-100%', duration:1, delay:1.7})
        gsap.to('.blocksWrapper', {top: '-100%', duration:0, display: 'none', delay:3.3})
        // gsap.to('.blocksWrapper', {display: 'none', delay:3.3})
    },[])

  return (
    <div className=' w-full h-screen fixed top-0 left-0 blocksWrapper z-[99]'>
        <div className="greenBlocks w-full h-screen grid grid-cols-3 absolute top-0">
            <div className="greenBlock bg-[#092b1e] w-full h-screen"></div>
            <div className="greenBlock bg-[#092b1e] w-full h-screen"></div>
            <div className="greenBlock bg-[#092b1e] w-full h-screen"></div>
            <div className=' font-mont w-fit text-white text-3xl sm:text-5xl md:text-6xl absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] overflow-hidden'>
                <div className=" flex relative top-[80px] animationLogo">
                    <PiStarFourFill className='text-[#e4e4e4] animationLogo'/> <p className=' animationLogo'>Furnify</p>
                </div>
            </div>
            {/* <div className="greenBlock bg-[#092b1e] w-full h-screen"></div>
            <div className="greenBlock bg-[#092b1e] w-full h-screen"></div> */}
        </div> 
        <div className="blackBlock w-full h-screen bg-zinc-200 absolute top-0 z-[-1]"></div>
        <div className="whiteBlock w-full h-screen bg-slate-100 absolute top-[100%]"></div>
    </div>
  )
}

export default IndexAnimation