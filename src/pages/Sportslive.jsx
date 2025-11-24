import '../css/sportslive.css'
import football from "../assets/sports/football.png"
import cricket from "../assets/sports/cricket.png"
import basketball from "../assets/sports/basketball.png"
import Date from '../components/Date'
import SportTiles from '../components/SportTiles'
import { sportArray } from '../components/array'

function Sportslive(){
    return(
        <div className="carousel-wrapper">
            <div>
                <div className="flex items-center gap-4 "style={{padding: "1rem"}}>
                    <p className="inline-flex justify-center items-center gap-2 bg-[#ffffff1a] padd"><img src={football} className='w-4 h-4'/>Football</p>
                    <p className="inline-flex items-center justify-center gap-2 padd"><img src={cricket}   className='w-4 h-4'/> Cricket</p>
                    <p className="inline-flex items-center justify-center gap-2 padd"><img src={basketball}  className='w-4 h-4' />Basketball</p>
                </div>
                <Date/>
                <SportTiles content={sportArray}/>
            </div>
        </div>
    )
}
export default Sportslive