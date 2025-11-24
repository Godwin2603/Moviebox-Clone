import "../css/Sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar({isOpen}) {
  const baseClasses =
    "flex items-center gap-3 transition p-2 rounded text-gray-400 hover:text-white";
 const activeClasses = "active gradient-icon";


  const getNavLinkClass = ({ isActive }) =>
    isActive ? `${baseClasses} ${activeClasses}` : baseClasses;

  return (
    <aside className={`flex-col bg-black text-white h-full fixed justify-between w-[15%] left-0 ${isOpen ? "translate-x-0 " : "-translate-x-full"}`}>
      <div className="flex flex-col overflow-y-auto">

        {/* Language */}
        <div className="border-b border-gray-900 lang">
          <select className="text-gray-500">
            <option value="en">ENGLISH</option>
            <option value="ar">العربية</option>
            <option value="fr">Français</option>
            <option value="id">Bahasa Indonesia</option>
            <option value="hi">हिन्दी</option>
            <option value="ur">اردو</option>
            <option value="fil">Filipino</option>
          </select>
        </div>

        {/* Main Links */}
        <div className="flex flex-col gap-4 links border-b border-gray-900">
          <li className="link rounded">
            <NavLink to="/" className={getNavLinkClass}>
              <i className="fa fa-home text-gray-500"></i> Home
            </NavLink>
          </li>

          <li className="link">
            <NavLink to="/tvshow" className={getNavLinkClass}>
              <i className="fa fa-tv text-gray-500"></i> TV Shows
            </NavLink>
          </li>

          <li className="link">
            <NavLink to="/movies" className={getNavLinkClass}>
              <i className="fa fa-film text-gray-500"></i> Movies
            </NavLink>
          </li>

          <li className="link">
            <NavLink to="/animation" className={getNavLinkClass}>
              <i className="fa fa-dragon text-gray-500"></i> Animation
            </NavLink>
          </li>

          <li className="link">
            <NavLink to="/sportslive" className={getNavLinkClass}>
              <i className="fa fa-futbol text-gray-500"></i> Sports Live
            </NavLink>
          </li>

          <li className="link">
            <NavLink to="/novel" className={getNavLinkClass}>
              <i className="fa fa-book text-gray-500"></i> Novel 🔥
            </NavLink>
          </li>

          <li className="link">
            <NavLink to="/most-watched" className={getNavLinkClass}>
              <i className="fa fa-eye text-gray-500"></i> Most Watched
            </NavLink>
          </li>

          <li className="link">
            <NavLink to="/movieboxapp" className={getNavLinkClass}>
              <i className="fa fa-mobile-alt text-gray-500"></i> MovieBox App
            </NavLink>
          </li>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col gap-2 border-b border-gray-900">
          <div className="flex gap-2 icon-container">
            <a className="bg-gray-500 icons"><i className="fa-brands fa-x text-black"></i></a>
            <a className="bg-gray-500 icons"><i className="fa-brands fa-tiktok text-black"></i></a>
            <a className="bg-gray-500 icons"><i className="fa-brands fa-facebook text-black"></i></a>
            <a className="bg-gray-500 icons"><i className="fa-brands fa-whatsapp text-black"></i></a>
            <a className="bg-gray-500 icons"><i className="fa-brands fa-telegram text-black"></i></a>
          </div>

          <small className="text-gray-500">moviebox.ng@mbox.ng</small>
          <small className="text-gray-500">Always Find Us</small>
        </div>
      </div>

      {/* Download App Button */}
      <div className="flex button-container">
        <button className="text-black flex items-center gap-4 bg-linear-to-r from-[#1cb7ff] to-[#2ff58b] rounded-2xl p-2">
          <i className="fa fa-mobile-alt"></i>
          <p className="border-r border-gray-900 pr-4">Download App</p>
          <i className="fa fa-qrcode"></i>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
