import './style.scss'
import { Footer } from '../../components/Footer/Footer'
import { Navbar } from '../../components/Navbar/Navbar'
import { adaptGetMovies } from '../../shared/adapters/adaptGetMovies'
import { MovieCard } from '../../components/MovieCard/MovieCard'
import { useEffect, useState } from 'react'
import tmdbApi from '../../services/api/tmdbApi'

export const Home = () => {
    const [movies, setMovies] = useState<any>([])

    const getAdaptedMovies = async () => {
        const moviesData = await tmdbApi('movie/popular').then((data) => {
            return adaptGetMovies(data)
        })
        setMovies(moviesData)
    }

    useEffect(() => {
        getAdaptedMovies()
    }, [])

    return (
        <div className="HomeContainer">
            <div className="container">
                <section className="heroSection">
                    <Navbar />
                </section>
                <section className="movieCardsSection">
                    {movies.results != undefined ? (movies.length != 0 ? (
                        movies.results.map((movie: movie) => {
                            return <MovieCard key={movie.id} data={movie} />
                        })
                    ) : null) : null}

                </section>
            </div>
            <Footer />
        </div>
    )
}