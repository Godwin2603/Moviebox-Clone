import { novarr1,novarr2,novarr3 } from "../components/array"
import Books from "../components/Books"


function Novel(){
    return(
        <div className="carousel-wrapper">
            <Books content={novarr1} heading="Novel"/>
            <Books content={novarr2} heading="Comics"/>
            <Books content={novarr3} heading="Tv Show"/>
        </div>
    )
}
export default Novel