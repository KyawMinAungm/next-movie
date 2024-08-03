import Image from "next/image";
import React from "react";

const token = process.env.TMDB_TOKEN;
async function fetchCasts(id: number) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return await res.json();
}

export default async function Persons({movie} : {movie : {id : number,casts : string[]}}) {
  const { id } = movie;
  const casts = await fetchCasts(id);
  const profile = "http://image.tmdb.org/t/p/w185";

  return (
    <div className="flex flex-row flex-wrap gap-10 justify-center mt-6">

       
      {casts.cast.map((cast : {id : number,profile_path : string, name : string, character : string}) => {
        return (
          <div
            className="w-[180px] rounded overflow-hidden hover:scale-105 transition-all bg-gray-100 text-center flex flex-col justify-between"
            key={cast.id}
          >
            {cast.profile_path ? ( 
            <Image src={profile + cast.profile_path} width={180} height={100} alt=""/>) : (
                <div className=""></div>
            )}

            <div className=" p-2">
                <div className="text-sm">{cast.name}</div>
                <span className="text-sm text-gray-500">{cast.character}</span>
            </div>
          </div>

        );
      })}
    </div>
  );
}
