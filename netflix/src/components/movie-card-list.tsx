
'use client';

import MovieCard from "./movie-card";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { searchMovies } from "@/actions/movieActions";
import { Spinner } from "@material-tailwind/react";
import { useInView } from 'react-intersection-observer';

export default function MovieCardList() {  
    const getAllMoviesQuery = useQuery({ 
        queryKey: ['movie'],
        queryFn: () => searchMovies()
    });

    const { ref, inView } = useInView({
        threshold: 0
    });

    return (
        <div className="grid gap-1 md:grid-cols-4 grid-cols-3 w-full h-full">
            {
                getAllMoviesQuery.isLoading && <Spinner />
            }
            {
                getAllMoviesQuery.data && (
                <>
                    { 
                        getAllMoviesQuery.data.map(movie => <MovieCard key={movie.id} movie={movie} />) 
                    }
                    <div ref = {ref}></div>
                </>
                )
            }
        </div>
    );
};