// import React, { useRef } from "react";
// import { useGLTF } from "@react-three/drei";

// export const Model = (props) => {
//   const { nodes, materials } = useGLTF("../assets/spacecraft.glb");
//   return (
//     <group {...props} dispose={null}>
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Cube.geometry}
//         material={materials["Sci fi wall"]}
//         position={[3.79, 0.11, -8.11]}
//         rotation={[2.27, 0.7, -2.85]}
//         scale={[0.46, 0.46, 3.86]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.discombobulated_mesh.geometry}
//         material={materials["Sci fi wall"]}
//         position={[7.34, -3.14, -10.85]}
//         rotation={[2.27, 0.7, -2.85]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Cube001.geometry}
//         material={nodes.Cube001.material}
//         position={[1.33, 2.35, -6.21]}
//         rotation={[-0.43, 0.84, -0.34]}
//         scale={[0.46, 0.46, 3.86]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.discombobulated_mesh001.geometry}
//         material={materials["Sci fi wall"]}
//         position={[1.33, 2.35, -6.21]}
//         rotation={[-0.43, 0.83, -0.33]}
//         scale={[0.46, 0.46, 3.86]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Plane.geometry}
//         material={materials["Automotive led lights"]}
//         position={[4.05, 0.31, -8.52]}
//         rotation={[2.27, 0.7, -2.85]}
//         scale={[0.1, 1, 3.63]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Plane001.geometry}
//         material={materials["Automotive led lights"]}
//         position={[0.85, 3, -5.98]}
//         rotation={[2.71, -0.83, 1.92]}
//         scale={[0.1, 1, 2.37]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Plane002.geometry}
//         material={materials["Automotive led lights"]}
//         position={[6.04, 0.82, -6.56]}
//         rotation={[2.27, 0.7, -2.85]}
//         scale={[0.1, 1, 3.63]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Plane003.geometry}
//         material={materials["Automotive led lights"]}
//         position={[1.87, -0.79, -10.05]}
//         rotation={[2.27, 0.7, -2.85]}
//         scale={[0.1, 1, 3.63]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Cube004.geometry}
//         material={materials["Metal Plates"]}
//         position={[4.63, 4.8, -2]}
//         rotation={[-0.87, -0.69, 2.85]}
//         scale={[0.83, -0.07, 1]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Cube005.geometry}
//         material={materials["Metal Plates"]}
//         position={[-3.74, 1.58, -9]}
//         rotation={[-0.87, -0.7, -0.29]}
//         scale={[0.83, -0.07, 1]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Cube002.geometry}
//         material={materials["Metal Grid 01"]}
//         position={[6.1, 3.05, -3.63]}
//         rotation={[2.27, 0.7, -2.85]}
//         scale={[1, -0.07, 1]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Cube003.geometry}
//         material={materials["Metal Grid 01"]}
//         position={[-1.67, 0.07, -10.13]}
//         rotation={[2.27, 0.7, 0.29]}
//         scale={[1, -0.07, 1]}
//       />
//     </group>
//   );
// };

// useGLTF.preload("../assets/spacecraft.glb");

// import { useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { Suspense } from "react";

// export const Model = () => {
//   const gltf = useLoader(GLTFLoader, "./model.gltf");

//   console.log("gltf", gltf);
//   return (
//     <Suspense fallback={null}>
//       <primitive object={gltf.scene} />
//     </Suspense>
//   );
// };

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Model(props) {
  const group = useRef();
  const vec = new THREE.Vector3();

  // useFrame((state, delta) => {
  //   setCamera({
  //     positionX: Model.position.x,
  //     positionY: Model.position.y + 2,
  //     positionZ: Model.position.z + 5,
  //   });
  // });

  useFrame((state, delta) => {
    group.current.position.z += 0.05;
    state.camera.lookAt(group.current.position);
    state.camera.position.lerp(
      vec.set(
        group.current.position.x,
        group.current.position.y + 2,
        group.current.position.z - 5
      ),
      0.01
    );
    state.camera.updateProjectionMatrix();
  });

  function getLocation() {
    return [
      group.current.position.x,
      group.current.position.y,
      group.current.position.z,
    ];
  }
  const { nodes, materials } = useGLTF("/model.gltf");
  return (
    <group {...props} dispose={null} ref={group}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials.Mat0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005_1.geometry}
        material={materials.Mat1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005_2.geometry}
        material={materials.Mat2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005_3.geometry}
        material={materials.Window_Frame}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005_4.geometry}
        material={materials.Mat4}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005_5.geometry}
        material={materials.Mat3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005_6.geometry}
        material={materials.Window}
      />
    </group>
  );
}

useGLTF.preload("/model.gltf");
