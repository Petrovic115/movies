import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./Pages/Movies";
import TvShows from "./Pages/TvShows";
import Navbar from "./Pages/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/movies" element={<Movies />} />
          <Route exact path="/tvshows" element={<TvShows />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
