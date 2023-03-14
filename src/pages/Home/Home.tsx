import './style.scss'
import { Footer } from '../../components/Footer/Footer'
import { Navbar } from '../../components/Navbar/Navbar'
import { adaptGetMovies } from '../../shared/adapters/adaptGetMovies'
import tmdbApi from '../../services/api/tmdbApi'
import { useQuery } from 'react-query'
import { Loading } from '../../components/Loading/Loading'
import { MoviesExpandedSection } from '../../components/MoviesExpandedSection/MoviesExpandedSection'

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
                <section className="moviesHeader">
                    <h2>Home</h2>
                </section>
                {isFetching && <Loading />}
                <MoviesExpandedSection data={data?.results} />
            </div>
            <Footer />
        </div>
    )
}