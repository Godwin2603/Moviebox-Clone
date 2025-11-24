import { useRef, useEffect, useState } from "react";
import img1 from "../assets/home/img1.png";
import img2 from "../assets/home/img2.png";
import img3 from "../assets/home/img3.png";
import img4 from "../assets/home/img4.png";
import img5 from "../assets/home/img5.png";
import img6 from "../assets/home/img6.png";
import img7 from "../assets/home/img7.png";
import img8 from "../assets/home/img8.png";
import img9 from "../assets/home/img9.png";
import img10 from "../assets/home/img10.png";

import tv from "../assets/tv.png";
import media from "../assets/media.png";
import "../css/Hero.css";

function Hero() {
  const heroRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const movies = [
    { title: "IT: Welcome to Derry", cover: img1, year: 2025, genre: "Fantasy, Horror", icon: tv },
    { title: "World Breaker", cover: img2, year: 2025, genre: "Action, Scifi", icon: media },
    { title: "Frankenstein", cover: img3, year: 2025, genre: "Drama, Fantasy, Horror", icon: media },
    { title: "Maxton Hall - The world between us", cover: img4, year: 2024, genre: "Drama, Romance", icon: tv },
    { title: "Dear X", cover: img5, year: 2024, genre: "Crime, Drama, Romance", icon: tv },
    { title: "The Manipulated", cover: img6, year: 2025, genre: "Action, Crime, Drama", icon: tv },
    { title: "Tyler Perry's finding joy", cover: img7, year: 2025, genre: "Drama", icon: media },
    { title: "All's Fair", cover: img8, year: 2025, genre: "Drama", icon: tv },
    { title: "Tron: Ares", cover: img9, year: 2025, genre: "Action, Adventure, Scifi", icon: media },
    { title: "The Witcher", cover: img10, year: 2019, genre: "Action, Adventure, Drama", icon: tv },
  ];

  const goToSlide = (index) => {
    setActiveIndex(index);
    heroRef.current.scrollTo({
      left: index * heroRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    const newIndex = activeIndex === 0 ? movies.length - 1 : activeIndex - 1;
    goToSlide(newIndex);
  };

  const scrollRight = () => {
    const newIndex = activeIndex === movies.length - 1 ? 0 : activeIndex + 1;
    goToSlide(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = activeIndex === movies.length - 1 ? 0 : activeIndex + 1;
      goToSlide(newIndex);
    }, 10000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="hero-wrapper">
      <div className="hero" ref={heroRef}>
        {movies.map((movie, idx) => (
          <div className="movie-item" key={idx}>
            <img src={movie.cover} alt={movie.title} className="movie-cover" />
            <div className="movie-title">
              <h1>{movie.title}</h1>
              <div className="movie-des">
                <img src={movie.icon} className="h-4 w-4 border-r border-gray-200" />
                <p className="border-r border-gray-200">{movie.year}</p>
                <p>{movie.genre}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button onClick={scrollLeft} className="scroll-button btn-left">
        <i className="fa fa-chevron-left"></i>
      </button>

      <button onClick={scrollRight} className="scroll-button btn-right">
        <i className="fa fa-chevron-right"></i>
      </button>

      <div className="dots flex gap-1">
        {movies.map((_, idx) => (
          <small
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`dot rounded-full inline-flex cursor-pointer transition-all ${
              activeIndex === idx
                ? "bg-white w-3 h-3"
                : "bg-gray-500 w-2 h-2"
            }`}
          ></small>
        ))}
      </div>
    </div>
  );
}

export default Hero;
