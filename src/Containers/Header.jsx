import Grid from "@mui/material/Grid";
import CurrentDate from "./CurrentDate";
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
          <div className="itemsGrid">xs=8</div>
        </Grid>
        <div></div>
        <Grid item xs={3}>
          <div className="itemsGrid">xs=2</div>
        </Grid>
      </Grid>
    </div>
  );
}
