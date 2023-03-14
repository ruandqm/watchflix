import './style.scss'
import { Footer } from '../../components/Footer/Footer'
import { Navbar } from '../../components/Navbar/Navbar'
import { adaptGetMovies } from '../../shared/adapters/adaptGetMovies'
import { MovieCard } from '../../components/MovieCard/MovieCard'
import tmdbApi from '../../services/api/tmdbApi'
import { useQuery } from 'react-query'
import { Loading } from '../../components/Loading/Loading'
import { useState } from 'react'
import { MoviesExpandedSection } from '../../components/MoviesExpandedSection/MoviesExpandedSection'
import { MoviesNoExpandedSection } from '../../components/MoviesNoExpandedSection/MoviesNoExpandedSection'

export const Movies = () => {
    const [isExpanded, setIsExpanded] = useState(false)
    const { data, isFetching } = useQuery('topRated', async () => {
        const moviesData = await tmdbApi('movie/top_rated').then((data) => {
            return adaptGetMovies(data)
        })
        return moviesData
    })

    return (

        <div className="MoviesPageContainer">
            <div className="container">
                <section className="heroSection">
                    <Navbar />
                </section>
                <section className="moviesHeader">
                    <h2>Movies</h2>
                    <span className='expand' onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? 'Ver Menos' : 'Ver Mais'}</span>
                </section>
                {isFetching && <Loading />}
                {!isExpanded && <MoviesNoExpandedSection data={data?.results} />}
                {isExpanded && <MoviesExpandedSection data={data?.results} />}
            </div>
            <Footer />
        </div>
    )
}