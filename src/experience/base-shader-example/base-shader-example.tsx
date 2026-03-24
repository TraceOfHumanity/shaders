import vertexShader from "../../shaders/base-shader/vertex.vert?raw";
import fragmentShader from "../../shaders/base-shader/fragment.frag?raw";
import {
  DoubleSide,
  Float32BufferAttribute,
  Mesh,
  RawShaderMaterial,
  TextureLoader,
  // TextureLoader,
  Uniform,
  Vector2,
} from "three";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";

const BaseShaderExample = () => {
  const meshRef = useRef<Mesh>(null);
  const materialRef = useRef<RawShaderMaterial>(null);
  const texture = new TextureLoader().load(
    "https://images.pexels.com/photos/36299703/pexels-photo-36299703.jpeg",
  );

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
      geometry.setAttribute("aRandom", new Float32BufferAttribute(vertices, 1));
      console.log("uv", geometry.attributes.uv);
    }
  }, [meshRef]);
  return (
    <>
      <mesh ref={meshRef} scale={[1, 2, 1]}>
        <planeGeometry args={[1, 1, 16, 16]} />
        <rawShaderMaterial
          ref={materialRef}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={{
            uTime: new Uniform(0),
            uTexture: new Uniform(texture),
            uFrequency: { value: new Vector2(10, 5) },
          }}
          side={DoubleSide}
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
