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
      
       
    </div>
  )
}
