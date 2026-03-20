import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import BaseShaderExample from "./base-shader-example/base-shader-example";
import Ligth from "./ligth";

const Experience = () => {
  return (
    <Canvas>
      <BaseShaderExample />
      <OrbitControls />
      <Ligth />
    </Canvas>
  );
};

export default Experience;
