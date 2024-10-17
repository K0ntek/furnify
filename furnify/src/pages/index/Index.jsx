import React from 'react'
import IndexAnimation from '../../components/IndexAnimation'
import Header from './Header'
import DescSection from './descSection'
import Bestsellers from '../../components/Bestsellers'
import Bestseller from './Bestseller'
import LatestCollection from './LatestCollection'
import { PiStarFourLight, PiHeart, PiPuzzlePieceLight } from "react-icons/pi";

const Index = () => {
  return (
    <div className=' p-3 rounded-3xl'>
    <IndexAnimation/>
    <Header/>
    <div className="max-w-[1440px] mx-auto px-3 space-y-[60px]">

      <div className=' flex justify-between'>

        <div className='flex space-x-1 font-playfair font-[700] text-lg'>
          <PiStarFourLight className='mt-1'/>
          <h1>STYL</h1>
        </div>
        <div className='flex space-x-1 font-playfair font-[700] text-lg'>
          <PiHeart className='mt-1'/>
          <h1>KOMFORT</h1>
        </div>
        <div className='flex space-x-1 font-playfair font-[700] text-lg'>
          <PiPuzzlePieceLight className='mt-1'/>
          <h1>FUNKCJONALNOŚĆ</h1>
        </div>

      </div>
    <LatestCollection/>
    <DescSection/>
    <Bestseller/>
    <Bestsellers/>
    </div>
    </div>

  )
}

export default Index