import React from "react";
import MovieContainer from "@/containers/movies";
import Movies from "@/mocks/movies.json"
import { notFound } from "next/navigation";
//Using TypeScript

interface Params {
  id: string;
}

interface SearchParams {
  id: string;
  error:string
}

interface MoviePageProps {
  params: Params;
  searchParams: SearchParams
}

const MoviePage: React.FC<MoviePageProps> = ({ params,searchParams }) => {
    const movieDetail = Movies.results.find(
        (movie) => movie.id === +params.id
    )
    if(!movieDetail){
        notFound()
    }
    if(searchParams.error === "true"){
        throw new Error("Error happened") 
    }
  return <MovieContainer movie={movieDetail} />
};

export default MoviePage;
