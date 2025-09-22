import React from 'react'
import Carousel from './Carousel'
import MovieStatCarousel from './MovieStatCarousel'

const Home = ({movies}) => {
  return (
    <div>
       <Carousel movies={movies} />
       {/* <MovieStatsCards /> */}
       <MovieStatCarousel />
    </div>
  )
}

export default Home
