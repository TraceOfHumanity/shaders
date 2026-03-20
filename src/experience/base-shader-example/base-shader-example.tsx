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
    </>
  );
};

export default BaseShaderExample;
