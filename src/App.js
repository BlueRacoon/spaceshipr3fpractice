import ReactDOM from "react-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import "./App.css"; // Tell webpack that Button.js uses these styles
import { Suspense } from "react";
import Model from "./model.component";
import { useState, useEffect, useRef } from "react";
import useWindowDimensions from "./components/window-dimensions.component";
import { GridHelper } from "./components/grid-helper.component";
import { GetFog } from "./components/fog.component";

const App = () => {
  const { height, width } = useWindowDimensions();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: height,
        width: width,
      }}
    >
      <Canvas
        dpr={window.devicePixelRatio}
        // camera={{
        //   position: [0, 2, -5],
        //   rotation: [0, Math.PI, 0],
        // }}
      >
        <GetFog />
        {/* <gridHelper
          args={[100, 20, "#4D089A", "#4D089A"]}
          position={[0, -2, 0]}
          rotation={[0, 0, 0]}
        /> */}
        <GridHelper />
        <ambientLight />
        <Suspense fallback={null}>
          <Model />
          {/* <OrbitControls target={Model.position} /> */}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default App;
