import React, { useEffect, useRef, useState } from 'react';
import Lottie from 'react-lottie';


import * as animationData from '../../libs/familyLottie.json';

import './index.css'

const Missing = (props) => {
    const isStopped = useState(false);
    const isPaused = useState(false);
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData.default,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className='wrapper'>
            <Lottie options={defaultOptions}
                height={200}
                width={200}
                isStopped={isStopped}
                isPaused={isPaused}
            />
            <h2 className='subtitle'>We're currently working on this page.</h2>
            <h2 className='subtitle'>Please come back soon.</h2>



        </div>

    )

}

export default Missing;