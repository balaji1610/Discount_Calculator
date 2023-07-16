import CardDiscount from "../Containers/CardDiscount";
import Grid from "@mui/material/Grid";

import InputComp from "../Resusable_Compoents/InputComp";
import ButtonComp from "../Resusable_Compoents/ButtonComp";

import HistoryTime from "../Containers/HistoryTime";
import { useState } from "react";

import Services from "../Services/Services";
import { useDispatch } from "react-redux";
import { callUserEffect } from "../features/History/HistorySlice";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import ToastCom from "../Resusable_Compoents/ToastCom";
const numWords = require("num-words");

export default function DiscountCalculatorPage() {
  const dispatch = useDispatch();
  const his = HistoryTime.time();

  const [numTowords, setNumTowords] = useState("");
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
  const [toast, setToast] = useState(false);

  const handleToastClose = () => {
    setToast(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setToast(true);
    const Saving = Math.round(
      (discountInfo.orginalPrice * discountInfo.percentage) / 100
    );
    const FinalPrice = Math.round(discountInfo.orginalPrice - Saving);
    const amountInWords = numWords(FinalPrice);

    const captial = amountInWords
      .split(" ")
      .map((el) => el.replace(el[0], el[0].toUpperCase()))
      .join(" ");

    setNumTowords(`${captial} Ruppess Only !!`);

    setUserViewData({
      ...userViewData,
      savings: Saving,
      finalPrice: FinalPrice,
    });
    const payloadData = {
      date: his,
      orginalPrice: discountInfo.orginalPrice,
      percentage: discountInfo.percentage,
      savings: Saving,
      finalPrice: FinalPrice,
    };
    let res = await Services.postApi(payloadData);
    console.log(res, "res");
    dispatch(callUserEffect());
  };

  const handleClickClear = () => {
    setDiscountInfo({ ...discountInfo, orginalPrice: "", percentage: "" });
    setUserViewData({ ...userViewData, savings: " ", finalPrice: " " });
    setNumTowords(" ");
  };
  const SubmitButton = (props) => <button {...props} type="submit" />;

  // console.log(userViewData, "userViewData");
  // console.log(DataArray, "DataArray");

  // console.log(add, "addREdux");

  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, hsla(233, 100%, 90%, 1) 0%, hsla(0, 0%, 89%, 1) 100%)",
      }}
    >
      <CardDiscount>
        <form onSubmit={handleSubmit}>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            style={{ height: "20vh" }}
          >
            <Grid item xs={2}></Grid>
            <Grid item xs={3}>
              <div>
                <InputComp
                  label="Orginal Price"
                  variant="outlined"
                  size="large"
                  style={{
                    width: "150px",
                  }}
                  onChange={handleTextChange}
                  value={discountInfo.orginalPrice}
                  name="orginalPrice"
                  type="number"
                  inputProps={{
                    max: "10000000",
                    min: "1",
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={2}></Grid>
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
                  inputProps={{
                    max: "99",
                    min: "1",
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
          {/* Savingslayout */}

          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            style={{ height: "12vh" }}
          >
            <Grid
              container
              xs={8}
              style={{
                border: "1px solid red",
                padding: "20px",
                borderRadius: "82px",
                backgroundColor: "#9d3257",
                color: "#ffffff",
              }}
            >
              <Grid item xs={3}>
                <div>Savings</div>
              </Grid>
              <Grid item xs={2}>
                <img
                  style={{
                    display: "inline-block",
                  }}
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material-outlined/24/rupee.png"
                  alt="rupee"
                />
              </Grid>
              <Grid item xs={3}>
                <div
                  style={{
                    color: "#ffffff",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  {userViewData.savings.toLocaleString()}
                </div>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            style={{ height: "5vh" }}
          >
            <Grid
              container
              xs={8}
              style={{
                padding: "20px",
                borderRadius: "93px",
                color: "#ffffff",
                backgroundColor: "#266f91",
              }}
            >
              <Grid item xs={3}>
                Final Price
              </Grid>
              <Grid item xs={2}>
                <img
                  style={{
                    display: "inline-block",
                  }}
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material-outlined/24/rupee.png"
                  alt="rupee"
                />
              </Grid>
              <Grid item xs={3}>
                <div
                  style={{
                    color: "#ffffff",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  {userViewData.finalPrice.toLocaleString()}
                </div>
              </Grid>
            </Grid>
          </Grid>

          <div
            style={{
              textAlign: "center",
              height: "20px",
              marginTop: "50px",
              marginBottom: "40px",
              color: "red",
            }}
          >
            <h3>{numTowords}</h3>
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
                  disabled={
                    discountInfo.orginalPrice.length &&
                    discountInfo.percentage.length > 0
                      ? false
                      : true
                  }
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
        </form>
        <div>
          <ToastCom
            open={toast}
            onClose={handleToastClose}
            anchorOrigin={{
              horizontal: "right",
              vertical: "bottom",
            }}
            alertIcon={<ThumbUpAltRoundedIcon />}
            style={{
              background:
                "linear-gradient(90deg, hsla(61, 91%, 54%, 1) 0%, hsla(95, 98%, 41%, 1) 100%)",
              color: "black",
              fontSize: "17px",
            }}
            content="Submit Data Sucessfully"
          />
        </div>
      </CardDiscount>
    </div>
  );
}
