import './style.scss'
import notFound from '../../assets/animations/notFound.json'
import Lottie from 'react-lottie';
import { useState } from 'react';

export const NotFound = () => {

    const [animationState, setAnimationState] = useState({
        isStopped: false, isPaused: false,
        direction: 1,
    });

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: notFound,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <div className="notFoundContainer">
            <h2>Desculpe, a sua pesquisa não retornou nenhum resultado!</h2>
            <Lottie
                options={defaultOptions}
                width={400}
                height={400}
                direction={animationState.direction}
                isStopped={animationState.isStopped}
                isPaused={animationState.isPaused} />
        </div>

    )
}
