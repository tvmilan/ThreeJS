/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ color, ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/Wallet.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.WalletPlain.geometry}
        material={nodes.WalletPlain.material}
        position={[0.17, 0, -3.84]}
      >
        <meshStandardMaterial color={color} />
      </mesh>
      {/* <meshNormalMaterial attach="material" color={"red"} /> */}
    </group>
  );
}

useGLTF.preload("/Wallet.gltf");