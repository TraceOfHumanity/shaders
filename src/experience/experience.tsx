import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// import BaseShaderExample from "./base-shader-example/base-shader-example";
import Ligth from "./ligth";
import ShaderPatterns from "./shader-patterns/shader-patterns";

const Experience = () => {
  return (
    <Canvas>
      <OrbitControls />
      <Ligth />
      {/* <BaseShaderExample /> */}
      <ShaderPatterns />
    </Canvas>
  );
};

export default Experience;
