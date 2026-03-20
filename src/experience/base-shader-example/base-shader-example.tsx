import vertexShader from "../../shaders/base-shader/vertex.vert?raw";
import fragmentShader from "../../shaders/base-shader/fragment.frag?raw";

const BaseShaderExample = () => {
  return (
    <>
      <mesh>
        <boxGeometry />
        <rawShaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
        />
      </mesh>
      <mesh position={[-2, 0, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="red" />
      </mesh>
    </>
  );
};

export default BaseShaderExample;
