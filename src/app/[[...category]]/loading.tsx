import CategoryLoading from '@/components/categories/loading'
import FeaturedMovieLoading from '@/components/featured-movies/loading'
import MovieSectionLoading from '@/components/movies-section/loading'
import React from 'react'

const Loading = () => {
  return (
    <div>
        <FeaturedMovieLoading />
        <CategoryLoading />
        <MovieSectionLoading />
        <MovieSectionLoading />
        <MovieSectionLoading />
    </div>
  )
}

export default Loading