import './style.scss'

export const MovieCard = (props: { data: movie }) => {

    if (props.data != undefined) {
        const imageUrl = `https://image.tmdb.org/t/p/w200/${props.data.poster}`
        return (
            <article className='MovieCardContainer' style={{ backgroundImage: `url(${imageUrl})` }}>
                <div className="movieCardContent">
                    <div className="genre">{props.data.genre != undefined ? props.data.genre.map((genre: string, index: number) => <span key={index}>{genre}</span>) : null}</div>
                    <div className="movieInfos">
                        <span>{`${props.data.runtime}min`}</span>
                        <h2>{props.data.title}</h2>
                    </div>
                </div>

            </article>
        )
    } else {
        return <></>
    }
}