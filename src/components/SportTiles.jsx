import img1 from "../assets/sports/img1.png";

function SportTiles({ content }) {
  return (
    <div className="p-4" style={{ padding: "1rem" }}>
      <h1 className="text-xl font-semibold mb-4">World Cup Qualifiers: UEFA</h1>
      {content.map((item, index) => (
        <div
          className="bg-[#1c1c1e] flex flex-wrap  tiles  items-center justify-between gap-2"
          style={{ padding: "1rem",marginBottom: "1rem" }}
          key={index}
        >
          {/* LEFT SIDE */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-white font-semibold">Full time</span>
              <span
                className="text-xs px-2 py-1 bg-gray-600 rounded text-white"
                style={{ padding: "2px" }}
              >
                Finished
              </span>
            </div>

            <p className="text-sm text-gray-400 truncate notruncate w-[180px]">
              UEFA Qualification: 1st Round
            </p>
          </div>

          {/* CENTER - TEAMS + SCORE */}
          <div className="flex justify-evenly items-center gap-6">
            {/* Team A */}
            <div className="flex items-center teamA gap-2">
              <span className=" font-bold text-white whitespace-nowrap">
                {item.team1}
              </span>
              <img src={item.cover1} className="sm:w-12 sm:h-12 w-7  h-7 object-contain" />
            </div>

            {/* Score */}
            <div className="flex items-center gap-3 text-gray-300 text-lg font-semibold">
              <span className="text-4xl text-white font-bold">{item.score1}</span>
              <span className="text-4xl text-white font-bold">-</span>
              <span className="text-4xl text-white font-bold">{item.score2}</span>
            </div>

            {/* Team B */}
            <div className="flex items-center teamB gap-2">
              <img src={item.cover2} className="sm:w-12 sm:h-12 w-7 h-7 object-contain" />
              <span className=" font-bold text-white whitespace-normal teams"> 
                {item.team2}
              </span> 
            </div>
          </div>

          <div
            className="border-l border-gray-600  font-semibold  cursor-pointer details"
            style={{ padding: "0.5rem 1rem" }}
          >
            <p>Live Details</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SportTiles;
