import './style.scss'
import Play from '../../assets/Play.svg'
import Heart from '../../assets/heart.svg'
import { Footer } from "../../components/Footer/Footer"
import { Navbar } from "../../components/Navbar/Navbar"
import BoxTrailer from './BoxTrailer/BoxTrailer'
import tmdbApi from '../../services/api/tmdbApi'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { adaptMovie } from '../../shared/adapters/adaptMovie'
import { useEffect, useState } from 'react'
import HearRed from '../../assets/heartRed.png'

import store from '../../store'
import { useSelector } from 'react-redux'
import { setFavoriteUser } from '../../store/User/action'
import { Logout } from '../../services/auth'

export const Movie: React.FC = () => {
    const params = useParams()
    const user = useSelector((state: IState) => state.user)

    const { data, isFetching } = useQuery('MovieBanner', async () => {
        const moviesData = await tmdbApi(`/movie/${params.id}`).then((data) => {
            return adaptMovie(data)
        })
        return moviesData
    })

    const imageUrl = data ? `https://image.tmdb.org/t/p/w1280/${data.results.backdrop}` : ''

    function addFavorites() {
        Logout()

        let favotiresLocal = localStorage.getItem('Favorites')

        let arrayInfors = {
            runtime: data?.results.runtime,
            id: data?.results.id,
            title: data?.results.title,
            poster: data?.results.poster,
            genres: data?.results.genre
        }

        if (user.inforUser.length > 0) {
            if (favotiresLocal != null && favotiresLocal.length > 0) {
                let inforsFavorites = JSON.parse(favotiresLocal)
                inforsFavorites.push(arrayInfors)
                localStorage.setItem('Favorites', JSON.stringify(inforsFavorites))
            }

            else {
                let arrayInfor = [arrayInfors]
                localStorage.setItem('Favorites', JSON.stringify(arrayInfor))
            }

            store.dispatch(setFavoriteUser(1))
        }
    }

    function removeFavorites() {
        let favotiresLocal = localStorage.getItem('Favorites')

        if (favotiresLocal != null && favotiresLocal.length > 0) {
            let indexArrayRemove: number = 0
            let arrayInfors = JSON.parse(favotiresLocal)

            arrayInfors.map((item: movie, index: number) => {
                if (item.id == data?.results.id) {
                    indexArrayRemove = index
                }
            })

            arrayInfors.splice(indexArrayRemove, 1);

            localStorage.setItem('Favorites', JSON.stringify(arrayInfors))

            store.dispatch(setFavoriteUser(0))
        }
    }

    async function verificantionFavorite() {
        let favotiresLocal = localStorage.getItem('Favorites')

        if (favotiresLocal != null && favotiresLocal.length > 0) {
            let arrayInfors = JSON.parse(favotiresLocal)
            let arrayFilter: movie[] = []

            arrayInfors.map((item: movie) => {
                if (item.id == data?.results.id) {
                    arrayFilter = [item]
                }
            })

            if (arrayFilter.length > 0) {
                store.dispatch(setFavoriteUser(1))
            }
            else {
                store.dispatch(setFavoriteUser(0))
            }
        }
    }

    useEffect(() => {
        verificantionFavorite()
    }, [data?.results.id])
    return (
        <>
            <div className="Movie_Container">
                <div className='.backgroundNav'>
                    <Navbar />
                </div>
                <section className='Movie_Section'>
                    {data != undefined && (
                        <div className='Movie_SectionInfor'>
                            <div className='SectionInfor_Left'>
                                <img src={imageUrl} alt="" />
                                <div className='ButtonPlay'>
                                    <button>
                                        <img src={Play} alt="IconPlay" height={'38%'} />
                                    </button>
                                </div>
                            </div>
                            <div className='SectionInfor_Right'>

                                <>
                                    <h2>{data.results.title}</h2>
                                    <p>{data?.results.overview}</p>
                                    <article>
                                        <div className='genres'>Genres: {data != undefined ? data.results.genre.map((genre: genre, index: number) => {
                                            return <div className="genre" key={index}> <span>{genre.name}</span></div>
                                        }) : null}</div>
                                        <p>Duration: {data.results.runtime}</p>
                                        <p>Ratings: {data.results.rate.toFixed(1)}</p>
                                    </article>
                                    <img src={user.favorite == 0 ? Heart : HearRed} alt="heart" height={'32px'} onClick={user.favorite == 0 ? addFavorites : removeFavorites} />
                                </>

                            </div>
                        </div>
                    )}
                    <div className='trailersSection'>
                        <h2>Trailers</h2>
                        <div className='groupBoxTrailers'>
                            {data && data?.results.trailers.map((item: any, index: number) => (
                                <BoxTrailer url={item.key} index={index + 1} key={item.key} />
                            ))}
                        </div>

                    </div>

                </section>
                <Footer />
            </div>
        </>
    )
}