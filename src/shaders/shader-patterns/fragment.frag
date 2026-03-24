varying vec2 vUv;

void main() {

    // // pattern 1
    // gl_FragColor = vec4(vUv, 0.0, 1.0);

    // pattern 2
    gl_FragColor = vec4(vUv.x, vUv.x, vUv.x, 1.0);
}