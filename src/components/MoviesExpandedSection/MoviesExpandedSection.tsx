import { MovieCard } from '../MovieCard/MovieCard'
import './style.scss'

export const MoviesExpandedSection = (props: { data: any }) => {
    return (<section className='MoviesExpandedSection'>{
        props.data != undefined ? (
            props.data.map((movie: movie) => {
                if (movie != undefined) {
                    return <MovieCard key={movie.id} data={movie} />
                }
            })
        ) : null
    }
    </section>
    )
}
