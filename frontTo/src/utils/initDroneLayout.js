import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

let camera, scene, renderer;
const loader = new GLTFLoader();

// init
export function init() {
  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    10
  );
  camera.position.z = 1;
  scene = new THREE.Scene();

  const light = new THREE.AmbientLight(0xffffff, 2);
  scene.add(light);

  loader.load("/models/old_vintage_globe/scene.gltf", (gltf) => {
    let model = gltf.scene;
    model.scale.set(0.45, 0.45, 0.45);
    scene.add(model);
  });

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setAnimationLoop(animation);
  document.body.appendChild(renderer.domElement);
}

// animation

function animation() {
  renderer.render(scene, camera);
}
