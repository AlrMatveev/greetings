import { Box } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import styles from "./body.module.css";

function Body({ tabs, page }) {
  return (
    <Box className={styles.container}>
      {tabs.map((tab) => {
        return (
          <CSSTransition
            key={tab.name}
            in={page === tab.name}
            timeout={2000}
            classNames="body"
            unmountOnExit
            mountOnEnter
          >
            <Box className={styles.body}>{tab.body}</Box>
          </CSSTransition>
        );
      })}
    </Box>
  );
}

export default Body;
