import Hero from "../components/Hero"
import Carousel from "../components/carousel"
import { caroselArray } from "../components/array"
import Categories from "../components/Categories"
function Movie(){
    return(
        <div className="carousel-wrapper">
            <Hero/> 
            <Categories/>
            <Carousel content={caroselArray} heading="Trending Now 🔥" />
        </div>
    )
}
export default Movie