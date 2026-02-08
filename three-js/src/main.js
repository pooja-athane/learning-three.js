import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// camera.position.z = 5;

// const canvas = document.querySelector("#canvas")
// const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);


// // make the canvas responsive
// window.addEventListener("resize", () => {
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();    
// })

// function animate() {
//     window.requestAnimationFrame(animate);
//     renderer.render(scene, camera);
//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;
// }

// animate();

// This scene is already created above: a basic Three.js scene with a box and basic material.
// If you'd like an alternative implementation or to encapsulate it, here is a minimal version:

// Alternate implementation (non-duplicate):

const basicScene = () => {
    const basicScene = new THREE.Scene();
    const basicCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
    const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x2194ce, wireframe: true });
    const box = new THREE.Mesh(boxGeometry, boxMaterial);
    box.position.set(0, 0, 0);  // cube at scene center
    basicScene.add(box);

    basicCamera.position.z = 3;

    const basicCanvas = document.createElement("canvas");
    basicCanvas.style.position = "fixed";
    basicCanvas.style.left = "50%";
    basicCanvas.style.top = "50%";
    basicCanvas.style.transform = "translate(-50%, -50%)";
    document.body.appendChild(basicCanvas);

    const basicRenderer = new THREE.WebGLRenderer({ canvas: basicCanvas, antialias: true });
    basicRenderer.setSize(window.innerWidth / 3, window.innerHeight / 3);
    basicRenderer.setClearColor(0xffffff, 1);

    const controls = new OrbitControls(basicCamera, basicRenderer.domElement);
    controls.target.set(0, 0, 0);  // orbit around cube center
    controls.enableDamping = true;
    controls.enableZoom = true;


    function animateBox() {
        requestAnimationFrame(animateBox);
        controls.update();
        basicRenderer.render(basicScene, basicCamera);
    }
    animateBox();

};
basicScene();








// scene
// camera
// mesh - geometry and material
// renderer
// request animation frame