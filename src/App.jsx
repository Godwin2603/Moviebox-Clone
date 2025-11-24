import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./css/app.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Tvshow from "./pages/Tvshow";
import Movie from "./pages/Movie";
import Animation from "./pages/Animation";
import Sportslive from "./pages/Sportslive";
import Novel from "./pages/Novel";
import Mostwatched from "./pages/Mostwatched";
import Movieboxapp from "./pages/Movieboxapp";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const location = useLocation();

  const noLayoutRoutes = ["/movieboxapp"];

  const hideLayout = noLayoutRoutes.includes(location.pathname);

  return (
    <div className="app-container">
      {!hideLayout ? (
        <>
          <Navbar onToggle={() => setIsOpen(!isOpen)} />
          <div className="main-layout">
            <Sidebar isOpen={isOpen} />
            <div
              className={`main-content transition-all duration-300 ${
                isOpen ? "main-content" : "closed"
              }`}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tvshow" element={<Tvshow />} />
                <Route path="/movies" element={<Movie />} />
                <Route path="/animation" element={<Animation />} />
                <Route path="/sportslive" element={<Sportslive />} />
                <Route path="/novel" element={<Novel />} />
                <Route path="/most-watched" element={<Mostwatched />} />
                <Route path="/movieboxapp" element={<Movieboxapp />} />
              </Routes>
            </div>
          </div>
        </>
      ) : (
        <div className="full-screen-page">
          <Routes>
            <Route path="/movieboxapp" element={<Movieboxapp />} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
