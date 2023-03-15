import './style.scss'
interface IProps {
    url: string
    index: number
}
const BoxTrailer: React.FC<IProps> = ({ url, index }) => {
    return (
        <div className="boxTrailer">
            <a href={`https://www.youtube.com/watch?v=${url}`}>
                <img src={`https://img.youtube.com/vi/${url}/0.jpg`} width={'280px'} />
                <span>{index}</span>
            </a>
        </div>
    )
}
export default BoxTrailer