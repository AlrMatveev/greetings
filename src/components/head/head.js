import { Box } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import styles from "./head.module.css";

function Head({ tabs, page }) {
  return (
    <Box className={styles.container}>
      {tabs.map((tab) => {
        return (
          <CSSTransition
            key={tab.name}
            in={page === tab.name}
            timeout={1000}
            classNames="head"
            unmountOnExit
            mountOnEnter
          >
            <Box className={styles.body}>
              <Box className={styles.header}>{tab.name}</Box>
              <Box className={styles.description}>{tab.description}</Box>
            </Box>
          </CSSTransition>
        );
      })}
    </Box>
  );
}

export default Head;
