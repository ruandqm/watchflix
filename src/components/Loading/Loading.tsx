import './style.scss'
import loading from '../../assets/animations/loading.json'
import Lottie from 'react-lottie';
import { useState } from 'react';

export const Loading = () => {

    const [animationState, setAnimationState] = useState({
        isStopped: false, isPaused: false,
        direction: 1,
    });

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loading,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <div className="loadingContainer">
            <Lottie
                options={defaultOptions}
                width={200}
                height={200}
                direction={animationState.direction}
                isStopped={animationState.isStopped}
                isPaused={animationState.isPaused} />
        </div>

    )
}
