import { MovieCard } from '../MovieCard/MovieCard'
import './style.scss'

export const MoviesNoExpandedSection = (props: { data: any }) => {
    return (<section className='MoviesNoExpandedSection'>
        <div className='layoutFirstDivControl'>
            {
                props.data != undefined ? (
                    props.data.map((movie: movie, index: number) => {
                        while (index < 2) {
                            if (index == 0) {
                                return <MovieCard key={movie.id} data={movie} first={true} />
                            } else {
                                return <MovieCard key={movie.id} data={movie} />
                            }
                        }
                    })
                ) : null
            }
        </div>
        <div className="layoutSecondDivControl">
            {
                props.data != undefined ? (
                    props.data.map((movie: movie, index: number) => {
                        while (index > 1 && index < 5) {
                            return <MovieCard key={movie.id} data={movie} />
                        }
                    })
                ) : null
            }
        </div>
    </section>
    )
}