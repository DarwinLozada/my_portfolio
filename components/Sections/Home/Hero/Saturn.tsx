import { Canvas, useLoader } from '@react-three/fiber'
import { motion } from 'framer-motion-3d'
import { OrbitControls, useFBX, PerspectiveCamera } from '@react-three/drei'
import { FC, Suspense, useEffect, useRef } from 'react'
import type { Camera } from 'three'
import { MeshStandardMaterial } from 'three'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import useIsClient from 'hooks/useIsClient'

const Scene: FC = () => {
  const planet = useFBX('./models/saturn/planet.fbx')
  const asteroidsOne = useFBX('./models/saturn/asteroids1.fbx')
  const asteroidsTwo = useFBX('./models/saturn/asteroids2.fbx')

  const texture = useLoader(TextureLoader, './models/saturn/textures.png')

  const cameraRef = useRef<Camera>()

  useEffect(() => {
    planet.children[0].material = new MeshStandardMaterial({
      map: texture,
    })
  }, [planet, texture])

  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight color="white" position={[0, 0, 5]} />

      <Suspense fallback={<p>LOADING</p>}>
        <>
          <motion.primitive
            object={planet}
            scale={[0.0004, 0.0004, 0.0004]}
            position={[0, 4, 0]}
            initial={{ rotateY: 0, rotateX: Math.PI / 7, y: 3 }}
            animate={{ rotateY: Math.PI * 2 }}
            transition={{
              type: 'tween',
              ease: 'linear',
              duration: 40,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          >
            <meshStandardMaterial color="hotpink" />
          </motion.primitive>

          <motion.primitive
            object={asteroidsOne}
            scale={[0.0004, 0.0004, 0.0004]}
            initial={{ rotateY: 0, rotateX: Math.PI / 7, y: 3 }}
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
            initial={{ rotateY: 0, rotateX: Math.PI / 7, y: 3 }}
            animate={{ rotateY: Math.PI * 2 }}
            transition={{
              type: 'tween',
              ease: 'linear',
              duration: 150,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          >
            <meshStandardMaterial color="hotpink" />
          </motion.primitive>

          <PerspectiveCamera ref={cameraRef} />
          <OrbitControls
            camera={cameraRef.current}
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
          />
        </>
      </Suspense>
    </>
  )
}

const Saturn: FC = () => {
  const hasMounted = useIsClient()

  return (
    <Canvas
      className={`relative h-20 w-screen translate-x-[30rem] overflow-visible opacity-0 ${
        hasMounted ? 'opacity-100' : ''
      } transition-opacity duration-500`}
      camera={{ position: [-12.49, 3.54, 8.53] }}
    >
      <Scene />
    </Canvas>
  )
}

export default Saturn
