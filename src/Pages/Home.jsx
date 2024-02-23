import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import { Popular } from '../Components/Popular/popular'
import { NewCollections } from '../Components/NewCollections/NewCollections'


export const Home = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <NewCollections/>
    </div>
  )
}
