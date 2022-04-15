import { useState, Suspense, useRef } from "react";
import "./styles.css";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useLoader } from "react-three-fiber";

import Box from "./components/Box";
import AnimatedSphere from "./components/AnimatedSphere";
import Iphone from "./components/Iphone";
import FbxModel from "./FbxLoader";
import Wallet from "./components/Wallet";
import { TextureLoader } from "three";

export default function App() {
  const [color, setColor] = useState("red");
  const [pattern, setpattern] = useState(false);
  const [nMap, setnMap] = useState(1);

  function Model({ color, pattern, nMap, ...props }) {
    const group = useRef();
    const { nodes, materials } = useGLTF("/Wallet.gltf");
    const colorMap = useLoader(TextureLoader, "/map.jpg");
    const colorMap2 = useLoader(TextureLoader, "/map2.jpg");
    let newcolorMap;
    console.log(pattern);

    return (
      <group ref={group} {...props} dispose={null} scale={2}>
        <mesh
          geometry={nodes.WalletPlain.geometry}
          material={nodes.WalletPlain.material}
          // position={[0.17, 0, -3.84]}
          position={[0, 0, 0]}
          rotation={[-1.0, 1.29, 0.6]}
        >
          {pattern ? (
            nMap === 1 ? (
              <meshStandardMaterial color={color} map={colorMap} />
            ) : (
              <meshStandardMaterial color={color} map={colorMap2} />
            )
          ) : (
            <meshStandardMaterial color={color} />
          )}

          {/* <meshStandardMaterial color={color} map={colorMap} /> */}
        </mesh>
        {/* <meshNormalMaterial attach="material" color={"red"} /> */}
      </group>
    );
  }
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
        <directionalLight position={[-2, -5, 2]} />
        <Suspense fallback={null}>
          {/* <Wallet color={color} pattern={pattern} /> */}
          <Model color={color} pattern={pattern} nMap={nMap} />
        </Suspense>
      </Canvas>
      <button
        onClick={() => {
          if (color === "skyblue") {
            setColor("hotpink");
          } else {
            setColor("skyblue");
          }
        }}
      >
        Change color
      </button>{" "}
      &nbsp;
      <button
        onClick={() => {
          setpattern(!pattern);
        }}
      >
        Apply remove pattern
      </button>
      &nbsp;
      <button
        onClick={() => {
          if (nMap === 1) {
            setnMap(2);
          } else {
            setnMap(1);
          }
        }}
      >
        Apply remove pattern
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
