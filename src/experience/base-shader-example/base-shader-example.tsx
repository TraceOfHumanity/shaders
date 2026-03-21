import vertexShader from "../../shaders/base-shader/vertex.vert?raw";
import fragmentShader from "../../shaders/base-shader/fragment.frag?raw";
import { DoubleSide, Mesh, RawShaderMaterial, Uniform } from "three";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const BaseShaderExample = () => {
  const meshRef = useRef<Mesh>(null);
  const materialRef = useRef<RawShaderMaterial>(null);
  const [vertices, setVertices] = useState<Float32Array>(new Float32Array([]));

  useFrame((state) => {
    const material = materialRef.current;
    if (material?.uniforms.uTime) {
      material.uniforms.uTime.value = state.clock.getElapsedTime();
    }
  });

  useEffect(() => {
    if (meshRef.current) {
      const geometry = meshRef.current.geometry;
      const vertices = geometry.attributes.position.array;
      for (let i = 0; i < vertices.length; i++) {
        vertices[i] = Math.random();
      }
      setVertices(new Float32Array(vertices));
    }
  }, [meshRef]);
  return (
    <>
      <mesh ref={meshRef}>
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
