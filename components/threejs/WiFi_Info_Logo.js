import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function WiFi_Info_Logo(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/WiFi_Info_Logo.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        receiveShadow
        castShadow
        geometry={nodes["Wi-Fi_Info_Logo"].geometry}
        material={materials["Material.001"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[200, 1, 200]}
      />
    </group>
  );
}

useGLTF.preload("/WiFi_Info_Logo.gltf");