import "../css/content.css";
function Content({ content, heading }) {
  return (
    <div>
      <h1 className="font-bold text-2xl title">{heading}</h1>
      <div className="flex flex-wrap overflow-hidden gap-4">
        {content.map((item, index) => (
          <div key={index} className="content-container">
            <div className="content ">
              <p className="rating text-yellow-500">{item.rating}</p>
              <img src={item.cover} className="content-cover" />
              <p className="content-title">{item.title}</p>
              <small className="content-title">{item.cast}</small>
              <small className="year">{item.year}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Content;
