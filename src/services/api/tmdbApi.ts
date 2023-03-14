import axios from "axios";
import { useQuery } from "react-query";

const tmdbApi = async (route: string, params?: string) => {
    params == undefined ? params = '' : null
    const response = await axios.get(`https://api.themoviedb.org/3/${route}?api_key=${import.meta.env.VITE_TMDB_API_KEY}${params}`)
    return response.data
}

export default tmdbApi