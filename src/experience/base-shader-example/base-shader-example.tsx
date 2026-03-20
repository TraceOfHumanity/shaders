import vertexShader from "../../shaders/base-shader/vertex.vert?raw";
import fragmentShader from "../../shaders/base-shader/fragment.frag?raw";
import { DoubleSide } from "three";

const BaseShaderExample = () => {
  return (
    <>
      <mesh>
        <planeGeometry args={[1, 1, 16, 16]} />
        <rawShaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          side={DoubleSide}
          transparent={true}
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
