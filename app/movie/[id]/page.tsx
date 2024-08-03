import Persons from "@/components/Persons";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import React from "react";

interface genre {
  id: number;
  name: string;
}

const token = process.env.TMDB_TOKEN;
async function fetchMovie(id: string) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return await res.json();
}

export default async function page({ params }: { params: { id: string } }) {
  const { id } = params;
  const movie = await fetchMovie(id);
  const cover = "https://image.tmdb.org/t/p/w1280";

  return (
    <div>
      <h3 className="font-bold">
        {movie.title}{" "}
        <span className="ml-1">({movie.release_date.split("-")[0]})</span>
      </h3>
      <div className="mb-4 mt-2">
        {movie.genres.map((genre: genre) => {
          return (
            <Badge className="mr-2" variant={"outline"} key={genre.id}>
              {genre.name}
            </Badge>
          );
        })}
      </div>

      <Image
        src={cover + movie.backdrop_path}
        width={1280}
        height={500}
        alt=""
      />

      <p className="">{movie.overview}</p>

      <div className="mt-5">
        <h3 className="font-bold border-b text-xl mb-4 pb-2">Starring</h3>
        <Persons movie={movie} />
      </div>
    </div>
  );
}
