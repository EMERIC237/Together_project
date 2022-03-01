import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import gsap from "gsap";

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
  camera.position.z = 5;
  camera.rotation.z = 1;
  scene = new THREE.Scene();

  const light = new THREE.AmbientLight(0x33ccff, 5);
  scene.add(light);

  loader.load("/models/old_vintage_globe/scene.gltf", (gltf) => {
    let model = gltf.scene;
    model.scale.set(0.025, 0.025, 0.025);

    gsap.to(camera.position, {
      duration: 2,
      ease: "back.out(1.7)",
      z: 1,
    });

    gsap.to(camera.rotation, {
      duration: 2,
      z: 0,
    });

    gsap.to(model.rotation, {
      x: 1,
      duration: 1,
      delay: 1,
    });

    gsap.to(model.rotation, {
      y: Math.PI,
      duration: 1,
      delay: 1,
    });

    gsap.to(model.scale, {
      delay: 1,
      duration: 1,
      x: 0.012,
      y: 0.012,
      z: 0.012,
    });

    gsap.to(model.position, {
      delay: 1,
      duration: 1,
      x: 0.35,
      y: 0.3,
    });

    scene.add(model);
  });

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setAnimationLoop(animation);
  renderer.setClearColor(0x33ccff, 1);
  document.body.appendChild(renderer.domElement);

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

// animation

function animation(time) {
  renderer.render(scene, camera);
}
