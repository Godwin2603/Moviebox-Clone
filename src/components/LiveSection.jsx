import '../css/LiveSection.css'
import Countdown from './Counter'
function LiveSection({content,heading}){
    return(
        <div>
            <div className='flex items-center justify-between heading'>
                <h1>{heading}</h1>
                <button className='text-gray-500 font-bold hover:text-white'>More <i className="fa fa-chevron-right"></i></button>
            </div>
            <div className='flex gap-4 overflow-x-auto'>
                {content.map((item,index)=>(
                    <div key={index} className='match-graphic'>
                       <div className="items">
                         <h6 className='header-info'>Upcoming - <Countdown start={item.countdown}/> </h6>
                        <div className='teams-container'>
                            <img src={item.cover1} className='team-logo'/>
                            <span className='vs-text'>Vs</span>
                            <img src={item.cover2} className='team-logo' />
                        </div>
                       </div>
                       <small className='overlay'>{item.title}</small>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default LiveSection 