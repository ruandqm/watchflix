import './style.scss'

export const MovieCard = (props: { data: movie, first?: boolean }) => {

    if (props.data != undefined) {
        const imageUrl = `https://image.tmdb.org/t/p/w200/${props.data.poster}`
        const posterUrl = `https://image.tmdb.org/t/p/w400/${props.data.backdrop}`
        const defaultStyle = props.first ? 'backdropCard' : ''

        return (
            <article className={`MovieCardContainer ${defaultStyle}`} style={props.first ? { backgroundImage: `url(${posterUrl})` } : { backgroundImage: `url(${imageUrl})` }}>
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