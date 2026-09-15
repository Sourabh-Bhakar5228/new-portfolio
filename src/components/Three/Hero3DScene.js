import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const Hero3DScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const width = currentMount.clientWidth || 500;
    const height = currentMount.clientHeight || 500;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 1.2, 7.5);

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    currentMount.appendChild(renderer.domElement);

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x38bdf8, 3, 20);
    cyanLight.position.set(-4, 3, 4);
    scene.add(cyanLight);

    const purpleLight = new THREE.PointLight(0xa855f7, 3.5, 20);
    purpleLight.position.set(4, -2, 3);
    scene.add(purpleLight);

    const topSpotLight = new THREE.SpotLight(0x818cf8, 2);
    topSpotLight.position.set(0, 8, 4);
    scene.add(topSpotLight);

    // Master Group for mouse tilt
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 4. Floating Laptop Model
    const laptopGroup = new THREE.Group();
    mainGroup.add(laptopGroup);

    // Laptop Base
    const baseGeo = new THREE.BoxGeometry(3.2, 0.12, 2.2);
    const darkMetalMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.25,
      metalness: 0.85,
    });
    const laptopBase = new THREE.Mesh(baseGeo, darkMetalMat);
    laptopBase.position.y = -0.6;
    laptopGroup.add(laptopBase);

    // Trackpad
    const trackpadGeo = new THREE.PlaneGeometry(0.9, 0.6);
    const trackpadMat = new THREE.MeshBasicMaterial({
      color: 0x1e293b,
      side: THREE.DoubleSide,
    });
    const trackpad = new THREE.Mesh(trackpadGeo, trackpadMat);
    trackpad.rotation.x = -Math.PI / 2;
    trackpad.position.set(0, -0.53, 0.55);
    laptopGroup.add(trackpad);

    // Keyboard Area Glow
    const kbGeo = new THREE.PlaneGeometry(2.8, 1.1);
    const kbMat = new THREE.MeshBasicMaterial({
      color: 0x071126,
      side: THREE.DoubleSide,
    });
    const keyboard = new THREE.Mesh(kbGeo, kbMat);
    keyboard.rotation.x = -Math.PI / 2;
    keyboard.position.set(0, -0.53, -0.28);
    laptopGroup.add(keyboard);

    // Screen Pivot & Display
    const screenPivot = new THREE.Group();
    screenPivot.position.set(0, -0.54, -1.05);
    screenPivot.rotation.x = 0.22; // Angled open
    laptopGroup.add(screenPivot);

    const screenBackGeo = new THREE.BoxGeometry(3.2, 2.05, 0.08);
    const screenBack = new THREE.Mesh(screenBackGeo, darkMetalMat);
    screenBack.position.set(0, 1.02, 0);
    screenPivot.add(screenBack);

    // Dynamic Canvas Texture for Animated Code Lines
    const codeCanvas = document.createElement("canvas");
    codeCanvas.width = 512;
    codeCanvas.height = 320;
    const ctx = codeCanvas.getContext("2d");

    const codeTexture = new THREE.CanvasTexture(codeCanvas);
    const screenMat = new THREE.MeshBasicMaterial({ map: codeTexture });
    const screenGeo = new THREE.PlaneGeometry(3.05, 1.9);
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.set(0, 1.02, 0.05);
    screenPivot.add(screenMesh);

    // Draw cyber terminal on screen
    const drawTerminalScreen = (time) => {
      ctx.fillStyle = "#030712";
      ctx.fillRect(0, 0, 512, 320);

      // Terminal Header
      ctx.fillStyle = "#0f172a";
      ctx.fillRect(0, 0, 512, 32);

      ctx.fillStyle = "#ef4444";
      ctx.beginPath();
      ctx.arc(20, 16, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#f59e0b";
      ctx.beginPath();
      ctx.arc(36, 16, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#10b981";
      ctx.beginPath();
      ctx.arc(52, 16, 5, 0, Math.PI * 2);
      ctx.fill();

      ctx.font = "bold 13px 'Courier New', monospace";
      ctx.fillStyle = "#94a3b8";
      ctx.fillText("sourabh@dev-station:~ (Lots247 & HyGlam)", 75, 20);

      // Code Lines
      ctx.font = "14px 'Courier New', monospace";
      const lines = [
        { text: "const developer = new FullStackEngineer();", col: "#c084fc" },
        { text: "developer.name = 'Sourabh Bhakar';", col: "#38bdf8" },
        { text: "developer.stack = ['MERN', 'Next.js', 'FastAPI', 'AI'];", col: "#34d399" },
        { text: "await developer.deployToProduction({ status: 'SUCCESS' });", col: "#fbbf24" },
        { text: ">> AI Chatbot Legal Assistant: ACTIVE (24/7)", col: "#38bdf8" },
        { text: ">> Database Latency: 1.2ms | Docker: RUNNING", col: "#a78bfa" },
        { text: ">> Open to International Relocation & Global Roles", col: "#10b981" },
      ];

      const visibleCount = Math.floor((time * 1.5) % (lines.length + 3));
      lines.slice(0, visibleCount).forEach((line, i) => {
        ctx.fillStyle = line.col;
        ctx.fillText(line.text, 24, 65 + i * 26);
      });

      // Blinking cursor
      if (Math.sin(time * 5) > 0) {
        ctx.fillStyle = "#38bdf8";
        ctx.fillRect(24 + (visibleCount < lines.length ? lines[Math.min(visibleCount, lines.length - 1)].text.length * 8.5 : 20), 65 + Math.min(visibleCount, lines.length - 1) * 26 - 12, 8, 16);
      }

      codeTexture.needsUpdate = true;
    };

    // 5. Orbiting 3D Tech Geometries
    // A. React Atom Rings
    const reactGroup = new THREE.Group();
    reactGroup.position.set(-2.6, 1.4, 0.5);
    mainGroup.add(reactGroup);

    const nucleusGeo = new THREE.SphereGeometry(0.2, 16, 16);
    const cyanEmissiveMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.8,
    });
    reactGroup.add(new THREE.Mesh(nucleusGeo, cyanEmissiveMat));

    for (let i = 0; i < 3; i++) {
      const ringGeo = new THREE.TorusGeometry(0.7, 0.028, 16, 48);
      const ringMesh = new THREE.Mesh(ringGeo, cyanEmissiveMat);
      ringMesh.rotation.x = Math.PI / 2;
      ringMesh.rotation.y = (i * Math.PI) / 3;
      reactGroup.add(ringMesh);
    }

    // B. AI Neural Node (Octahedron Cluster)
    const aiGroup = new THREE.Group();
    aiGroup.position.set(2.7, 1.2, 0.8);
    mainGroup.add(aiGroup);

    const purpleMat = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      emissive: 0x7e22ce,
      emissiveIntensity: 0.7,
      wireframe: true,
    });
    const octaGeo = new THREE.OctahedronGeometry(0.65, 1);
    const octaMesh = new THREE.Mesh(octaGeo, purpleMat);
    aiGroup.add(octaMesh);

    // C. Database Cylinder Stack (MongoDB / PostgreSQL)
    const dbGroup = new THREE.Group();
    dbGroup.position.set(2.4, -1.2, 0.2);
    mainGroup.add(dbGroup);

    const dbMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      emissive: 0x059669,
      emissiveIntensity: 0.5,
      metalness: 0.7,
      roughness: 0.3,
    });

    for (let d = 0; d < 3; d++) {
      const cylGeo = new THREE.CylinderGeometry(0.38, 0.38, 0.16, 24);
      const cyl = new THREE.Mesh(cylGeo, dbMat);
      cyl.position.y = (d - 1) * 0.26;
      dbGroup.add(cyl);
    }

    // D. Python / FastAPI Floating Cube
    const cubeGroup = new THREE.Group();
    cubeGroup.position.set(-2.5, -1.2, 0.4);
    mainGroup.add(cubeGroup);

    const cubeGeo = new THREE.BoxGeometry(0.6, 0.6, 0.6);
    const wireframeMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x2563eb,
      emissiveIntensity: 0.6,
      wireframe: true,
    });
    cubeGroup.add(new THREE.Mesh(cubeGeo, wireframeMat));

    // 6. Background Floating Particle Starfield
    const particleCount = 180;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let p = 0; p < particleCount * 3; p += 3) {
      positions[p] = (Math.random() - 0.5) * 16;
      positions[p + 1] = (Math.random() - 0.5) * 12;
      positions[p + 2] = (Math.random() - 0.5) * 10;

      // Cyan / Violet / Indigo colors
      const isCyan = Math.random() > 0.5;
      colors[p] = isCyan ? 0.22 : 0.65;
      colors[p + 1] = isCyan ? 0.74 : 0.33;
      colors[p + 2] = 0.98;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 7. Mouse Movement Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const rect = currentMount.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      mouseX = (clientX / rect.width) * 2 - 1;
      mouseY = -(clientY / rect.height) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 8. Resize Handler
    const handleResize = () => {
      if (!currentMount) return;
      const newWidth = currentMount.clientWidth;
      const newHeight = currentMount.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // 9. Animation Loop
    let clock = new THREE.Clock();
    let animId;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth lerp for mouse parallax
      targetX += (mouseX * 0.45 - targetX) * 0.05;
      targetY += (mouseY * 0.3 - targetY) * 0.05;

      mainGroup.rotation.y = targetX;
      mainGroup.rotation.x = -targetY;

      // Organic gentle floating levitation
      laptopGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.15;
      laptopGroup.rotation.y = Math.sin(elapsedTime * 0.8) * 0.08;

      // Orbit rotations
      reactGroup.rotation.y = elapsedTime * 1.2;
      reactGroup.rotation.z = elapsedTime * 0.6;

      aiGroup.rotation.x = elapsedTime * 0.8;
      aiGroup.rotation.y = elapsedTime * 1.1;

      dbGroup.rotation.y = -elapsedTime * 0.9;
      cubeGroup.rotation.x = elapsedTime * 0.7;
      cubeGroup.rotation.y = elapsedTime * 0.9;

      // Slow particle field drift
      particles.rotation.y = elapsedTime * 0.04;

      // Screen canvas code rendering
      drawTerminalScreen(elapsedTime);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="hero-3d-container">
      <div ref={mountRef} className="three-canvas-holder" />
      {/* Floating Badges over 3D Scene */}
      <div
        className="scene-floating-badge"
        style={{ top: "12%", left: "6%" }}
      >
        <span>⚛️</span>
        <div>
          <strong>React & Next.js</strong>
          <div style={{ fontSize: "0.75rem", color: "#94a3b8" }}>
            Production SSR / App Router
          </div>
        </div>
      </div>

      <div
        className="scene-floating-badge"
        style={{ bottom: "16%", right: "6%", animationDelay: "1.5s" }}
      >
        <span>🤖</span>
        <div>
          <strong>AI & FastAPI</strong>
          <div style={{ fontSize: "0.75rem", color: "#94a3b8" }}>
            Lots247 Chatbot & LLMs
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3DScene;
