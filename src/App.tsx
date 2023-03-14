import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Movies } from "./pages/Movies/Movies";
import { LastWatch } from "./pages/LastWatch/LastWatch";
import { Favorites } from "./pages/Favorites/Favorites";
import { Logon } from './pages/Logon/Logon'
import { Movie } from "./pages/Movie/Movie";
import { Search } from "./pages/Search/Search";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie" element={<Movie />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/lastWatch" element={<LastWatch />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/logon" element={<Logon />} />
      <Route path="/search/:query" element={<Search />} />
    </Routes>
  )
}