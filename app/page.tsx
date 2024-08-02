import Movies from '@/components/Movies'
import React from 'react'

const token = process.env.TMDB_TOKEN;
async function fetchPopular() {
  const res = await fetch('https://api.themoviedb.org/3/movie/popular',{
    headers : {
      Authorization : `Bearer ${token}`
    }
  })
  return await res.json()
}
async function fetchTrending() {
  
  const res = await fetch('https://api.themoviedb.org/3/trending/movie/day',{

    headers : {
      Authorization : `Bearer ${token}`
    }
  })
  return await res.json()
  
}

export default async function page() {

  const popular = await fetchPopular()
  const trending = await fetchTrending()

  

  return (
    <div className=''>
      <h4 className='text-xl font-bold mb-5 border-b pb-4'>
        Popular
      </h4>
      <Movies  movies={popular.results}/>

      <h4 className='text-xl font-bold mb-5 border-b pb-4 mt-8'>
        Trending
      </h4>
      <Movies  movies={trending.results}/>

    
      

    </div>
  )
}
