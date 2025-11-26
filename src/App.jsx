import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./css/app.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { useState, lazy, Suspense } from "react";

// Lazy-load pages
const Home = lazy(() => import("./pages/Home"));
const Tvshow = lazy(() => import("./pages/Tvshow"));
const Movie = lazy(() => import("./pages/Movie"));
const Animation = lazy(() => import("./pages/Animation"));
const Sportslive = lazy(() => import("./pages/Sportslive"));
const Novel = lazy(() => import("./pages/Novel"));
const Mostwatched = lazy(() => import("./pages/Mostwatched"));
const Movieboxapp = lazy(() => import("./pages/Movieboxapp"));

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const noLayoutRoutes = ["/movieboxapp"];
  const hideLayout = noLayoutRoutes.includes(location.pathname);

  return (
    <div className="app-container">
      <Suspense fallback={<div className="text-white p-4">Loading...</div>}>
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
      </Suspense>
    </div>
  );
}

export default App;
