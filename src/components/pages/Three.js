import Points from "./Points"
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll } from "@react-three/drei";


export default function Three() {
  return (
    <div id="background">
      <Canvas
        camera={{
          fov: 27,
          aspect: window.innerWidth / window.innerHeight,
          near: 5,
          far: 3500,
          position: [0, 0, 4000],
        }}
      >
        <Points />
      </Canvas>
    </div>
  );
}
