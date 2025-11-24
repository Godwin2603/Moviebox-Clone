import img2 from '../assets/movie/img2.png'
import '../css/categories.css'
function Categories(){
    return(
        <div className='flex gap-4 categories'>
            <div className='stack1'>
                <h1 className=''>All</h1>
                <i className="fa fa-filter"></i>
            </div>
            <div className='stack2'>
                <h1>Hollywood</h1>
            </div>
            <div className='stack3'>
                <h1>Nollywood</h1>
            </div>
            <div className='stack4'>
                <h1>Bollywood</h1>
            </div>
                <div className='stack5'>
                <h1>Trending</h1>
            </div>
                <div className='stack6'>
                <h1>Latest</h1>
            </div>
        </div>
    )
}
export default Categories