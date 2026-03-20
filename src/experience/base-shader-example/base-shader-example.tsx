import vertexShader from "../../shaders/base-shader/vertex.vert?raw";
import fragmentShader from "../../shaders/base-shader/fragment.frag?raw";
import { DoubleSide, RawShaderMaterial, Uniform } from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const BaseShaderExample = () => {
  const materialRef = useRef<RawShaderMaterial>(null);

  useFrame((state) => {
    const material = materialRef.current;
    if (material?.uniforms.uTime) {
      material.uniforms.uTime.value = state.clock.getElapsedTime();
    }
  });
  return (
    <>
      <mesh>
        <planeGeometry args={[1, 1, 16, 16]} />
        <rawShaderMaterial
          ref={materialRef}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={{ uTime: new Uniform(0) }}
        />
      </mesh>
      <mesh position={[-2, 0, 0]}>
        <planeGeometry />
        <meshStandardMaterial color="red" side={DoubleSide} />
      </mesh>
    </>
  );
};

export default BaseShaderExample;
