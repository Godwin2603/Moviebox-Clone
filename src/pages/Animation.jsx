import { aniData, sortOptions, years } from "../components/array";
import Choice from "../components/Choice";
import Content from "../components/Content";

function Animation(){
    const country=[
        "United States",
        "United Kingdom",
        "France",
        "Japan",
        "Cnina",
        "Korea",
        "other"
    ]
    return(
        <div className="carousel-wrapper">
            <Choice heading="Country" content={country}/>
            <Choice heading='Years' content={years}/>
            <Choice heading='Sort by' content={sortOptions}/>
            <Content content={aniData} heading="Anime Show & Movies"/>
        </div>
    )
}
export default Animation