import { Box, Slider } from "@mui/material";
import styles from "./menu.module.css";
import { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Stage, Layer, Rect, Circle } from "react-konva";

function Tabs({ tabs, page, setCount, setPage }) {
  const handleClick = (name) => {
    if (page !== name) {
      setPage(name);
      setCount(0);
    }
  };

  return (
    <>
      {/* <Stage width={window.innerWidth} height={300}>
        <Layer>
          {tabs.map((tab) => {
            return (
              <Circle
                x={Math.random() * window.innerWidth}
                y={100}
                stroke="red"
                radius={50}
                onClick={() => handleClick(tab.name)}
              />
            );
          })}
        </Layer>
      </Stage> */}

      <Box className={styles.menu}>
        {tabs.map((tab) => {
          return (
            <Box
              className={styles.button}
              sx={
                page === tab.name
                  ? { color: "gray", transition: "500ms" }
                  : { color: "black", transition: "500ms" }
              }
              key={tab.name}
              onClick={() => handleClick(tab.name)}
            >
              {tab.name}
            </Box>
          );
        })}
      </Box>
    </>
  );
}

export default Tabs;
