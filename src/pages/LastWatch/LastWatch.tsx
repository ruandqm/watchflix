import './style.scss'
import { Footer } from '../../components/Footer/Footer'
import { Navbar } from '../../components/Navbar/Navbar'
import { adaptGetMovies } from '../../shared/adapters/adaptGetMovies'
import tmdbApi from '../../services/api/tmdbApi'
import { useQuery } from 'react-query'
import { Loading } from '../../components/Loading/Loading'
import { useState } from 'react'
import { MoviesExpandedSection } from '../../components/MoviesExpandedSection/MoviesExpandedSection'
import { MoviesNoExpandedSection } from '../../components/MoviesNoExpandedSection/MoviesNoExpandedSection'

export const LastWatch = () => {
    const [isExpanded, setIsExpanded] = useState(false)
    /* 
    const { data, isFetching } = useQuery('topRated', async () => {
        const moviesData = await tmdbApi('movie/top_rated').then((data) => {
            return adaptGetMovies(data)
        })
        return moviesData
    }) */

    const localData = window.localStorage.getItem('lastWatchList')

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
                {/* {isFetching && <Loading />} */}

                {!isExpanded && localData != null ? <MoviesNoExpandedSection data={JSON.parse(localData)} /> : null}
                {isExpanded && localData != null ? <MoviesExpandedSection data={JSON.parse(localData)} /> : null}
            </div>
            <Footer />
        </div>
    )
}