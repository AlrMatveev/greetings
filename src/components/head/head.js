import { Box } from "@mui/material";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "./head.module.css";
import { useState, useEffect, useRef } from "react";
import "./head.css";

function Head({ page, text }) {
  const arr = text.split("");
  const [count, setCount] = useState(0);

  console.log(arr);

  // if (count < arr.length) setTimeout(() => setCount(count + 1), 100);

  // useEffect(() => {
  //   if (text) {
  //     text.map((e, i) => {
  //       let timer = setTimeout(() => setCount(count + 1), 10 * i);
  //       if (count === text.length) clearTimeout(timer);
  //       console.log(e);
  //     });
  //   }
  // }, []);

  // if (!text) return <></>;

  return (
    <Box className={styles.container}>
      {/* <TransitionGroup className={styles.header}>
        {text.slice(0, count).map((e, i) => {
          return (
            <CSSTransition key={i} timeout={10 * i} classNames="my-node">
              <Box>{e}</Box>
            </CSSTransition>
          );
        })}
      </TransitionGroup> */}
    </Box>
  );
}

export default Head;
