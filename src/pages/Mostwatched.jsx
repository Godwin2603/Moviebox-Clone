import { Link } from "react-router-dom";
import "../css/mostwatched.css";
import Trend from "../components/Trend";
import { trendingArray } from "../components/array";
function Mostwatched() {
  return (
    <div className="carousel-wrapper wrap">
      <div className="flex items-center gap-4">
        <Link to="/" className="text-gray-500 text-sm">
          Home <i className="fa fa-chevron-right"></i>
        </Link>
        <p className="text-sm">Trending now 🔥</p>
      </div>
      <div className="trend">
        <div>
          <h1 className="font-bold text-2xl">Trending Now 🔥</h1>
        </div>
        <div className="flex gap-4 flex-nowrap overflow-x-scroll">
          <small className="genre">Toplist</small>
          <small className="genre">Movie</small>
          <small className="genre">New tv</small>
          <small className="genre">New movie</small>
          <small className="genre">Nollywood</small>
          <small className="genre">Sa drama</small>
          <small className="genre">Black drama</small>
          <small className="genre">Western tv</small>
          <small className="genre">K-drama</small>
          <small className="genre">C-drama</small>
          <small className="genre">Thai-drama</small>
          <small className="genre">Anime</small>
          <small className="genre">Animated Film</small>
          <small className="genre">Bollywood</small>
          <small className="genre">Southhindi</small>
          <small className="genre">Bet + Original</small>
          <small className="genre">Showmax original</small>
        </div>
          <Trend content={trendingArray}/>
      </div>
    </div>
  );
}
export default Mostwatched;
