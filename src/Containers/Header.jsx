import Grid from "@mui/material/Grid";
import CurrentDate from "./CurrentDate";
import ToggleButtonComp from "./ToggleButtonComp";

export default function Header() {
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{
          height: "150px",
          backgroundColor: "#000000",
          color: "#ffffff",
        }}
      >
        <Grid item xs={2}>
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

        <Grid item xs={8}>
          <div className="Logo__Flex">
            <div className="Item__Logo">
              <img
                width="60"
                height="60"
                src="https://img.icons8.com/3d-fluency/94/discount.png"
                alt="discount"
              />
            </div>
            <div className="Item__Logo">
              <h1 style={{ marginTop: "10px", marginLeft: "20px" }}>
                Discount Calcultor
              </h1>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <ToggleButtonComp />
        </Grid>
      </Grid>
    </div>
  );
}
