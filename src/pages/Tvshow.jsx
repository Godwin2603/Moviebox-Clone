import { genres,years,countries,sortOptions,languagesAndSubs, movieData } from "../components/array"
import Choice from "../components/Choice"
import Content from "../components/Content"

function Tvshow(){
    return(
        <div className="carousel-wrapper">
        <Choice content={genres} heading="Genres"/>
        <Choice content={countries} heading="Country"/>
        <Choice content={years} heading="Year"/>
        <Choice content={languagesAndSubs} heading="Language"/>
        <Choice content={sortOptions} heading="Sortby"/>
        <Content content={movieData} heading="Watch Tv Series"/>
        </div>
    )
}
export default Tvshow