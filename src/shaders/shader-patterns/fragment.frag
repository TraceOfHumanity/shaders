varying vec2 vUv;

void main() {

    // // pattern 1
    // gl_FragColor = vec4(vUv, 0.0, 1.0);

    // // pattern 2
    // float strength = vUv.x;
    // gl_FragColor = vec4(vec3(strength), 1.0);

    // // pattern 3
    // float strength = vUv.y;
    // gl_FragColor = vec4(vec3(strength), 1.0);

    // // pattern 4
    // float strength = 1.0 - vUv.y;
    // gl_FragColor = vec4(vec3(strength), 1.0);
    
    // pattern 5
    float strength = vUv.y * 10.0;
    gl_FragColor = vec4(vec3(strength), 1.0);
    
}