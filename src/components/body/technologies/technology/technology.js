import { Box } from "@mui/material";
import styles from "./technology.module.css";
import { useState } from "react";

function Technology({ item }) {
  const [rotate, setRotate] = useState(0);

  const handleClick = () => {
    setRotate(rotate + 90);
    const cube = document.getElementById(item.name);
    cube.style.transform = "rotateY(" + rotate + "deg)";
  };

  return (
    <Box className={styles.container}>
      <Box id={item.name} className={styles.cube} onClick={handleClick}>
        <Box className={styles.front}>
          <Box>
            <img src={item.image} width="230px" height="200px" />
          </Box>
          <Box>{item.name}</Box>
        </Box>
        <Box className={styles.back}>?</Box>
        <Box className={styles.right}>?</Box>
        <Box className={styles.left}>?</Box>
        <Box className={styles.top}>?</Box>
        <Box className={styles.bottom}>?</Box>
      </Box>
    </Box>
  );
}
export default Technology;
