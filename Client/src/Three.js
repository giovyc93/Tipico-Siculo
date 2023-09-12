import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import "./index.css";
import bg1 from "./assets/img/onde verdi.jpg";

function Three() {
  const containerRef = useRef(null);

  useEffect(() => {
    const loader = new THREE.TextureLoader();

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.PlaneGeometry(25, 13, 13, 13);
    const material = new THREE.MeshBasicMaterial({
      map: loader.load(bg1),
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    camera.position.z = 5;

    const count = geometry.attributes.position.count;
    const clock = new THREE.Clock();

    function animate() {
      const time = clock.getElapsedTime();
      for (let i = 0; i < count; i++) {
        const x = geometry.attributes.position.getX(i);
        const y = geometry.attributes.position.getY(i);

        const anim1 = 0.15 * Math.sin(x + time * 0.4);
        const anim2 = 0.25 * Math.sin(x * 1 + time * 0.4);
        const anim3 = 0.1 * Math.sin(y * 15 + time * 0.4);

        geometry.attributes.position.setZ(i, anim1 + anim2 + anim3);
        geometry.computeVertexNormals();
        geometry.attributes.position.needsUpdate = true;
      }
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    animate();
  }, []);

  return <div className="three_bg" ref={containerRef}></div>;
}

export default Three;
