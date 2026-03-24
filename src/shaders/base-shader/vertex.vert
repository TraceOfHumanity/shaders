uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;
attribute vec3 position;
attribute float aRandom;
attribute vec2 uv;

uniform float uTime;
uniform vec2 uFrequency;

varying float vRandom;
varying vec2 vUv;
varying float vElevation;

void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    // modelPosition.z += sin(modelPosition.x * 10.0 + aRandom) * 0.1;
    // modelPosition.z += aRandom * 0.1;
    // modelPosition.z += sin(aRandom * 0.3 + uTime) * 0.5;
    // modelPosition.z += cos(aRandom + uTime) * 0.1;

    // modelPosition.z += sin(modelPosition.x * uFrequency.x + uTime) * 0.1;
    // modelPosition.z += sin(modelPosition.y * uFrequency.y + uTime) * 0.1;

    float elevation = sin(modelPosition.x * uFrequency.x - uTime) * 0.1;
    elevation += sin(modelPosition.y * uFrequency.y - uTime) * 0.1;
    modelPosition.z += elevation;
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;
    vRandom = aRandom;
    vUv = uv;
    vElevation = elevation;
}
