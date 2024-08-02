
import React from 'react'
import { Button } from './ui/button';
import Link from 'next/link';
interface genre {
  name : string,
  id : number
}

const token = process.env.TMDB_TOKEN

async function fetchGenres() {
  const res = await fetch('https://api.themoviedb.org/3/genre/movie/list',{
    headers : {
      Authorization :`Bearer ${token}`
    }
  })
  return await res.json()
}

export default async function Sidebar() {
  const {genres } = await fetchGenres();
  console.log(genres)

  return (
    <aside className="flex flex-col gap-2 w-[220px]">
      <Button className="justify-start" variant="outline" asChild>
        <Link href="/">All Movies</Link>
      </Button>
      {
        
        genres.map((genre : genre) => {
          return (
  
        <Button key={genre.id} className="justify-start" variant="outline" asChild>
          <Link href={`/genres/${genre.name}/${genre.id}`}>{genre.name}</Link>
        </Button>
          )
        })}

      
    </aside>
  );
}
