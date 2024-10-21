import React from 'react'
import IndexAnimation from '../../components/IndexAnimation'
import Header from './Header'
import DescSection from './DescSection'
import Bestsellers from '../../components/Bestsellers'
import Bestseller from './Bestseller'
import LatestCollection from './LatestCollection'
import { PiStarFourLight, PiHeart, PiPuzzlePieceLight } from "react-icons/pi";
import waves from '../../../public/waves.png'


const Index = () => {
  return (
    <div className=' p-3 rounded-3xl'>
    <IndexAnimation/>
    <Header/>

    <div className=' flex justify-between'>

      <div className='flex space-x-1 font-playfair font-[700] text-[12px] sm:text-lg'>
        <PiStarFourLight className='mt-1'/>
        <h1>STYL</h1>
      </div>
      <div className='flex space-x-1 font-playfair font-[700] text-[12px] sm:text-lg'>
        <PiHeart className='mt-1'/>
        <h1>KOMFORT</h1>
      </div>
      <div className='flex space-x-1 font-playfair font-[700] text-[12px] sm:text-lg'>
        <PiPuzzlePieceLight className='mt-1'/>
        <h1>FUNKCJONALNOŚĆ</h1>
      </div>

      </div>

    <div className="max-w-[1500px] mx-auto px-3 space-y-[60px]">
    <img src={waves} alt="" className=' wavesBg fixed top-0 left-0 z-[-1] opacity-[4%] w-full h-screen object-cover'/>

    <LatestCollection/>
    <DescSection/>
    <Bestseller/>
    <Bestsellers/>
    </div>
    </div>

  )
}

export default Index