import '../css/Books.css'
function Books({content,heading}) {
  return(
    <div>
         <h1 className="font-bold text-2xl title">{heading}</h1>
      <div className="flex flex-wrap  book-cont overflow-hidden gap-4">
        {content.map((item, index) => (
          <div key={index} className="books-container">
            <div className="books ">
              <img src={item.cover} className="books-cover" />
              <p className="books-title">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) 
}
export default Books
