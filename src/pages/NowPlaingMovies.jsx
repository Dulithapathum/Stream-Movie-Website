import { useEffect, useState } from "react"
import { FaPlay } from "react-icons/fa";


export const NowPlaingMovies = () => {
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
          
         await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
            .then(response => response.json())
            .then(response => setTopMovies(response.results))
            .catch(err => console.error(err));
    }
    getdata()
},[])


  return (
    <div className="w-[1200px] m-auto pb-8 ">
        <h1 className="text-yellow-300 font-semibold mt-8 text-3xl text-center uppercase pb-8 ">Upcomming Movies</h1>
        
        <div className="flex w-full flex-wrap  justify-evenly">
        {topMovies.slice(0, 14).map((movie) => (

          <div key={movie.id} className="w-40 relative group">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full" />
           
            <div className="absolute inset-0 bg-[#01010166] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer" >     <FaPlay className="text-white text-4xl" />
           
            </div>
          </div>
        ))}
        </div>
       
    </div>
  )
}
