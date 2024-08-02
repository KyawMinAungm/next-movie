import Movies from '@/components/Movies';
import React from 'react'

const token = process.env.TMDB_TOKEN;
async function fetchMovies(id : string) { 
  const res = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${id}`,{
    headers : {
      Authorization : `Bearer ${token}`
    }
  })
  return await res.json()
}
export default async function page({params} : {params : {id : string , name : string}}) {
const {id} = params
const byGenres = await fetchMovies(id)
  return (
    <div>
      <h4 className='text-xl font-bold mb-5 border-b pb-4'>
        {params.name}
      </h4>
      <Movies  movies={byGenres.results}/>
    </div>
  )
}
