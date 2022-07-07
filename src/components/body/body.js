import { Box } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import styles from "./body.module.css";
import { useSelector, useDispatch } from "react-redux";

function Body({ tabs, page }) {
  const scroll = useSelector((state) => state.page.scroll);
  return (
    <Box className={styles.container}>
      <CSSTransition
        in={scroll < 100}
        timeout={2000}
        classNames="body"
        unmountOnExit
        mountOnEnter
      >
        <Box>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Box>
      </CSSTransition>
      <CSSTransition
        in={scroll > 100}
        timeout={2000}
        classNames="body"
        unmountOnExit
        mountOnEnter
      >
        <Box>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Box>
      </CSSTransition>
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
