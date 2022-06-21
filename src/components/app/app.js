import Tabs from "../tabs";
import Head from "../head";
import Body from "../body";
import Footer from "../footer";
import Technologies from "../body/technologies";
import About from "../body/about";
import Portfolio from "../body/portfolio";
import Contacts from "../body/contacts";
import { useState } from "react";
import { Container } from "@mui/material";

const tabs = [
  {
    name: "About Me",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    body: <About />,
  },
  {
    name: "Technologies",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    body: <Technologies />,
  },
  {
    name: "Portfolio",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    body: <Portfolio />,
  },
  {
    name: "Contacts",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    body: <Contacts />,
  },
];

function App() {
  const [page, setPage] = useState(tabs[0].name);
  return (
    <Container maxWidth="lg">
      <Tabs tabs={tabs} setPage={setPage} />
      <Head tabs={tabs} page={page} />
      <Body tabs={tabs} page={page} />
      {/* <Footer /> */}
    </Container>
  );
}

export default App;