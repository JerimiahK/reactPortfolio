import Points from "./Points"
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";


export default function Three() {
  // const backgroundColor = new THREE.Color(0x050505);
  // const fog = new THREE.Fog(0x050505, 2000, 3500);
  // const styles = {
  //   sceneStyle: {
  //     backgroundColor: backgroundColor,
  //     fog: fog,
  //   },
  // };

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
