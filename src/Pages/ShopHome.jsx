import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import LatestCollection from '../Components/LatestCollection/LatestCollection'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
const ShopHome = () => {
  return (
    <div>
      <Hero/>
   <Popular/>
   <Offers/>
   <LatestCollection/>
   <NewsLetter/>
    </div>
  )
}

export default ShopHome

