import React from 'react'
import Carousel from './Carousel'

const Home = ({movies}) => {
  return (
    <div>
       <Carousel movies={movies} />
    </div>
  )
}

export default Home
