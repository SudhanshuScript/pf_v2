import { useEffect, useRef, useState } from "react";
import Image from "next/image";
export default function ImageMagnifier({
  src,
  width,
  height,
  magnifierHeight = 350,
  magnifieWidth = 600,
  zoomLevel = 2.5,
}: {
  src: string;
  width?: number;
  height?: number;
  magnifierHeight?: number;
  magnifieWidth?: number;
  zoomLevel?: number;
}) {
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);
  return (
    <div
      style={{
        position: "relative",
        height: height,
        width: width,
      }}
    >
      <Image
        src={src}
        height={height}
        width={width}
        onMouseEnter={(e) => {
          // update image size and turn-on magnifier
          const elem = e.currentTarget;
          const { width, height } = elem.getBoundingClientRect();
          setSize([width, height]);
          setShowMagnifier(true);
        }}
        onMouseMove={(e) => {
          // update cursor position
          const elem = e.currentTarget;
          const { top, left } = elem.getBoundingClientRect();

          // calculate cursor position on the image
          const x = e.pageX - left - window.pageXOffset;
          const y = e.pageY - top - window.pageYOffset;
          setXY([x, y]);
        }}
        onMouseLeave={() => {
          // close magnifier
          setShowMagnifier(false);
        }}
        alt={"img"}
      />

      <div
        style={{
          display: showMagnifier ? "" : "none",
          position: "absolute",
          // prevent maginier blocks the mousemove event of img
          pointerEvents: "none",
          // set size of magnifier
          height: `${magnifierHeight}px`,
          width: `${magnifieWidth}px`,
          // move element center to cursor pos
          top: `${y - magnifierHeight / 42}px`,
          left: `${x - magnifieWidth / 2}px`,
          opacity: "1", // reduce opacity so you can verify position
          backgroundColor: " rgba(65, 47, 123, 0.4)",
          backdropFilter: "blur(10px)",
          backgroundImage: `url('${src}')`,
          backgroundRepeat: "no-repeat",
          border: "1px solid #fff",
          borderRadius: "8px",
          //calculate zoomed image size
          backgroundSize: `${imgWidth * zoomLevel}px ${
            imgHeight * zoomLevel
          }px`,

          //calculete position of zoomed image.
          backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
          backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
        }}
      ></div>
    </div>
  );
}
