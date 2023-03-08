import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Movies } from "./pages/Movies/Movies";
import { LastWatch } from "./pages/LastWatch/LastWatch";
import { Favorites } from "./pages/Favorites/Favorites";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/lastWatch" element={<LastWatch />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  )
}