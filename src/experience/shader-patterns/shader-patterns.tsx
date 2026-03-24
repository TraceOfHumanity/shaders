import { useRef } from "react";
import { DoubleSide, Mesh, ShaderMaterial } from "three";
import vertexShader from "../../shaders/shader-patterns/vertex.vert?raw";
import fragmentShader from "../../shaders/shader-patterns/fragment.frag?raw";

const ShaderPatterns = () => {
  const meshRef = useRef<Mesh>(null);
  const materialRef = useRef<ShaderMaterial>(null);

  return (
    <>
      <mesh ref={meshRef} scale={[1, 1, 1]}>
        <planeGeometry args={[1, 1, 16, 16]} />
        <shaderMaterial
          ref={materialRef}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          side={DoubleSide}
        />
      </mesh>
    </>
  );
};

export default ShaderPatterns;
