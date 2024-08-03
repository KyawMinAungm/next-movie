import Movies from '@/components/Movies';
import React from 'react'
const token = process.env.TMDB_TOKEN;
async function fetchSearch(query : string) {
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return await res.json();
}

export default async function page({searchParams}: {searchParams : {q : string}}) {
  const search = await fetchSearch(searchParams.q)

  return (
    <div className=''>
      <h3 className="font-bold border-b mb-4 pb-2">
       Search :  {searchParams.q}
      </h3>
      <Movies movies={search.results}/>
    </div>
  )
}
