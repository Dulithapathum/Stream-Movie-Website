import { useEffect, useState, useRef } from "react";
import "./baner.css";

export const Banner = () => {
  const [movies, setMovies] = useState([]);
  const carouselRef = useRef(null);
  const scrollIntervalRef = useRef(null);

  useEffect(() => {
    const getData = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZjYwZDJjYjJiMDdjNzIxMjNiZDgyYjhmNzY3MjY2MCIsIm5iZiI6MTcyMjQ0NTQzNS4yMDIzNjYsInN1YiI6IjY2YWE2YjcwZGNiMjY3MWE5NmJkMGMwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2wno1GHtdJNNVyVv9TUcCLeM3iu2f4jQhwp2s9FvZKk",
        },
      };

      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
          options
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (err) {
        console.error(err);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    const scrollInterval = 3000;
    const scrollStep = carouselRef.current.clientWidth;

    const startAutoScroll = () => {
      scrollIntervalRef.current = setInterval(() => {
        if (
          carouselRef.current.scrollLeft >=
          carouselRef.current.scrollWidth - carouselRef.current.clientWidth
        ) {
          carouselRef.current.scrollLeft = 0;
        } else {
          carouselRef.current.scrollLeft += scrollStep;
        }
      }, scrollInterval);
    };

    startAutoScroll();

    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, [movies]);

  return (
    <div className="relative max-w-[1200px] m-auto overflow-hidden">
      <div
        className="flex overflow-x-scroll scrollbar-hide scroll-smooth"
        ref={carouselRef}
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="flex-none w-full p-4 relative h-[100vh]  "
          >
            <img
              className="w-full h-auto rounded-lg shadow-lg absolute bg-[#000000dd] "
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={movie.title}
            />
            <div className=" flex absolute gap-8 items-center bg-[#00000085] w-full h-72 top-96 px-5">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="max-w-[200px] h-72 rounded-md shadow-md"
              />
              <div>
                <h1 className="text-white uppercase bg-blue-500 w-fit px-2 rounded-md mb-2">{movie.original_language}</h1>
                <h1 className="text-white font-bold text-3xl">{movie.title}</h1>
                <p className="text-white text-justify">{movie.overview}</p>
                <button className="bg-red-500 text-white text-xl h-8   w-32 rounded-md mt-6 px-5 hover:bg-red-800">Play</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
