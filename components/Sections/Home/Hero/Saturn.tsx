import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { motion } from 'framer-motion-3d'
import { OrbitControls, useFBX, PerspectiveCamera } from '@react-three/drei'
import { FC, memo, Suspense, useEffect, useRef } from 'react'
import { Camera, Group, Mesh, MeshStandardMaterial } from 'three'

import { TextureLoader } from 'three/src/loaders/TextureLoader'
import useIsClient from 'hooks/useIsClient'
const DISTANCE_TO_SUN = 10

const Scene: FC = () => {
  const saturn = useFBX('./models/saturn/planet.fbx')
  const asteroidsOne = useFBX('./models/saturn/asteroids1.fbx')
  const asteroidsTwo = useFBX('./models/saturn/asteroids2.fbx')

  const lavaPlanet1 = useFBX('./models/extra_planets/lava_planet1.fbx')
  const sun = useFBX('./models/extra_planets/sun.fbx')

  const planetsGroupRef = useRef<Group | null>(null)

  const texture = useLoader(TextureLoader, './models/saturn/textures.png')

  const cameraRef = useRef<Camera>()

  useEffect(() => {
    saturn.children.forEach((child) => {
      if (child instanceof Mesh) {
        child.material = new MeshStandardMaterial({
          map: texture,
        })
      }
    })

    lavaPlanet1.children.forEach((child) => {
      if (child instanceof Mesh) {
        child.material = new MeshStandardMaterial({
          map: texture,
        })
      }
    })

    sun.children.forEach((child) => {
      if (child instanceof Mesh) {
        child.material = new MeshStandardMaterial({
          map: texture,
        })
      }
    })

    planetsGroupRef.current?.position.set(-3, 0, -50)
  }, [saturn, texture, lavaPlanet1, sun])

  useFrame(() => {
    const date = Date.now() * 0.0001

    lavaPlanet1.position.x = Math.cos(date) * DISTANCE_TO_SUN
    lavaPlanet1.position.z = Math.sin(date) * DISTANCE_TO_SUN
  })

  return (
    <>
      <ambientLight intensity={0.07} />
      <directionalLight color="white" position={[0, 0, 5]} />
      <axesHelper args={[20]} />

      <Suspense fallback={<p>LOADING</p>}>
        <>
          <group ref={planetsGroupRef}>
            <motion.primitive
              object={lavaPlanet1}
              scale={[0.0002, 0.0002, 0.0002]}
              initial={{ y: 4, x: -5, z: -50 }}
              animate={{ rotateY: Math.PI * 2 }}
              transition={{
                type: 'tween',
                ease: 'linear',
                duration: 30,
                repeat: Infinity,
                repeatType: 'loop',
              }}
            />

            <motion.primitive
              object={sun}
              scale={[0.0003, 0.0003, 0.0003]}
              initial={{ y: 4, x: 0, z: 0 }}
              animate={{ rotateY: Math.PI * 2 }}
              transition={{
                type: 'tween',
                ease: 'linear',
                duration: 30,
                repeat: Infinity,
                repeatType: 'loop',
              }}
            />
          </group>

          <motion.primitive
            object={saturn}
            scale={[0.0004, 0.0004, 0.0004]}
            initial={{ rotateY: 0, rotateX: Math.PI / 7, y: 3 }}
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
          />

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
    <section className="absolute top-0 flex h-[calc(100vh+20rem)] w-[calc(100%*2)] grow items-center justify-center overflow-visible">
      <Canvas
        className={`relative w-[calc(100%*2)] translate-x-[9rem] translate-y-[27rem] scale-75 overflow-visible ${
          hasMounted ? 'opacity-80 md:opacity-100' : 'opacity-0'
        }  transition-opacity duration-500 md:translate-x-[7rem] md:translate-y-[13rem]  md:scale-100 
      lg:translate-y-0 lg:translate-x-[-10vw]`}
        camera={{ position: [-12.49, 3.54, 8.53] }}
      >
        <Scene />
      </Canvas>
    </section>
  )
}

export default memo(Saturn)
