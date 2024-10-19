import React from 'react'
import { PiStarFourFill } from "react-icons/pi";
import { GiSoundWaves } from "react-icons/gi";

const DescSection = () => {
  return (
    <div className=''>
      <div className="grid lg:grid-cols-2 lg:gap-10">

        <div>
            <img src="https://images.unsplash.com/photo-1507149833265-60c372daea22?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-full object-cover rounded-3xl shadow-[0px_0px_20px_0px] shadow-black/50'/>
        </div>

        <div>
            <div className='py-10 space-y-5 relative top-[50%] translate-y-[-50%] text-center sm:text-start'>
                <h2 className=' capitalize font-playfair text-lg sm:text-xl font-[700]'>Twój dom, Twoje zasady.</h2>
                <h1 className=' font-playfair text-4xl sm:text-6xl capitalize'>Odkryj wyjątkowe koszyści w swoim domu</h1>
                <p className=' font-mont text-md sm:text-lg capitalize font-[500] text-justify'>W furnify stawiamy na jakość i styl, dzięki czemu nasze meble przetrwają lata. Nasze projekty nie tylko upiększają twoją przestrzeń, ale także odzwierciedlają zaangażowanie w zrównoważony rozwój.</p>

                <div className="flex gap-4 flex-col sm:flex-row">  
                  <div className=' relative space-y-2 sm:max-w-[300px] p-5 rounded-3xl bg-zinc-950 text-white'>
                  <GiSoundWaves className=' absolute top-3 right-3 text-2xl'/>
                    <h2 className=' font-playfair capitalize text-2xl font-[600]'>Trwałość ma znaczenie</h2>
                    <p className=' font-mont text-sm'>Odmień swoją przestrzeń życiową dzięki naszym stylowym i nowoczesnym projektom mebli.</p>
                  </div>

                  <div className=' relative space-y-2 sm:max-w-[300px] p-5 rounded-3xl bg-[#725134] text-white'>
                    <PiStarFourFill className=' absolute top-3 right-3 text-xl'/>
                    <h2 className=' font-playfair capitalize text-2xl font-[600]'>Atrakcyjny wygląd</h2>
                    <p className=' font-mont text-sm'>Odmień swoją przestrzeń życiową dzięki naszym stylowym i nowoczesnym projektom mebli.</p>
                  </div>

                </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default DescSection