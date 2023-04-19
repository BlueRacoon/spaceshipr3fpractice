import { useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

export const GridHelper = () => {
  const [gridLength, setGridLength] = useState(20);
  const [gridLengthFirst, setGridLengthFirst] = useState(100);
  const [gridPosition, setGridPosition] = useState(0);

  useFrame((state, delta) => {
    // setGridLength(gridLength + delta * 5);
    // setGridLengthFirst(gridLengthFirst + delta * 1.65);
    // setGridPosition(gridPosition + delta);
  });

  return (
    <gridHelper
      args={[1000, 1000, "#4D089A", "#4D089A"]}
      position={[gridPosition, -1, 0]}
      rotation={[0, 0, 0]}
    />
  );
};
