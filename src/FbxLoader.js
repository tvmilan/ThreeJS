import { useFBX } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

export default function FbxModel() {
  //   const fbx = useLoader(FBXLoader, "./components/Wallet.fbx");
  const fbx = useFBX("Wallet.fbx");
  console.log(fbx);
  const colorMap = useLoader(TextureLoader, "map.jpg");
  return (
    <>
      <primitive object={fbx} />
      <meshNormalMaterial attach="material" />

      {/* <MeshStandardMaterial map={colorMap} /> */}
    </>
  );
}
