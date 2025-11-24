import logo from "../assets/logo.png";
import "../css/navbar.css";

function Navbar({onToggle}) {
  return (
    <div>
      <nav className="overflow-auto gap-8  flex flex-row sm:flex-row justify-between items-center border-b border-gray-900 w-full  backdrop-blur-xs bg-transparent shadow-md fixed top-0 left-0 z-10">
        <div className="flex gap-4 items-center top-sec">
          <a href="#" onClick={onToggle}>
            <i className="fa fa-bars"></i>
          </a>
          <img src={logo} />
          <p className="logo-title">MovieBox</p>
          <div className="search-container">
            <div className="input border border-gray-300 rounded-lg flex items-center w-full">
              <i className="fa fa-search"></i>
              <input
                type="text"
                placeholder="search Movies/Tv shows"
                className=" outline-none bg-transparent"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="hidden lg:inline-flex bg-linear-to-r from-[#1cb7ff] to-[#2ff58b] text-white px-4 py-2 rounded-3xl items-center gap-2 text-sm">
            <i className="fa fa-mobile-alt"></i>
            Download App
          </button>
          <button className="rounded-xl  inline-flex items-center gap-2">
            <i className="fa fa-history"></i> 
            <span className="hide">Watch history</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
