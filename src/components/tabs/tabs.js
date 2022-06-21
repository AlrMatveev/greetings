import { Box } from "@mui/material";
import styles from "./menu.module.css";

function Tabs({ tabs, setPage }) {
  return (
    <Box className={styles.menu}>
      {tabs.map((tab) => {
        return (
          <Box
            className={styles.button}
            key={tab.name}
            onClick={() => setPage(tab.name)}
          >
            {tab.name}
          </Box>
        );
      })}
    </Box>
  );
}

export default Tabs;
