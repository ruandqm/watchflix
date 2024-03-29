import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { Footer } from '../../components/Footer/Footer'
import { Loading } from '../../components/Loading/Loading'
import { MoviesExpandedSection } from '../../components/MoviesExpandedSection/MoviesExpandedSection'
import { Navbar } from '../../components/Navbar/Navbar'
import { NotFound } from '../../components/NotFound/NotFound'
import tmdbApi from '../../services/api/tmdbApi'
import { adaptGetMovies } from '../../shared/adapters/adaptGetMovies'

export const Search = () => {
    const params = useParams()

    const { data, isFetching } = useQuery('homeMovies', async () => {
        const moviesData = await tmdbApi(`search/movie`, `&query=${params.query}`).then((data) => {
            return adaptGetMovies(data)
        })
        return moviesData
    })
    console.log(data)

    return (
        <div className="HomeContainer">
            <div className="container">
                <section className="heroSection">
                    <Navbar />
                </section>
                <section className="moviesHeader">
                    <h2>Resultados da sua pesquisa</h2>
                </section>
                {isFetching && <Loading />}
                {!isFetching && data?.results.length == 0 ? <NotFound /> : null}
                <MoviesExpandedSection data={data?.results} />
            </div>
            <Footer />
        </div>
    )
}
