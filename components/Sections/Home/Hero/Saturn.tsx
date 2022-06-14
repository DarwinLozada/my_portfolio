import { Canvas, useLoader } from '@react-three/fiber'
import { motion } from 'framer-motion-3d'
import { OrbitControls, useFBX } from '@react-three/drei'
import { FC, Suspense, useEffect } from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

const Scene: FC = () => {
  const gltf = useFBX('./models/saturn/scene.fbx')
  const texture = useLoader(TextureLoader, './models/saturn/textures.png')

  console.log(gltf)

  useEffect(() => {
    gltf.onLoad(() => {
      gltf.children.map((child) => {
        child.material.map = texture
        child.material.needsUpdate = true
      })
    })
  }, [gltf, texture])
  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight color="white" position={[0, 0, 5]} />
      {/* <meshStandardMaterial map={texture} /> */}

      <Suspense fallback={<p>LOADING</p>}>
        <axesHelper args={[10]} />

        <motion.primitive
          object={gltf}
          scale={[0.0004, 0.0004, 0.0004]}
          initial={{ rotateY: 0 }}
          animate={{ rotateY: Math.PI * 2 }}
          transition={{
            type: 'tween',
            ease: 'linear',
            duration: 20,
            repeat: Infinity,
            repeatType: 'loop'
          }}
        />

        <meshStandardMaterial map={texture} />

        <OrbitControls
          position={[1.8015924207932403, -0.439419393818959, 4.355156449342727]}
        />
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
