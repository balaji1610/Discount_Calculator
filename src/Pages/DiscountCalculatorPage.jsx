import CardDiscount from "../Containers/CardDiscount";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
export default function DiscountCalculatorPage() {
  return (
    <div>
      <CardDiscount>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          style={{ height: "20vh" }}
        >
          <Grid item xs={1}></Grid>
          <Grid item xs={3}>
            <div>
              <input></input>
            </div>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={2}>
            <div>
              {" "}
              <input></input>
            </div>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
        {/* Savingslayout */}

        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          style={{ height: "12vh" }}
        >
          <Grid item xs={2}></Grid>

          <Grid
            container
            xs={8}
            style={{ border: "3px solid red", heigth: "10px" }}
          >
            <Grid item xs={2}></Grid>
            <Grid item xs={2}>
              <div>Savings</div>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}>
              <div>Rupees</div>
            </Grid>
          </Grid>

          <Grid item xs={2}></Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          style={{ height: "5vh" }}
        >
          <Grid item xs={2}></Grid>

          <Grid
            container
            xs={8}
            style={{
              border: "3px solid red",
            }}
          >
            <Grid item xs={2}></Grid>
            <Grid item xs={2}>
              <div>Savings</div>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}>
              <div>Rupees</div>
            </Grid>
          </Grid>

          <Grid item xs={2}></Grid>
        </Grid>

        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          FIve thousand Rupess Only
        </div>

        <Grid container>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}>
            <div>
              <Button variant="contained">Submit</Button>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div>
              {" "}
              <Button variant="contained">Clear</Button>
            </div>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </CardDiscount>
    </div>
  );
}
