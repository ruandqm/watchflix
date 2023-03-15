import { Navbar } from '../../components/Navbar/Navbar'
import { Footer } from '../../components/Footer/Footer'

import './style.scss'
import { MoviesExpandedSection } from '../../components/MoviesExpandedSection/MoviesExpandedSection'
import { NotFound } from '../../components/NotFound/NotFound'

export const Favorites = () => {
    const localData = localStorage.getItem('Favorites')

    return (
        <div className='containerFavorites'>
            <div className='backgroundNav'>
                <Navbar />
            </div>
            <div className='groupMovies'>
                <section className="moviesHeader">
                    <h2>Filmes Favoritos</h2>
                </section>
                {localData == null || JSON.parse(localData).length == 0 ? <NotFound /> : <MoviesExpandedSection data={JSON.parse(localData)} />}
            </div>
            <Footer />
        </div>
    )
}