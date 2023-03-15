import tmdbApi from "../../services/api/tmdbApi"

export const adaptMovie = async (moviesResponse: any) => {

    const getTrailers = async (movieId: number) => {
        const response = await tmdbApi(`/movie/${movieId}/videos`)
        return response.results
    }

    if (moviesResponse != undefined) {
        console.log(moviesResponse)
        const trailers = await getTrailers(moviesResponse.id)
        const results: movie = {
            id: moviesResponse.id,
            backdrop: moviesResponse.backdrop_path,
            overview: moviesResponse.overview,
            poster: moviesResponse.poster_path,
            title: moviesResponse.title,
            rate: moviesResponse.vote_average,
            runtime: moviesResponse.runtime,
            genre: moviesResponse.genres,
            trailers
        }
        return { results }
    } else {
        return undefined
    }

}