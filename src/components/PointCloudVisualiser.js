import React, { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import '../styles/PointCloudVisualiser.scss'

const numberOfPoints = 50000

const pointSize = function() {
  const maxSize = 0.1
  const minSize = 0.015

  const minNumberOfPoints = 100
  const maxNumberOfPoints = 100000

  const size = minSize + Math.pow((maxNumberOfPoints-numberOfPoints)/(maxNumberOfPoints - minNumberOfPoints), 10)*(maxSize-minSize)

  return size

}

function Points() {
  const ref = useRef()
  const { transform, positions } = useMemo(() => {
    const vec = new THREE.Vector3()
    const transform = new THREE.Matrix4()

    // Precompute randomized initial positions
    const positions = [...Array(numberOfPoints)].map((_, i) => {
      const position = new THREE.Vector3()
      // Place in a grid
      if(i % 6 == 0) {
        position.x = (Math.random() * 10) - 5
        position.y = (Math.random() * 10) - 5
        position.z = - 5
      } else if(i % 6 == 1) {
        position.x = (Math.random() * 10) - 5
        position.y = 5
        position.z = (Math.random() * 10) - 5
      } else if(i % 6 == 2) {
        position.x = (Math.random() * 10) - 5
        position.y = (Math.random() * 10) - 5
        position.z = 5
      } else if(i % 6 == 3) {
        position.x = (Math.random() * 10) - 5
        position.y = - 5
        position.z = (Math.random() * 10) - 5
      } else if(i % 6 == 4) {
        position.x = 5
        position.y = (Math.random() * 10) - 5
        position.z = (Math.random() * 10) - 5
      } else if(i % 6 == 5) {
        position.x = - 5
        position.y = (Math.random() * 10) - 5
        position.z = (Math.random() * 10) - 5
      }
      return position
    })
    
    return { vec, transform, positions }
  }, [])
  useFrame(() => {
    for (let i = 0; i < numberOfPoints; ++i) {
      transform.setPosition(positions[i])
      ref.current.setMatrixAt(i, transform)
    }
    ref.current.instanceMatrix.needsUpdate = true
  })
  return (
    <instancedMesh ref={ref} args={[null, null, numberOfPoints]}>
      <sphereBufferGeometry args={[pointSize()]} />
      <meshBasicMaterial color={'black'} />
    </instancedMesh>
  )
}

export default function PointCloudVisualiser() {
  return (
      <div className='pc-main'>
        <div className='pc-generator'></div>
        <Canvas className="point-cloud-visualiser" camera={{ position: [7, 10, 20], fov: 45 }}>
          <spotLight intensity={0.5} angle={0.2} penumbra={1} position={[5, 15, 10]} />
          <Points></Points>
          <OrbitControls enablePan={false} enableKeys={true} keys={{LEFT: 'ArrowLeft', UP: 'ArrowUp',RIGHT: 'ArrowRight', BOTTOM: 'ArrowDown'}}/>
        </Canvas>
      </div>
  )
}