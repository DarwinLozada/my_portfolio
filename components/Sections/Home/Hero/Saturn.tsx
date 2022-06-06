import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { motion } from 'framer-motion-3d'
import { OrbitControls } from '@react-three/drei'
import { FC, Suspense } from 'react'

const Saturn: FC = () => {
  const gltf = useLoader(GLTFLoader, './models/saturn/scene.gltf')

  return (
    <Canvas frameloop="demand">
      <ambientLight intensity={0.1} />
      <directionalLight color="white" position={[0, 0, 5]} />
      <Suspense fallback={<p>LOADING</p>}>
        <primitive object={gltf.scene} />
        <OrbitControls />
      </Suspense>
    </Canvas>
  )
}

export default Saturn
