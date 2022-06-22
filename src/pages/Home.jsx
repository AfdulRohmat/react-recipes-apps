import React from 'react'
import PopularRecipes from '../components/PopularRecipes'
import Veggie from '../components/Veggie'

const Home = () => {
  return (
    <>
        <div className=''>
            <PopularRecipes />
            <Veggie />
        </div>
    </>
  )
}

export default Home