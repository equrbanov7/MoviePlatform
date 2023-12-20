import React from 'react'

// Data
import Movies from "@/mocks/movies.json"
import Genres from "@/mocks/genres.json"


import FeaturedMovie from '@/components/featured-movies'
import Categories from '@/components/categories'

const HomeContainer = () => {
  return (
    <div>
      <FeaturedMovie movie={Movies.results[0]} />
      <Categories categories={Genres.genres.slice(0,5)} />
    </div>
  )
}

export default HomeContainer