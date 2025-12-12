import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Unique "Digital Particle Sphere"
 * A cloud of glowing data points representing a digital globe.
 */
const RotatingGlobe = ({ style, className }) => {
    const mountRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        // 1. Scene Setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, mount.clientWidth / mount.clientHeight, 0.1, 100);
        camera.position.z = 5.5;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(mount.clientWidth, mount.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        mount.appendChild(renderer.domElement);

        // 2. Create Particle Geometry
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 2000;

        const posArray = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount; i++) {
            // Generate points on sphere surface using spherical coordinates
            const theta = Math.random() * Math.PI * 2; // Azimuth
            const phi = Math.acos((Math.random() * 2) - 1); // Polar angle (uniform distribution)

            const r = 2.2; // Radius

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);

            posArray[i * 3] = x;
            posArray[i * 3 + 1] = y;
            posArray[i * 3 + 2] = z;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

        // 3. Material
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.035,
            color: 0x3b82f6, // Login Blue
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending, // Makes overlapping dots glow
            sizeAttenuation: true
        });

        // 4. Mesh
        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        // Add a subtle inner glow sphere to give it body
        const innerGeo = new THREE.SphereGeometry(2.0, 32, 32);
        const innerMat = new THREE.MeshBasicMaterial({
            color: 0x3b82f6,
            transparent: true,
            opacity: 0.05,
            wireframe: true
        });
        const innerSphere = new THREE.Mesh(innerGeo, innerMat);
        scene.add(innerSphere);

        // 5. Animation
        let frameId;
        const animate = () => {
            frameId = requestAnimationFrame(animate);

            // Rotate object
            particlesMesh.rotation.y += 0.002;
            particlesMesh.rotation.x += 0.0005; // Gentle tilt rotation

            innerSphere.rotation.y -= 0.001; // Counter rotate inner wireframe
            innerSphere.rotation.x -= 0.001;

            renderer.render(scene, camera);
        };
        animate();

        // 6. Resize Observer
        const handleResize = () => {
            if (!mount) return;
            const w = mount.clientWidth;
            const h = mount.clientHeight;
            if (w === 0 || h === 0) return;

            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        };

        const resizeObserver = new ResizeObserver(() => handleResize());
        resizeObserver.observe(mount);

        return () => {
            cancelAnimationFrame(frameId);
            resizeObserver.disconnect();
            if (mount && renderer.domElement) mount.removeChild(renderer.domElement);
            particlesGeometry.dispose();
            particlesMaterial.dispose();
            innerGeo.dispose();
            innerMat.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <div
            ref={mountRef}
            className={className}
            style={{ width: '100%', height: '100%', ...style }}
        />
    );
};

export default React.memo(RotatingGlobe);
