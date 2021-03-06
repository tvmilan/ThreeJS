/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useLoader } from "react-three-fiber";
import { TextureLoader } from "three";

export default function Model({ color, pattern, ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/Wallet.gltf");
  const colorMap = useLoader(TextureLoader, "/map.jpg");
  let newcolorMap;
  console.log(pattern);

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.WalletPlain.geometry}
        material={nodes.WalletPlain.material}
        // position={[0.17, 0, -3.84]}
        position={[0, 0, 0]}
        rotation={[-1.0, 1.29, 0.6]}
      >
        {pattern ? (
          <meshStandardMaterial color={color} map={colorMap} />
        ) : (
          <meshStandardMaterial color={color} />
        )}

        {/* <meshStandardMaterial color={color} map={colorMap} /> */}
      </mesh>
      {/* <meshNormalMaterial attach="material" color={"red"} /> */}
    </group>
  );
}

useGLTF.preload("/Wallet.gltf");
