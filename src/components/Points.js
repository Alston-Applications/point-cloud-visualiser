import React, { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import '../styles/PointCloudVisualiser.css'

const pointSize = function(numberOfPoints) {
  const maxSize = 0.1
  const minSize = 0.015
  const minNumberOfPoints = 100
  const maxNumberOfPoints = 100000
  const size = minSize + Math.pow((maxNumberOfPoints-numberOfPoints)/(maxNumberOfPoints - minNumberOfPoints), 10)*(maxSize-minSize)
  return size
}

export default function Points({
    points,
    pointColour,
    pointsColour,
    numberOfPoints,
    pointFunction,
}) {

    const ref = useRef()
    const { transform, positions } = useMemo(() => {
        const transform = new THREE.Matrix4()
        var positions;

        if(points) {
            positions = [...Array(numberOfPoints)].map((_, i) => {
                const position = new THREE.Vector3()
                position.x = points[i][0]
                position.y = points[i][1]
                position.z = points[i][2]
                return position
            })
        } else if(pointFunction) {
            positions = [...Array(numberOfPoints)].map((_, i) => {
                const point = pointFunction(i)
                const position = new THREE.Vector3()
                position.x = point[0]
                position.y = point[1]
                position.z = point[2]
                return position
            })
        }
    
    return { transform, positions }
  }, [])
  useFrame(() => {
    for (let i = 0; i < numberOfPoints; ++i) {
      transform.setPosition(positions[i])
      ref.current.setMatrixAt(i, transform)
      if(pointsColour) {
        ref.current.setColorAt(i, new THREE.Color().setHex(pointsColour[i]));
      }
      
    }
    ref.current.instanceMatrix.needsUpdate = true
  })

  const spheresGeometry = new THREE.IcosahedronGeometry(pointSize(numberOfPoints), 1);
  const material = pointColour ? new THREE.MeshBasicMaterial({ color: pointColour }) : new THREE.MeshBasicMaterial({});

  return (
    <instancedMesh ref={ref} args={[spheresGeometry, material, numberOfPoints]}>
    </instancedMesh>
  )
}