import Hero from "../components/Hero";
import Carousel from "../components/carousel";
import {
  caroselArray,
  caroselArray2,
  carouselArray3,
  liveArray,
  liveArray2,
} from "../components/array";
import LiveSection from "../components/LiveSection";
function Home() {
  return (
    <div>
      <Hero />
      <div className="carousel-wrapper">
        <Carousel content={caroselArray} heading="Trending Now 🔥" />
        <Carousel content={caroselArray2} heading="Hollywood Movies" />
        <LiveSection content={liveArray} heading="Live" />
        <LiveSection content={liveArray2} heading="Live" />
        <Carousel content={carouselArray3} heading="New Movies" />
      </div>
    </div>
  );
}
export default Home;
