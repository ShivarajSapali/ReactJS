import * as React from "react";
import { render } from "react-dom";
import Navbar from "./Components/Navbar";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, Typography } from "@material-ui/core";
import AdvancedTable from "./Components/AdvancedTable";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <AppBar color="primary" position="static">
        <Toolbar>
          <Typography variant="subtitle1" color="inherit">
            My Header
          </Typography>
          <Navbar />
        </Toolbar>
      </AppBar>
      <AdvancedTable />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
