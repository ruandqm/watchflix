interface movie {
    id: number,
    backdrop: string,
    overview: string,
    poster: string,
    title: string,
    rate: number,
    runtime: number
    genre: any,
    trailers: any
}
interface genre {
    id: number,
    name: string
}