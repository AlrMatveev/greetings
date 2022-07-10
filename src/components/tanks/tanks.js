import { Stage, Layer, Line, Circle, Rect } from "react-konva";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";

function Tanks() {
  const scroll = useSelector((state) => state.page.scroll);
  const prewScroll = useRef(scroll);
  const vertical = 10;
  const horisontal = 5;

  let spacingH = -window.innerHeight / horisontal;
  const widt = window.innerWidth / vertical;
  const heig = window.innerHeight / horisontal;
  let rectsArr = [];

  useEffect(() => {
    console.log(prewScroll);
    rectsArr.map((e, i) => {
      if (e.attrs.height === 0) {
        setTimeout(() => {
          e.to({
            height: window.innerHeight,
          });
        }, 50 * i);
      } else if (e.attrs.height === window.innerHeight) {
        setTimeout(() => {
          e.to({
            height: 0,
          });
        }, 50 * i);
      }
    });
    prewScroll.current = scroll;
    console.log(prewScroll);
  }, [scroll]);

  // const rects = useRef([]);

  // const [page, setPage] = useState(text);

  // const dots = new Array(horisontal).fill(undefined).map((e, i) => {
  //   spacingH += window.innerHeight / horisontal;
  //   let spacingW = -window.innerWidth / vertical;
  //   return new Array(vertical).fill(undefined).map((e, i) => {
  //     spacingW += window.innerWidth / vertical;
  //     return [spacingW, spacingH];
  //   });
  // });

  let spacingW = -window.innerWidth / vertical;

  const rects = new Array(vertical).fill(undefined).map((e, i) => {
    spacingW += window.innerWidth / vertical;
    return [spacingW, 0];
  });

  // const handleClick = (coords) => {
  //   page.map((e, i) => {
  //     setTimeout(() => {
  //       circle[e].to({ y: -heig, rotation: 100, duration: 0.5 });
  //       if (page.length === i + 1)
  //         setTimeout(() => {
  //           page === text ? setPage(text2) : setPage(text);
  //         }, 10 * i);
  //     }, 10 * i);
  //   });

  // setTimeout(() => {
  //   page === text ? setPage(text2) : setPage(text);
  // }, page.length * 15);
  // console.log(page);
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

  // const handleClick = () => {
  //   console.log(rects);
  // };

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
        {/* {dots.map((e, i) => {
          return e.map((e2, i2) => {
            return (
              <Rect
                key={i + i2}
                // radius={10}
                width={widt}
                height={heig}
                // ref={(node) => {
                //   rects.current.push(node);
                // }}
                x={e2[0]}
                y={e2[1]}
                fill={(i + i2) % 2 ? "gray" : "white"}
                shadowBlur={(i + i2) % 2 ? 5 : 0}
                // onClick={handleClick}
              />
            );
          });
        })} */}
        {rects.map((e, i) => {
          return (
            <Rect
              key={i}
              width={widt}
              height={0}
              x={e[0]}
              y={e[1]}
              fill={"gray"}
              ref={(node) => {
                rectsArr.push(node);
              }}
            />
          );
        })}
      </Layer>
    </Stage>
  );
}

export default Tanks;
