import React, { useState } from "react";

import { useSpring } from "react-spring";

import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { useFrame, extend } from "@react-three/fiber";

extend({ TextGeometry });

function TypingText({ message }) {
  const [showCursor, setShowCursor] = useState(false);
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  const { opacity } = useSpring({
    opacity: 1,
    delay: 500,
    config: { duration: 1000 },
    onRest() {
      setShowCursor(true);
    },
  });

  useFrame(() => {
    if (index < message.length) {
      setText(message.slice(0, index + 1));
      setIndex(index + 1);
    }
  });

  return (
    <>
      <mesh position={[0, -1.5, -5]}>
        <textGeometry attach="geometry" args={[text]} />
        <meshBasicMaterial attach="material" transparent opacity={opacity} />
      </mesh>
      2
      {showCursor && (
        <mesh position={[text.length * -0.15, -1.5, -5]}>
          <textGeometry attach="geometry" args={["|"]} />
          <meshBasicMaterial attach="material" />
        </mesh>
      )}
    </>
  );
}

export default TypingText;
