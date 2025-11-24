import board from "../assets/sports/board.png";
function Date() {
  return (
    <div className="flex justify-evenly gap-4 items-center" style={{ marginTop: "1rem" ,padding: "1rem"}}>
       <div className="hidden lg:flex">
          <i className="fa fa-chevron-left text-gray-300"></i>
        </div>
      <div className="flex items-center justify-around gap-8  overflow-x-auto relative">
        <div className="flex flex-col items-center justify-center">
          <p className="font-bold text-gray-300">FRI</p>
          <p className="text-gray-400">14 Nov</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-bold text-gray-300">SAT</p>
          <p className="text-gray-400">15 Nov</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-bold text-gray-300">SUN</p>
          <p className="text-gray-400">16 Nov</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-bold text-gray-300">MON</p>
          <p className="text-gray-400">17 Nov</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-linear-to-r from-[#1cb7ff] to-[#2ff58b] bg-clip-text">
          <p className="font-bold  text-transparent">TODAY</p>
          <p className="text-transparent">18 Nov</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-bold text-gray-300">WED</p>
          <p className="text-gray-400">19 Nov</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-bold text-gray-300">THU</p>
          <p className="text-gray-400">20 Nov</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-bold text-gray-300">FRI</p>
          <p className="text-gray-400">21 Nov</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-bold text-gray-300">SAT</p>
          <p className="text-gray-400">22 Nov</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-bold text-gray-300">SUN</p>
          <p className="text-gray-400">23 Nov</p>
        </div>
      </div>
       <div className="hidden lg:flex">
          <i className="fa fa-chevron-right text-gray-300"></i>
        </div>
      <div className="flex gap-4">
        <div>
          <img src={board} className="h-8 w-8" />
        </div>
        <h1 className="text-gray-300 font-bold text-2xl">Live</h1>
      </div>
    </div>
  );
}
export default Date;
