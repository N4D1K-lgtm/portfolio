import { Canvas } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Box() {
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh}>
      <boxBufferGeometry />
      <meshStandardMaterial />
    </mesh>
  );
}

export default Box;
