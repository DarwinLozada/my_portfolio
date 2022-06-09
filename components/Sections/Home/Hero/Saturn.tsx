import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion-3d'
import { OrbitControls, useFBX } from '@react-three/drei'
import { FC, Suspense } from 'react'

const Saturn: FC = () => {
  const gltf = useFBX('./models/saturn/scene.fbx')
  console.log(gltf)

  return (
    <Canvas
      className="h-full w-screen translate-x-[30rem] overflow-visible"
      camera={{ position: [-6, 2, 6] }}
    >
      <ambientLight intensity={0.1} />
      <directionalLight color="white" position={[0, 0, 5]} />

      <Suspense fallback={<p>LOADING</p>}>
        <axesHelper args={[10]} />
        <meshStandardMaterial />

        <motion.primitive
          object={gltf}
          initial={{ rotateY: 0 }}
          animate={{ rotateY: Math.PI * 2 }}
          transition={{
            type: 'tween',
            ease: 'linear',
            duration: 5,
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
