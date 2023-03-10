import tmdbApi from "../../services/api/tmdbApi"

type genre = {
    id: number,
    name: string
}

export const adaptGetMovies = async (moviesResponse: any) => {
    const getGenresNames = async (genresIds: number[]) => {
        const names: string[] = []
        for (const id of genresIds) {
            const response = await tmdbApi('genre/movie/list')
            const genre = response.genres.find((gr: genre) => gr.id === id)
            if (genre) {
                names.push(genre.name)
            }
        }
        return names
    }

    const getMovieDetails = async (movieId: number) => {
        const response = await tmdbApi(`movie/${movieId}`)
        return response.runtime
    }

    if (moviesResponse != undefined) {
        const results = await Promise.all(moviesResponse.results.map(async (item: any) => {
            const runtime = await getMovieDetails(item.id)
            const genre = await getGenresNames(item.genre_ids)
            return {
                id: item.id,
                backdrop: item.backdrop_path,
                overview: item.overview,
                poster: item.poster_path,
                title: item.title,
                rate: item.vote_average,
                runtime,
                genre
            }
        }))
        return { results }
    } else {
        return undefined
    }

}