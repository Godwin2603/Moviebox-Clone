function Trend({ content }) {
  return (
    <div className="flex gap-10 flex-wrap">
      {content.map((item, index) => (
        <div className="flex gap-6 w-full sm:w-[400px]" key={index}>
          {/* LEFT: Image + Number */}
          <div className="relative w-[140px] shrink-0">
            <img
              src={item.cover}
              className="w-full h-auto rounded hover:opacity-50"
            />
            <p className={`absolute top-0 left-0 text-white font-bold text-3xl ${item.sty  ? item.sty : "num"}   rounded`} style={item.pad}>
              {item.number}
            </p>
          </div>

          {/* RIGHT: Text & Play */}
          <div className="flex flex-col justify-around flex-1 min-w-0">
            <div>
              <p className="font-semibold text-lg hover:underline">
                {item.title}
              </p>

              <div className="flex flex-wrap gap-3 items-center text-sm my-1">
                <img
                  src={item.icon}
                  className="w-4 h-4 border-r border-gray-400 bd"
                />

                <span className="flex items-center gap-1 border-r border-gray-400 bd">
                  <i className="fa fa-star text-yellow-500"></i>
                  {item.rating}
                </span>

                <span className="border-r border-gray-400 bd">{item.year}</span>
                <span className="gen">{item.genre}</span>
              </div>

              <p className="text-gray-400 text-sm text-ellipsis overflow-hidden max-h-20  hover:underline">
                {item.description}
              </p>
            </div>

            <button className="bg-white btn-col text-black px-4 py-2 rounded flex items-center gap-2 w-fit mt-2">
              <i className="fa fa-play"></i>
              Play
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Trend;
