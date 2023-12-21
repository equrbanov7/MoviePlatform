import FeaturedMovie from '@/components/featured-movies'
import React from 'react'

// Using TypeScript

interface Movie {
    poster_path: string;
    title: string;
    overview: string;
    id: number;
    // Add other properties if needed
  }
  
interface MovieContainerProps {
    movie: Movie
}

const MovieContainer:React.FC<MovieContainerProps> = ({movie}) => {
  return (
    <FeaturedMovie  movie={movie} isCompact={false} />
  )
}

export default MovieContainer