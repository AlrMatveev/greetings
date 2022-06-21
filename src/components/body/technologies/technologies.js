import { Grid } from "@mui/material";
import Technology from "./technology";
import reactLogo from "../../../images/react.png";

const items = [
  { name: "React", image: reactLogo },
  { name: "Redux" },
  { name: "MUI" },
  { name: "Next" },
];

function Technologies() {
  return (
    <Grid container spacing={10}>
      {items.map((item) => {
        return (
          <Grid key={item.name} item xs={12} md={6}>
            <Technology item={item} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Technologies;
