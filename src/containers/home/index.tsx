import React from 'react'

// Data
import Movies from "@/mocks/movies.json"
import Genres from "@/mocks/genres.json"


import FeaturedMovie from '@/components/featured-movies'
import Categories from '@/components/categories'
import MoviesSection from '@/components/movies-section'



interface Movie {
  poster_path: string;
  title: string;
  overview: string;
  id: number;
  // Add other properties if needed
}
interface selectedCategoryTypes{
  id:string,
  movies: Movie[]
}

interface HomeContainerProps{
  selectedCategory:selectedCategoryTypes,
 
}

const HomeContainer:React.FC<HomeContainerProps> = ({selectedCategory}) => {

 // console.log(selectedCategory.id)
  let titleName = Genres.genres.find((genre) => {
   // console.log(genre.id, selectedCategory.id);
    return genre.id === +selectedCategory.id;
  })?.name;
  
  
  return ( 
    <div> 
      <FeaturedMovie movie={Movies.results[0]} />
      <Categories categories={Genres.genres.slice(0,5)} />

    {
      selectedCategory.movies?.length >0 && (

        <MoviesSection 
        title={titleName}
        
         movies={selectedCategory.movies}
          />
      )
    }


     <MoviesSection title='Popular Films' movies={Movies.results.slice(1,7)} />



     <MoviesSection title='Your Favorites' movies={Movies.results.slice(7,19)} />
    </div>
  )
}

export default HomeContainer