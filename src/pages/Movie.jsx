import Hero from "../components/Hero";
import Carousel from "../components/carousel";
import {
  caroselArray,
  caroselArray2,
  carouselArray3,
  caroselArray4
} from "../components/array";
import Categories from "../components/Categories";
function Movie() {
  return (
    <div className="carousel-wrapper">
      <Hero />
      <Categories />
      <Carousel content={caroselArray} heading="Trending Now 🔥" />
      <Carousel content={caroselArray2} heading="Hollywood Movie" />
      <Carousel content={carouselArray3} heading="New Movie" />
      <Carousel content={caroselArray4} heading="Top 200 All time Box office" />
    </div>
  );
}
export default Movie;
