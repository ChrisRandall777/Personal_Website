"use client";
import styles from './CircleTransition.module.css';
import { useId } from 'react';

type CircleTransitionProps = {
    circleColor: string;
    backgroundColor: string;
};

const CircleTransition = ({ circleColor, backgroundColor}: CircleTransitionProps) => {
    const uniqueId = useId();

    const containerHeight = 100;
    const spacingY = 10;
    const spacingX = 10;
    const steps = Math.ceil(containerHeight / spacingY);


    return (
        <div className={styles.container} style={{height: containerHeight + "px", backgroundColor: backgroundColor}}>
            <svg height={containerHeight} width="100%">
                <defs>
                    <pattern id={"circlePattern" + uniqueId} x="0" y="0" height={containerHeight} width={spacingX} patternUnits="userSpaceOnUse">
                        {Array.from({length: steps}).map((_, index) => {
                            let r = 1;
                            return <circle key={index} cx={spacingX / 2} cy={spacingY * (index + 1)} r={Math.round((index / steps) * (Math.max(spacingX, spacingY) * 0.75) + r)} fill={circleColor} />
                        })}
                    </pattern>
                </defs>
                
                <rect height={containerHeight} width="100%" fill={"url(#circlePattern" + uniqueId + ")"} />
            </svg>
        </div>
    );
};

export default CircleTransition;