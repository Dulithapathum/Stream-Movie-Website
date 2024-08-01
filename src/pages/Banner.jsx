import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaPlay } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./baner.css";

export const Banner = () => {
  const [movies, setMovies] = useState([]);

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

  return (
    <div className="relative max-w-[1200px] m-auto  overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        spaceBetween={30}
        slidesPerView={1}
        className="swiper-container"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="relative h-[100vh]">
              <img
                className="w-full h-full object-cover "
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.title}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-52">
                <div className="flex items-center gap-4">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="max-w-[200px] h-auto rounded-md shadow-md"
                  />
                  <div>
                    <h1 className="text-white uppercase bg-blue-500 w-fit px-2 rounded-md mb-2">
                      {movie.original_language}
                    </h1>
                    <h1 className="text-white font-bold text-3xl">
                      {movie.title}
                    </h1>
                    <p className="text-white">{movie.overview}</p>
                    <button className="bg-red-500 text-white text-xl  flex items-center justify-center rounded-full w-12 h-12 mt-2  hover:bg-red-800">
                    <FaPlay />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
