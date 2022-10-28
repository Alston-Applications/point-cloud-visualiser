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
}) {
    return (
        <div className='pc-main'>
            <div className='pc-generator'></div>
            <Canvas className="point-cloud-visualiser" camera={{ position: [7, 10, 20], fov: 45 }}>
            <spotLight intensity={0.5} angle={0.2} penumbra={1} position={[5, 15, 10]} />
            <Points points={points} pointFunction={pointFunction} numberOfPoints={points ? points.length : numberOfPoints} pointColour={pointColour} pointsColour={pointsColour} pointColourFunction={pointColourFunction}></Points>
            <OrbitControls enablePan={false} enableKeys={true} keys={{LEFT: 'ArrowLeft', UP: 'ArrowUp',RIGHT: 'ArrowRight', BOTTOM: 'ArrowDown'}}/>
            </Canvas>
        </div>
    )
}