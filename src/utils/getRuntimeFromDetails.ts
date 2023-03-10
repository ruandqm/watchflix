import tmdbApi from "../services/api/tmdbApi"

export const getRuntimeFromDetails = (movieId: number) => {
    tmdbApi(`movie/${movieId}`).then((data) => {
        return data.runtime
    })
}