import Grid from "@mui/material/Grid";
import CurrentDate from "./CurrentDate";
import ToggleButtonComp from "./ToggleButtonComp";
export default function MobileHeader({ children1, children2, children3 }) {
  return (
    <div>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{
          height: "40vh",
          backgroundColor: "#000000",
          color: "#ffffff",
        }}
      >
        <Grid item xs={4}>
          {<CurrentDate />}
        </Grid>
        <Grid item xs={4}>
          {
            <span>
              {" "}
              <img
                style={{ display: "inline-block", marginBottom: "-20px" }}
                width="60"
                height="60"
                src="https://img.icons8.com/3d-fluency/94/discount.png"
                alt="discount"
              />
              <h1 style={{ display: "inline-block", marginTop: "20px" }}>
                Discount Calulator
              </h1>
            </span>
          }
        </Grid>
        <Grid item xs={4}>
          {<ToggleButtonComp />}
        </Grid>
      </Grid>
    </div>
  );
}
