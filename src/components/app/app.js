import Scroll from "../scroll";
import Header from "../header";
import Body from "../body";
import Footer from "../footer";
import Technologies from "../body/technologies";
import About from "../body/about";
import Portfolio from "../body/portfolio";
import Contacts from "../body/contacts";
import { useState } from "react";
import { Container, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";

function App() {
  const scroll = useSelector((state) => state.page.scroll);
  return (
    <>
      <Container maxWidth="xl" sx={{ position: "relative" }}>
        <Scroll />
        {scroll}
        <CSSTransition
          in={scroll === 0}
          timeout={2000}
          classNames="body"
          unmountOnExit
          mountOnEnter
        >
          <Box sx={{ position: "relative" }}>
            <Header text={"AboutMe"} />
            <Box sx={{ position: "absolute" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Box>
          </Box>
        </CSSTransition>
        <CSSTransition
          in={scroll === 25}
          timeout={2000}
          classNames="body"
          unmountOnExit
          mountOnEnter
        >
          <Box sx={{ position: "relative" }}>
            <Header text={"Technologies"} />
            <Box sx={{ position: "absolute" }}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?
            </Box>
          </Box>
        </CSSTransition>
      </Container>
    </>
  );
}

export default App;
