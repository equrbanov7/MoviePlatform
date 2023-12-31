import React from "react";
import HomeContainer from "@/containers/home";
import Movies from "@/mocks/movies.json"

interface Params {
  id: string;
  category: string[];

}


interface HomeProps {
  params: Params;

}

async function delay(ms:number) {
  return new Promise((resolve) => setTimeout(resolve,ms))
}

  const Home: React.FC<HomeProps> = async ({ params }) => {
 
    await delay(20000)
  // console.log(params.category?.[0]);

  // Initialize selectedCategory as false
  let selectedCategory: boolean = false;

  if (params.category?.length>0) {
    selectedCategory = true;
  }

  return (
    <HomeContainer
      selectedCategory={{
        id: params.category?.[0],
        movies: selectedCategory ? Movies.results.slice(0, 7) : [],
      }}    />
  );
};

export default Home;
 