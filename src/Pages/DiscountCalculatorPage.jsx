import CardDiscount from "../Containers/CardDiscount";
import Grid from "@mui/material/Grid";
export default function DiscountCalculatorPage() {
  return (
    <div>
      <CardDiscount>
        <Grid container columns={6} rowSpacing={40} columnSpacing={20}>
          <Grid item xs={3}>
            <div>01</div>
          </Grid>
          <Grid item xs={3}>
            <div>02</div>
          </Grid>
        </Grid>

        <Grid container columns={6} rowSpacing={40} columnSpacing={20}>
          <Grid item xs={3}>
            <div>03</div>
          </Grid>
          <Grid item xs={3}>
            <div>04</div>
          </Grid>
        </Grid>
      </CardDiscount>
    </div>
  );
}
