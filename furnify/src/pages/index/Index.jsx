import React from 'react'
import IndexAnimation from '../../components/IndexAnimation'
import Header from './Header'
import DescSection from './descSection'
import Bestsellers from '../../components/Bestsellers'
import Bestseller from './Bestseller'
import LatestCollection from './LatestCollection'

const Index = () => {
  return (
    <div className=' p-3 rounded-3xl'>
    <IndexAnimation/>
    <Header/>
    <LatestCollection/>
    <DescSection/>
    <Bestseller/>
    <Bestsellers/>
    </div>

  )
}

export default Index