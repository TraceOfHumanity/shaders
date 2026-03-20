import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import BaseShaderExample from "./base-shader-example/base-shader-example";

const Experience = () => {
  return (
    <Canvas>
      <BaseShaderExample />
      <OrbitControls />
    </Canvas>
  );
};

export default Experience;
