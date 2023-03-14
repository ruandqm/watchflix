import './style.scss'
interface IProps {
    url: string
    index: number
}
const BoxTrailer: React.FC<IProps> = ({ url, index}) => {
    return (
        <div className="boxTrailer">
            <img src={`https://img.youtube.com/vi/${url}/0.jpg`} width={'280px'} />
            <span>{index}</span>
        </div>
    )
}
export default BoxTrailer