import { useState, useEffect, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Box } from "@mui/material";
import styles from "./header.module.css";

function Header({ text }) {
  const [leters, setLeters] = useState("");
  const refContainer = useRef("");
  useEffect(() => {
    const arr = text.split("");
    arr.map((e, i) => {
      setTimeout(() => {
        refContainer.current += e;
        setLeters(refContainer.current);
      }, 200 * i);
    });
  }, []);

  return (
    <Box className={styles.container}>
      <TransitionGroup className={styles.header}>
        {leters.split("").map((e, i) => {
          return (
            <CSSTransition key={i} timeout={3000} classNames="my-node">
              <div>{e}</div>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </Box>
  );
}
export default Header;
