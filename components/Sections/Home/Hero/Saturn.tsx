import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { motion } from 'framer-motion-3d'
import { FC, Suspense } from 'react'

const Saturn: FC = () => {
  const gltf = useLoader(GLTFLoader, './models/saturn/scene.gltf')

  return (
    <Canvas frameloop="demand">
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <motion.mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial />
      </motion.mesh>
      <Suspense fallback={<p>LOADING</p>}>
        <primitive object={gltf.scene} />
      </Suspense>
    </Canvas>
  )
}

export default Saturn
