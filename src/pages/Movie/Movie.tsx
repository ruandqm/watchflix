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

export const Movie: React.FC = () => {
    const params = useParams()

    const { data, isFetching } = useQuery('MovieBanner', async () => {
        const moviesData = await tmdbApi(`/movie/${params.id}`).then((data) => {
            return adaptMovie(data)
        })
        return moviesData
    })

    const imageUrl = `https://image.tmdb.org/t/p/w1280/${data ? data.results.backdrop : ''}`


    return (
        <>
            <div className="Movie_Container">
                <Navbar />
                <section className='Movie_Section'>
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
                            {data != undefined && (
                                <>
                                    <h2>{data.results.title}</h2>
                                    <p>{data?.results.overview}</p>
                                    <article>
                                        <div className='genres'>Genres: {data != undefined ? data.results.genre.map((genre: genre, index: number) => {
                                            return <div className="genre"> <span>{genre.name}</span></div>
                                        }) : null}</div>
                                        <p>Duration: {data.results.runtime}</p>
                                        <p>Ratings: {data.results.rate.toFixed(1)}</p>
                                    </article>
                                    <img src={Heart} alt="heart" height={'32px'} />
                                </>
                            )}
                        </div>
                    </div>
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