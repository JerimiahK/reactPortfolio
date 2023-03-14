import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function Box() {
  const cubeRef = useRef();
  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.00018;
      cubeRef.current.rotation.y += 0.00019;
    }
  });

  const geometry = useMemo(() => {
    const particles = 1000000;

    let geometry = new THREE.BufferGeometry();

    let positions = [];
    let colors = [];

    let color = new THREE.Color();

    const n = 3000,
    n2 = n / 2; // particles spread in the cube

    for (let i = 0; i < particles; i++) {
      // positions

      const x = Math.random() * n - n2;
      const y = Math.random() * n - n2;
      const z = Math.random() * n - n2;

      positions.push(x, y, z);

      // colors

      const vx = x / n + 0.03;
      const vy = y / n + 0.002;
      const vz = z / n + 0.09;

      color.setRGB(vx, vy, vz);

      colors.push(color.r, color.g, color.b);
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

    geometry.computeBoundingSphere();

    return geometry;
  }, []);

  const material = useMemo(() => {
    return new THREE.PointsMaterial({ size: 5, vertexColors: true });
  }, []);

  return <points ref={cubeRef} geometry={geometry} material={material} />;
}

export default function Points() {
  return <Box />;
}
