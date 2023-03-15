import './style.scss'
import { Footer } from '../../components/Footer/Footer'
import { Navbar } from '../../components/Navbar/Navbar'
import { useState } from 'react'
import { MoviesExpandedSection } from '../../components/MoviesExpandedSection/MoviesExpandedSection'
import { MoviesNoExpandedSection } from '../../components/MoviesNoExpandedSection/MoviesNoExpandedSection'
import { NotFound } from '../../components/NotFound/NotFound'

export const LastWatch = () => {
    const [isExpanded, setIsExpanded] = useState(false)

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

                {localData == null && <NotFound />}
                {!isExpanded && localData != null ? <MoviesNoExpandedSection data={JSON.parse(localData)} /> : null}
                {isExpanded && localData != null ? <MoviesExpandedSection data={JSON.parse(localData)} /> : null}
            </div>
            <Footer />
        </div>
    )
}