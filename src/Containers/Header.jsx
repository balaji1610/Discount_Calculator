import Grid from "@mui/material/Grid";
import CurrentDate from "./CurrentDate";

import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <Grid
        container
        columns={12}
        spacing={5}
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{
          height: "200px",
        }}
      >
        <Grid item xs={3}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "stretch",
            }}
          >
            <CurrentDate />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div>
            <h1 style={{ textAlign: "center" }}> Discount Calculator</h1>
          </div>
        </Grid>
        <div></div>
        <Grid item xs={3}>
          <Link to="/">
            {" "}
            <a>
              <button>Calcultor</button>
            </a>
          </Link>
          <Link to="/History">
            {" "}
            <a>
              <button>History</button>
            </a>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}
