import tmdbApi from "../../services/api/tmdbApi"

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

    const getTrailers = async (movieId: number) => {
        const response = await tmdbApi(`/movie/${movieId}/videos`)
        return response.results
    }

    if (moviesResponse != undefined) {
        const results: movie[] = await Promise.all(moviesResponse.results.map(async (item: any, index: number) => {
            const runtime = await getMovieDetails(item.id)
            const genre = await getGenresNames(item.genre_ids)
            const trailers = await getTrailers(item.id)
            if (item.backdrop_path != null) {
                return {
                    id: item.id,
                    backdrop: item.backdrop_path,
                    overview: item.overview,
                    poster: item.poster_path,
                    title: item.title,
                    rate: item.vote_average,
                    runtime,
                    genre,
                    trailers
                }
            } else {
                console.warn(`A api retornou com falhas o item de index ${index}. Por isso, ele foi removido do array e definido como undefined.`)
            }
        }))
        return { results }
    } else {
        return undefined
    }

}