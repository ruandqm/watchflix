import './style.scss'
import { Footer } from '../../components/Footer/Footer'
import { Navbar } from '../../components/Navbar/Navbar'
import { adaptGetMovies } from '../../shared/adapters/adaptGetMovies'
import { MovieCard } from '../../components/MovieCard/MovieCard'
import tmdbApi from '../../services/api/tmdbApi'
import { useQuery } from 'react-query'
import { Loading } from '../../components/Loading/Loading'

export const Home = () => {
    const { data, isFetching } = useQuery('homeMovies', async () => {
        const moviesData = await tmdbApi('movie/popular').then((data) => {
            return adaptGetMovies(data)
        })
        return moviesData
    })

    return (
        <div className="HomeContainer">
            <div className="container">
                <section className="heroSection">
                    <Navbar />
                </section>
                <section className="movieCardsSection">
                    {isFetching && <Loading />}
                    {data != undefined ? (
                        data.results.map((movie: movie) => {
                            return <MovieCard key={movie.id} data={movie} />
                        })
                    ) : null}

                </section>
            </div>
            <Footer />
        </div>
    )
}