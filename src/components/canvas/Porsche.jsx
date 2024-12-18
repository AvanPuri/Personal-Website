import {Suspense, useEffect, useState} from 'react'
import { Canvas } from '@react-three/fiber';
import {PerformanceMonitor, AccumulativeShadows, OrbitControls, Preload, RandomizedLight, useGLTF, Environment} from '@react-three/drei';

import CanvasLoader from '../Loader';

const Porsche = () => {
  const Porsche = useGLTF('./car/scene.gltf')
  return (
    <mesh>
      <spotLight position={[10,10,10]} angle={0.7} penumbra={1} castShadow intensity={5} shadow-mapSize={1024}/>
      <spotLight position={[-10,5,10]} intensity={5} angle={0.7} penumbra={1} />
      <spotLight position={[-19,50,10]} intensity={5} angle={0.12} penumbra={1} />
      <ambientLight intensity={3.5} />
      <directionalLight position={[0,10,0]} intensity={2} />
      <RandomizedLight amount={4} radius={5} ambient={0.3} position={[5,5,15]} />
      <primitive object={Porsche.scene}
      scale={1.3}
      position={[0, -2, -1.5]}
      rotation={[0, Math.PI / 5, 0]}
      />

    </mesh>
  )

  /*Model Information:
* title:	FREE 1975 Porsche 911 (930) Turbo
* source:	https://sketchfab.com/3d-models/free-1975-porsche-911-930-turbo-8568d9d14a994b9cae59499f0dbed21e
* author:	Lionsharp Studios (https://sketchfab.com/lionsharp)

Model License:
* license type:	CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
* requirements:	Author must be credited. Commercial use is allowed.

If you use this 3D model in your project be sure to copy paste this credit wherever you share it:
This work is based on "FREE 1975 Porsche 911 (930) Turbo" (https://sketchfab.com/3d-models/free-1975-porsche-911-930-turbo-8568d9d14a994b9cae59499f0dbed21e) by Lionsharp Studios (https://sketchfab.com/lionsharp) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/) */
}
const PorscheCanvas = () => {
  

return(
<Canvas 
frameloop="demand"
shadows
camera={{position: [7,2,15], fov: 35}}
gl={{preserveDrawingBuffer: true}}
>
<Suspense fallback={<CanvasLoader/>}>
<OrbitControls 
enableZoom={false}
maxPolarAngle={Math.PI/2}
minPolarAngle={Math.PI/2}
/>
<Porsche/>
</Suspense>
<Preload all/>
</Canvas>

)

}

export default PorscheCanvas;