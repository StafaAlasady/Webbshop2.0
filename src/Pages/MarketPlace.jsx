import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import { Popular } from '../Components/Popular/popular'
import { NewCollections } from '../Components/NewCollections/NewCollections'
import { NewsLetter } from '../Components/NewsLetter/NewsLetter'



export const MarketPlace = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}
