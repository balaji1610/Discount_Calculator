import CardDiscount from "../Containers/CardDiscount";
import Grid from "@mui/material/Grid";

import InputComp from "../Resusable_Compoents/InputComp";
import ButtonComp from "../Resusable_Compoents/ButtonComp";

import HistoryTime from "../Containers/HistoryTime";
import { useState, useEffect } from "react";

import Services from "../Services/Services";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../features/counter/counterSlice.";
export default function DiscountCalculatorPage() {
  const add = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const his = HistoryTime.time();

  const [api, setApi] = useState([]);
  const [DataArray, setDataArray] = useState([]);

  const [discountInfo, setDiscountInfo] = useState({
    orginalPrice: "",
    percentage: "",
  });

  const [userViewData, setUserViewData] = useState({
    savings: "",
    finalPrice: "",
  });
  const handleTextChange = (e) => {
    setDiscountInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const Saving = (discountInfo.orginalPrice * discountInfo.percentage) / 100;
    const FinalPrice = discountInfo.orginalPrice - Saving;

    setUserViewData({
      ...userViewData,
      savings: Saving,
      finalPrice: FinalPrice,
    });
    const payloadData = {
      id: "",
      date: his,
      orginalPrice: discountInfo.orginalPrice,
      percentage: discountInfo.percentage,
      savings: Saving,
      finalPrice: FinalPrice,
    };

    const updateData = [...DataArray, payloadData];
    setDataArray(updateData);
  };

  const handleClickClear = () => {
    setDiscountInfo({ ...discountInfo, orginalPrice: " ", percentage: " " });
    setUserViewData("");
  };
  const SubmitButton = (props) => <button {...props} type="submit" />;

  // console.log(userViewData, "userViewData");
  // console.log(DataArray, "DataArray");
  useEffect(() => {
    const getData = async () => {
      let getApiRes = await Services.getApi();
      let getUserDetails = getApiRes.map((item) => item);
      setApi(getUserDetails);
    };
    getData();
  }, []);

  console.log(api, "API");
  return (
    <div>
      <CardDiscount>
        <form onSubmit={handleSubmit}>
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
                <InputComp
                  label="Orginal Price"
                  variant="outlined"
                  size="large"
                  color="primary"
                  style={{
                    width: "150px",
                  }}
                  onChange={handleTextChange}
                  value={discountInfo.orginalPrice}
                  name="orginalPrice"
                />
              </div>
            </Grid>
            <Grid item xs={2}>
              <div> </div>
            </Grid>
            <Grid item xs={2}>
              <div>
                <InputComp
                  label="Discount"
                  variant="outlined"
                  size="large"
                  color="primary"
                  style={{
                    width: "150px",
                  }}
                  type="number"
                  onChange={handleTextChange}
                  value={discountInfo.percentage}
                  name="percentage"
                />
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
              style={{
                border: "1px solid red",
                heigth: "10px",
                padding: "20px",
                borderRadius: "90px",
              }}
            >
              <Grid item xs={1}></Grid>
              <Grid item xs={3}>
                <div>Savings</div>
              </Grid>
              <Grid item xs={2}></Grid>
              <Grid item xs={3}>
                <div>{userViewData.savings}</div>
              </Grid>
            </Grid>

            <Grid item xs={1}></Grid>
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
                border: "1px solid red",
                heigth: "10px",
                padding: "20px",
                borderRadius: "90px",
              }}
            >
              <Grid item xs={1}></Grid>
              <Grid item xs={3}>
                Final Price
              </Grid>
              <Grid item xs={2}></Grid>
              <Grid item xs={3}>
                <div>{userViewData.finalPrice}</div>
              </Grid>
            </Grid>

            <Grid item xs={1}></Grid>
          </Grid>

          <div
            style={{
              textAlign: "center",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            FIve thousand Rupess Only{add}
          </div>

          <Grid container>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}>
              <div>
                <ButtonComp
                  variant="contained"
                  color="primary"
                  label="Submit"
                  component={SubmitButton}
                />
              </div>
            </Grid>
            <Grid item xs={3}>
              <div>
                {" "}
                <ButtonComp
                  variant="contained"
                  color="primary"
                  label="Clear"
                  onClick={handleClickClear}
                />
              </div>
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
          <button
            onClick={() => {
              dispatch(increment());
            }}
          >
            Dispatch
          </button>
        </form>
      </CardDiscount>
    </div>
  );
}
