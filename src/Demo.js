import { useState, Suspense } from "react";
import "./styles.css";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Box from "./components/Box";
import AnimatedSphere from "./components/AnimatedSphere";
import Iphone from "./components/Iphone";
import FbxModel from "./FbxLoader";
import Wallet from "./components/Wallet";

export default function App() {
  const [color, setColor] = useState("red");

  return (
    <div className="App">
      {/* <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          <Box />
        </Suspense>
      </Canvas> */}
      {/* <Canvas className="canvas">
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          <AnimatedSphere />
        </Suspense>
      </Canvas> */}
      {/* <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1.5} />
        <directionalLight position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          <Iphone scale={1.0} color={"red"} />
        </Suspense>
      </Canvas> */}
      <Canvas camera={{ fov: 75, position: [0, 0, 20] }}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1.5} />
        <directionalLight position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          <Wallet color={color} />
        </Suspense>
      </Canvas>
      <button
        onClick={() => {
          if (color === "blue") {
            setColor("red");
          } else {
            setColor("blue");
          }
        }}
      >
        Change color
      </button>
      {/* <Canvas camera={{ fov: 75, position: [0, 0, 5] }}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          <FbxModel />
        </Suspense>
      </Canvas> */}
    </div>
  );
}
