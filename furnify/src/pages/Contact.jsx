import React, { useEffect } from 'react'
import { GoArrowRight } from "react-icons/go";
import gsap from 'gsap';

const Contact = () => {
    useEffect(()=>{
        gsap.fromTo('.contactElement', {x:200, opacity:0}, {x:0, opacity:1, duration:.5, stagger:.06, delay:.2})
        gsap.fromTo('.contactCircle', {y:200, opacity:0}, {y:0, opacity:1, duration:.5, delay:.7})
    },[])
  return (
    <div className=' p-6 mt-[80px] max-w-[1440px] mx-auto'>
        <div className="absolute z-[-1] contactCircle top-[0] right-[-10%] w-2/3 md:w-[40%] aspect-square rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/70 via-transparent to-transparent"></div>
        {/* <div className="absolute z-[-1] bottom-[-10%] left-[20%] w-3/5 md:w-[30%] aspect-[12/9] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[rgba(54,102,84,.8)] via-transparent to-transparent"></div> */}
        
            <div className="">
                <div>
                    <div className='max-w-[500px] space-y-8'>
                        <h2 className='contactElement text-3xl font-playfair font-[700] bg-gradient-to-r from-black to-[#383838] inline-block text-transparent bg-clip-text'>Kontakt</h2>
                        <h1 className='contactElement text-6xl font-montalt capitalize'>Skontaktuj się z nami</h1>
                        <p className='contactElement text-3xl capitalize'>Masz jakieś pytania? Napisz, a odpowiemy ci do 24 godzin!</p>
                    </div>
            
                    <div className="mt-[55px]">
                        <div className=' space-y-[55px]'>
                            <div className=' font-mont space-y-2'>
                                <p className='contactElement text-lg font-[600]'>Napisz!</p>
                                <p className='contactElement text-xl font-montalt'>examplemail@gmail.com</p>
                            </div>

                            <div className=' font-mont space-y-2'>
                                    <p className='contactElement text-lg font-[600]'>Zadzwoń!</p>
                                    <p className='contactElement text-xl font-montalt'>+48 111 222 333</p>
                            </div>
                        

                           <div className=' space-y-2'>
                           <p className='contactElement text-lg font-[600]'>Odwiedź!</p>
                           <div className=' space-y-5 font-montalt text-lg'>

                               <div className="contactElement flex justify-between cursor-pointer group max-w-[200px] w-full">
                                    <p className=' group-hover:tracking-wider group-hover:text-zinc-400 transition-all duration-150'>Instagram</p>
                                    <GoArrowRight  className=' mt-[6px] -rotate-45 group-hover:rotate-0 transition-all duration-150'/>
                               </div>

                               <div className="contactElement flex justify-between cursor-pointer group max-w-[200px] w-full">
                                    <p className=' group-hover:tracking-wider group-hover:text-zinc-400 transition-all duration-150'>Facebook</p>
                                    <GoArrowRight  className=' mt-[6px] -rotate-45 group-hover:rotate-0 transition-all duration-150'/>
                               </div>
                               
                                <div className="contactElement flex justify-between cursor-pointer group max-w-[200px] w-full">
                                    <p className=' group-hover:tracking-wider group-hover:text-zinc-400 transition-all duration-150'>Tiktok</p>
                                    <GoArrowRight  className=' mt-[6px] -rotate-45 group-hover:rotate-0 transition-all duration-150'/>
                               </div>

                            </div>
                           </div>

                        </div>

                    </div>
                </div>

                {/* <div className=' w-full max-w-[800px] mt-[100px] space-y-4'>
                    <input type="text" name="" id="" placeholder='Imię'  className=' font-mont font-[500] bg-[#e9e9e9] shadow-[0px_0px_2px_0px] shadow-black/10 focus:outline-none p-3 rounded-2xl w-full'/> <br />
                    <input type="email" name="" id="" placeholder='E-mail'  className=' font-mont font-[500] bg-[#e9e9e9] shadow-[0px_0px_2px_0px] shadow-black/10 focus:outline-none p-3 rounded-2xl w-full'/><br />
                    <textarea name="" id="" cols="30" rows="10" placeholder='Wiadomość' className=' font-mont font-[500] bg-[#e9e9e9] shadow-[0px_0px_2px_0px] shadow-black/10 focus:outline-none p-3 rounded-2xl w-full'></textarea> <br />
                    <div className="relative">
                    <button className=' absolute right-0 bg-zinc-900 px-5 py-2 rounded-full text-white font-montalt text-xl'>Wyślij</button>
                    </div>
                </div> */}
            </div>

    </div>
  )
}

export default Contact