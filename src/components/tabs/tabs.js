import { Box, Slider } from "@mui/material";
import styles from "./menu.module.css";
import { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Stage, Layer, Rect, Circle } from "react-konva";
import { useSelector, useDispatch } from "react-redux";
import { setLoad, increment, decrement } from "../../redux/pageSlice";

function Tabs({ tabs, page, setCount, setPage }) {
  const scroll = useSelector((state) => state.page.scroll);
  const dispatch = useDispatch();

  const handleClick = (name) => {
    if (page !== name) {
      setPage(name);
      setCount(0);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", (evt) => {
      +evt.deltaY > 0 ? dispatch(increment()) : dispatch(decrement());
    });
  }, []);

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
      {/* {page2} */}
      <Box className={styles.menu}>
        {scroll}
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
