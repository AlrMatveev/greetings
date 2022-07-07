import { Stage, Layer, Line, Circle, Rect } from "react-konva";
import { useState } from "react";

function Tanks() {
  const vertical = 200;
  const horisontal = 100;
  let circle = {};
  let spacingH = -window.innerHeight / horisontal;
  const widt = window.innerWidth / vertical;
  const heig = window.innerHeight / horisontal;
  let text = [
    "20-58",
    "21-58",
    "22-58",
    "23-58",
    "24-58",
    "22-59",
    "22-60",
    "20-61",
    "21-61",
    "22-61",
    "23-61",
    "24-61",
    "20-63",
    "20-64",
    "20-65",
    "21-63",
    "22-63",
    "23-63",
    "24-63",
    "24-64",
    "24-65",
    "22-64",
    "20-67",
    "21-67",
    "22-67",
    "23-67",
    "24-67",
    "24-68",
    "24-69",
    "24-71",
    "23-71",
    "22-71",
    "21-71",
    "20-71",
    "24-72",
    "24-73",
    "23-75",
    "22-75",
    "21-75",
    "20-76",
    "21-77",
    "22-77",
    "23-77",
    "24-76",
    "24-75",
    "20-75",
    "20-77",
    "24-77",
    "24-77",
    "24-79",
  ];

  let text2 = [
    "27-58",
    "28-58",
    "29-58",
    "30-58",
    "31-58",
    "27-59",
    "28-60",
    "29-59",
    "30-60",
    "31-59",
    "27-61",
    "28-62",
    "29-63",
    "30-63",
    "31-63",
    "28-64",
    "27-65",
    "27-67",
    "28-67",
    "29-67",
    "30-67",
    "31-68",
    "31-69",
    "30-70",
    "29-70",
    "28-70",
    "27-70",
  ];

  const [page, setPage] = useState(text);

  const dots = new Array(horisontal).fill(undefined).map((e, i) => {
    spacingH += window.innerHeight / horisontal;
    let spacingW = -window.innerWidth / vertical;
    return new Array(vertical).fill(undefined).map((e, i) => {
      spacingW += window.innerWidth / vertical;
      return [spacingW, spacingH];
    });
  });

  const handleClick = (coords) => {
    page.map((e, i) => {
      setTimeout(() => {
        circle[e].to({ y: -heig, rotation: 100, duration: 0.5 });
        if (page.length === i + 1)
          setTimeout(() => {
            page === text ? setPage(text2) : setPage(text);
          }, 10 * i);
      }, 10 * i);
    });

    // setTimeout(() => {
    //   page === text ? setPage(text2) : setPage(text);
    // }, page.length * 15);
    console.log(page);
    // const x = e.evt.offsetX;
    // const y = e.evt.offsetY;
    // text2.push(coords);

    // console.log(text2);
    // circle[string].to({ fill: "red" });
    // Object.values(circle).map((e) => {
    //   e.to({
    //     fill: "green",
    //   });
    // });
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
              page.find((e) => {
                return e === i + "-" + i2;
              }) && (
                <Rect
                  key={i + i2}
                  width={widt}
                  height={heig}
                  ref={(node) => {
                    circle[i + "-" + i2] = node;
                  }}
                  shadowBlur={1}
                  x={e2[0]}
                  y={e2[1]}
                  fill={"black"}
                  onClick={() => handleClick(i + "-" + i2)}
                />
              )
            );
          });
        })}
      </Layer>
    </Stage>
  );
}
export default Tanks;
