import { Box } from "@mui/material";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "./head.module.css";
import { useState, useEffect, useRef } from "react";
import "./head.css";

const str = "Some Text";

function Head({ count, setCount, page }) {
  const arr = page.split("");

  if (count < arr.length) setTimeout(() => setCount(count + 1), 100);

  return (
    <Box className={styles.container}>
      <TransitionGroup className={styles.header}>
        {arr.slice(0, count).map((e, i) => {
          return (
            <CSSTransition key={i} timeout={1000} classNames="my-node">
              <Box>{e}</Box>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </Box>
  );
}

export default Head;
