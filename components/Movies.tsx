import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
interface movie {
    id : number
    title: string
    poster_path : string
    release_date : string
    overview  :string
}

interface Props {
    movies :movie[]
}
export default function Movies ({movies}: Props) {
    const poster = 'http://image.tmdb.org/t/p/w342'
  return (
    <>
        <div className="flex flex-row gap-5 flex-wrap">
           
           {
           movies.map(movie=> {
            return (
                <div key={movie.id} className=' w-[200px] text-center flex flex-col pb-4'>
                    {
                        movie.poster_path ? (
                            <div>
                                <Link href={`movie/${movie.id}`}>
                                    <Image className='w-full hover:scale-105 transition-all' width={200} height={300} alt='' src={`${poster}${movie.poster_path}`}/>
                                </Link>
                            </div>
                        ):(
                            <div className="h-[300px]"></div>
                        )
                       

                    }

                    
                    <h3 className='text-lg text-gray-700'>{movie.title}</h3>
                    <span className='text-sm text-gray-500'>{movie.release_date.split('-')[0]}</span>

                </div>
            )
           })
           }
        </div>
    </>
  )
}

