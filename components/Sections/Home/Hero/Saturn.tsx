import { Canvas, useLoader } from '@react-three/fiber'
import { motion } from 'framer-motion-3d'
import { OrbitControls, useFBX, PerspectiveCamera } from '@react-three/drei'
import { FC, Suspense, useRef } from 'react'
import type { Camera } from 'three'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

const Scene: FC = () => {
  const planet = useFBX('./models/saturn/planet.fbx')
  const asteroidsOne = useFBX('./models/saturn/asteroids1.fbx')
  const asteroidsTwo = useFBX('./models/saturn/asteroids2.fbx')

  const texture = useLoader(TextureLoader, './models/saturn/textures.png')

  const cameraRef = useRef<Camera>()

  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight color="white" position={[0, 0, 5]} />
      {/* <meshStandardMaterial map={texture} /> */}

      <Suspense fallback={<p>LOADING</p>}>
        <>
          <axesHelper args={[10]} />

          <motion.primitive
            object={planet}
            scale={[0.0004, 0.0004, 0.0004]}
            initial={{ rotateY: 0, rotateX: Math.PI / 5 }}
            animate={{ rotateY: Math.PI * 2 }}
            transition={{
              type: 'tween',
              ease: 'linear',
              duration: 40,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          />

          <motion.primitive
            object={asteroidsOne}
            scale={[0.0004, 0.0004, 0.0004]}
            initial={{ rotateY: 0, rotateX: Math.PI / 5 }}
            animate={{ rotateY: Math.PI * 2 }}
            transition={{
              type: 'tween',
              ease: 'linear',
              duration: 60,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          />

          <motion.primitive
            object={asteroidsTwo}
            scale={[0.00045, 0.00045, 0.00045]}
            initial={{ rotateY: 0, rotateX: Math.PI / 5 }}
            animate={{ rotateY: Math.PI * 2 }}
            transition={{
              type: 'tween',
              ease: 'linear',
              duration: 150,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          />

          <meshStandardMaterial map={texture} />

          <PerspectiveCamera ref={cameraRef} position={[0, 0, 5]} />
          <OrbitControls
            camera={cameraRef.current}
            // onChange={(state) => console.log(state.target)}
          />
        </>
      </Suspense>
    </>
  )
}

const Saturn: FC = () => {
  return (
    <Canvas
      className="h-full w-screen translate-x-[30rem] overflow-visible"
      camera={{ position: [-6, 2, 6] }}
    >
      <Scene />
    </Canvas>
  )
}

export default Saturn
