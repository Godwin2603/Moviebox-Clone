import { useState } from "react";
import "../css/Choice.css";

function Choice({ content, heading }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="choice-wrapper">

      {/* MOBILE header toggle (hidden on desktop) */}
      <div className="choice-mobile-header" onClick={() => setOpen(!open)}>
        <h5>{heading}</h5>
        <i className={`fa fa-chevron-down ${open ? "rotate" : ""}`}></i>
      </div>

      {/* ORIGINAL LAYOUT stays untouched */}
      <div className={`choice ${open ? "show-mobile" : ""}`}>
        <h1 className="text-gray-200 text-sm font-bold w-[5%]">{heading}</h1>

        <ul className="flex gap-4 flex-wrap items-center w-[95%]">
          <li className="bg-white text-black all">All</li>
          {content.map((item, index) => (
            <li key={index} className="text-gray-200 text-sm">
              {item}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default Choice;
