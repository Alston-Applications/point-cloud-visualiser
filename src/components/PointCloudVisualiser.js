import React, { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import '../styles/PointCloudVisualiser.css'
import Points from "./Points";

export default function PointCloudVisualiser({
    points,
    pointColour,
    pointsColour,
    numberOfPoints,
    pointFunction,
    pointColourFunction,
    cameraPosition,
}) {
    return (
        <div className='pc-main'>
            <div className='pc-generator'></div>
            <Canvas className="point-cloud-visualiser" camera={{ position: cameraPosition }}>
            <Points points={points} pointFunction={pointFunction} numberOfPoints={points ? points.length : numberOfPoints} pointColour={pointColour} pointsColour={pointsColour} pointColourFunction={pointColourFunction}></Points>
            <OrbitControls enablePan={false} enableKeys={true} keys={{LEFT: 'ArrowLeft', UP: 'ArrowUp',RIGHT: 'ArrowRight', BOTTOM: 'ArrowDown'}}/>
            </Canvas>
        </div>
    )
}