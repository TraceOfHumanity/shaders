import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Experience = () => {
  return (
    <Canvas>
      <mesh>
        <boxGeometry />
        <meshBasicMaterial color="red" />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
};

export default Experience;
