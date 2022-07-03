import { Stage, Layer, Line, Circle, Rect } from "react-konva";
import { useState } from "react";
import { green } from "@mui/material/colors";

function Tanks() {
  const [position, setPosition] = useState(0);

  const vertical = 50;
  const horisontal = 25;
  let circle = {};
  let spacingH = -window.innerHeight / horisontal;
  const widt = window.innerWidth / vertical;
  const heig = window.innerHeight / horisontal;

  const dots = new Array(horisontal).fill(undefined).map((e, i) => {
    spacingH += window.innerHeight / horisontal;
    let spacingW = -window.innerWidth / vertical;
    return new Array(vertical).fill(undefined).map((e, i) => {
      spacingW += window.innerWidth / vertical;
      return [spacingW, spacingH];
    });
  });

  console.log(dots, circle);

  const handleClick = (string) => {
    // const x = e.evt.offsetX;
    // const y = e.evt.offsetY;
    console.log(circle);
    circle[string].to({ fill: "red" });
    // Object.values(circle).map((e) => {
    //   e.to({
    //     fill: "green",
    //   });
    // });
  };
  const handleMove = (e) => {
    const x = e.evt.offsetX;
    const y = e.evt.offsetY;
    circle.map((e) => {
      e.map((e2) => {
        e2.to({
          stroke: "green",
        });
      });
    });
  };

  return (
    <Stage
      style={{
        position: "fixed",
        zIndex: "-1",
        top: "0",
        left: "0",
      }}
      width={window.innerWidth}
      height={window.innerHeight}
    >
      <Layer>
        {dots.map((e, i) => {
          return e.map((e2, i2) => {
            return (
              <Rect
                key={i + i2}
                width={widt}
                height={heig}
                ref={(node) => {
                  circle = { ...circle, [e2[0] + ":" + e2[1]]: node };
                }}
                stroke={"red"}
                x={e2[0]}
                y={e2[1]}
                fill={"green"}
                onClick={() => handleClick(e2[0] + ":" + e2[1])}
              />
            );
          });
        })}
      </Layer>
    </Stage>
  );
}
export default Tanks;
