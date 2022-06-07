import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { motion } from 'framer-motion-3d'
import { OrbitControls } from '@react-three/drei'
import { FC, Suspense } from 'react'

const Saturn: FC = () => {
  const gltf = useLoader(GLTFLoader, './models/saturn/scene.gltf')

  return (
    <Canvas
      className="h-full w-screen translate-x-[30rem] overflow-visible"
      camera={{ zoom: 0.33, position: [-1, 2, 3] }}
    >
      <ambientLight intensity={0.1} />
      <directionalLight color="white" position={[0, 0, 5]} />

      <Suspense fallback={<p>LOADING</p>}>
        <axesHelper args={[10]} />
        <motion.primitive
          object={gltf.scene}
          initial={{ rotateZ: 90, rotateX: 0, translateX: 400 }}
          // animate={{ rotateZ: 360 }}
          transition={{
            type: 'tween',
            ease: 'linear',
            duration: 2000,
            repeat: Infinity,
            repeatType: 'loop'
          }}
        />
        <OrbitControls
          onChange={({ target }) => console.log(target)}
          position={[1.8015924207932403, -0.439419393818959, 4.355156449342727]}
        />
      </Suspense>
    </Canvas>
  )
}

export default Saturn
