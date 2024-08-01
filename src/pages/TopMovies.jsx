import { useEffect, useState } from "react"

export const TopMovies = () => {
const [topMovies,setTopMovies]=useState([])
useEffect(()=>{
    const getdata= async()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZjYwZDJjYjJiMDdjNzIxMjNiZDgyYjhmNzY3MjY2MCIsIm5iZiI6MTcyMjQ0NTQzNS4yMDIzNjYsInN1YiI6IjY2YWE2YjcwZGNiMjY3MWE5NmJkMGMwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2wno1GHtdJNNVyVv9TUcCLeM3iu2f4jQhwp2s9FvZKk'
            }
          };
          
         await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
            .then(response => response.json())
            .then(response => setTopMovies(response.results))
            .catch(err => console.error(err));
    }
    getdata()
},[])


  return (
    <div className="w-[1200px] m-auto ">
        <h1 className="text-yellow-300 font-semibold mt-8 text-3xl text-center uppercase">Top Movies</h1>
        <center><hr className=" w-20  border-t-4 border-yellow-400 mt-2  " /></center>
        <div className="flex w-full flex-wrap  justify-evenly">
        {topMovies.slice(0, 14).map((movie)=>{
            return <>
            <div>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-40" />
            </div>
            </>
        })}
        </div>
       
    </div>
  )
}
