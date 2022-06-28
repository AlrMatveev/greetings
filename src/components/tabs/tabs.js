import { Box } from "@mui/material";
import styles from "./menu.module.css";
import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function Tabs({ tabs, page, setCount, setPage }) {
  const handleClick = (name) => {
    if (page !== name) {
      setPage(name);
      setCount(0);
    }
  };

  console.log(tabs);

  return (
    <>
      <Box className={styles.line}>
        <Box className={styles.thumb}></Box>
        {tabs.map((e) => {
          return <Box className={styles.item}>{e.name}</Box>;
        })}
      </Box>
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
