import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { motion } from 'framer-motion-3d'
import {
  OrbitControls,
  useFBX,
  PerspectiveCamera,
  Stars,
  useProgress,
  Html,
} from '@react-three/drei'
import { FC, memo, Suspense, useEffect, useRef, useMemo } from 'react'
import { Camera, Group, Mesh, MeshStandardMaterial } from 'three'

import { TextureLoader } from 'three/src/loaders/TextureLoader'
import useIsClient from 'hooks/useIsClient'
import {
  EffectComposer,
  Selection,
  SelectiveBloom,
  Select,
} from '@react-three/postprocessing'

const PLANETS_POS_TO_SUN = [
  { distance: 7, posIndex: 1.34 },
  { distance: 15, posIndex: 1.45 },
  { distance: 24, posIndex: 0.19 },
]

const STELAR_SYSTEM_CENTER = {
  x: -3,
  y: 0,
  z: -50,
}

const Loader: FC = () => {
  const { progress } = useProgress()
  return (
    <Html>
      <h1>HOLISSS {progress}</h1>{' '}
    </Html>
  )
}

const Scene: FC = () => {
  const saturn = useFBX('./models/saturn/planet.fbx')
  const asteroidsOne = useFBX('./models/saturn/asteroids1.fbx')
  const asteroidsTwo = useFBX('./models/saturn/asteroids2.fbx')

  const cutePlanet1 = useFBX('./models/extra_planets/cute_planet1.fbx')
  const waterPlanet1 = useFBX('./models/extra_planets/water_planet1.fbx')
  const sun = useFBX('./models/extra_planets/sun.fbx')

  const planetsGroupRef = useRef<Group | null>(null)

  const texture = useLoader(TextureLoader, './models/saturn/textures.png')

  const cameraRef = useRef<Camera>()

  const extraPlanets = useMemo(
    () => [cutePlanet1, waterPlanet1],
    [cutePlanet1, waterPlanet1],
  )

  useEffect(() => {
    saturn.children.forEach((child) => {
      if (child instanceof Mesh) {
        child.material = new MeshStandardMaterial({
          map: texture,
        })
      }
    })

    extraPlanets.forEach((planet) => {
      planet.children.forEach((child) => {
        if (child instanceof Mesh) {
          child.material = new MeshStandardMaterial({
            map: texture,
          })
        }
      })
    })

    sun.children.forEach((child) => {
      if (child instanceof Mesh) {
        child.material = new MeshStandardMaterial({
          emissive: '#79d4f7',
        })
      }
    })

    planetsGroupRef.current?.position.set(
      STELAR_SYSTEM_CENTER.x,
      STELAR_SYSTEM_CENTER.y,
      STELAR_SYSTEM_CENTER.z,
    )
  }, [saturn, texture, sun, extraPlanets])

  useFrame(() => {
    const date = Date.now() * 0.0001
    extraPlanets.forEach((planet, index) => {
      planet.position.x =
        Math.cos(date * PLANETS_POS_TO_SUN[index].posIndex) *
        PLANETS_POS_TO_SUN[index].distance

      planet.position.z =
        Math.sin(date * PLANETS_POS_TO_SUN[index].posIndex) *
        PLANETS_POS_TO_SUN[index].distance
    })
  })

  return (
    <Selection>
      <EffectComposer>
        <SelectiveBloom
          luminanceThreshold={0}
          luminanceSmoothing={0.9}
          height={300}
        />
      </EffectComposer>
      <scene>
        <ambientLight intensity={0.07} />
        <Stars count={1500} />

        <Suspense fallback={<></>}>
          <group ref={planetsGroupRef}>
            <Select enabled>
              <pointLight position={[0, 4, 0]} intensity={1} color="#79d4f7" />
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
            </Select>

            <motion.primitive
              object={cutePlanet1}
              scale={[0.00013, 0.00013, 0.00013]}
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
              object={cutePlanet1}
              scale={[0.00013, 0.00013, 0.00013]}
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
              object={waterPlanet1}
              scale={[0.00013, 0.00013, 0.00013]}
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
          </group>

          <Select enabled>
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
          </Select>

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
        </Suspense>
      </scene>
    </Selection>
  )
}

const Saturn: FC = () => {
  return (
    <section className="absolute top-0 flex h-[calc(100vh+30rem)] w-[calc(100%*2)] grow items-center justify-center overflow-visible">
      <Canvas
        className={`relative w-[calc(100%*2)] translate-x-[9rem] translate-y-[27rem] scale-75 overflow-visible opacity-80 transition-opacity duration-500 md:translate-x-[7rem] md:translate-y-[13rem] md:scale-100  md:opacity-100 
      lg:translate-y-0 lg:translate-x-[-10vw]`}
        camera={{ position: [-12.49, 3.54, 8.53] }}
      >
        <Scene />
        <Loader />
      </Canvas>
    </section>
  )
}

export default memo(Saturn)
