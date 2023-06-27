import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Services from "../Services/Services";
import redClock from "../assests/images/redClock.png";
import { callUserEffect } from "../features/History/HistorySlice";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import { fontSize } from "@mui/system";
export default function HistoryPage() {
  const HistoryPage = useSelector((state) => state.counterStore.calleffect);
  const dispatch = useDispatch();
  const [getapi, setGETApi] = useState([]);

  const [Loading, setLoading] = useState({
    loading: null,
  });
  const [loadingCover, setLoadingCover] = useState(true);
  const API_Url =
    "https://muddy-longing-mulberry.glitch.me/calculator?_sort=id&_order=desc";

  const getData = async () => {
    setLoading({ ...Loading, loading: true });
    const response = await fetch(`${API_Url}`);

    if (!response.ok) {
      console.log(true);
    } else {
      let getApiRes = await response.json();

      setLoading({ ...Loading, loading: false });
      setLoadingCover(false);
      setGETApi(getApiRes);
      setTimeout(() => {
        setLoadingCover(true);
      }, 2000);
    }
  };

  useEffect(() => {
    getData();
  }, [HistoryPage]);

  const deleteItem = async (getid) => {
    alert(getid);
    const deleteapiitems = await Services.deleteApi(getid);
    dispatch(callUserEffect());
  };
  return (
    <div>
      <div>
        {Loading.loading ? (
          <div className="Loader">
            <div>
              {" "}
              <CircularProgress />
            </div>
            <div
              style={{
                color: "red",
              }}
            >
              <h2>Loading . . .</h2>
            </div>
          </div>
        ) : (
          <div className="Alert_Loader">
            <div style={{ display: loadingCover ? "none" : "inline" }}>
              <Alert
                variant="filled"
                severity="success"
                style={{
                  width: "300px",
                  color: "#ffffff",
                  background:
                    "linear-gradient(90deg, hsla(139, 72%, 83%, 1) 0%, hsla(229, 89%, 62%, 1) 100%)",
                  fontSize: "18px",
                }}
              >
                Fetching Data Successfully
              </Alert>
            </div>
          </div>
        )}
      </div>
      <div className="HistoryCardOveflow">
        {getapi.map((elm) => {
          const { id, date, orginalPrice, percentage, savings, finalPrice } =
            elm;
          const dataTimeSplit = date.split("at");
          const Date = dataTimeSplit[0];
          const Time = dataTimeSplit[1];

          return (
            <div className="HistoryCardLayout">
              <div className="DateTimeLayoutFlex">
                <div className="ItemDateTime">
                  {" "}
                  <img
                    style={{
                      display: "inline-block",
                    }}
                    width="28"
                    height="28"
                    src="https://img.icons8.com/external-others-phat-plus/64/external-business-business-blue-others-phat-plus-13.png"
                    alt="external-business-business-blue-others-phat-plus-13"
                  />
                </div>
                <div className="ItemDateTime">{Date}</div>
                <div className="ItemDateTime">
                  {" "}
                  <img
                    style={{
                      display: "inline-block",
                    }}
                    width="28"
                    height="28"
                    src={redClock}
                    alt="redClock"
                  />
                </div>
                <div className="ItemDateTime">{Time}</div>
              </div>
              <div className="OrginalPrice">
                <div
                  style={{
                    marginRight: "-14px",
                  }}
                >
                  {" "}
                  Orginal Price
                </div>
                <div className="quation">:</div>
                <div>
                  {" "}
                  <img
                    style={{
                      display: "inline-block",
                    }}
                    width="20"
                    height="20"
                    src="https://img.icons8.com/material-outlined/24/rupee.png"
                    alt="rupee"
                  />
                  <span
                    style={{
                      fontSize: "18px",
                    }}
                  >
                    {orginalPrice}
                  </span>
                </div>
              </div>
              <div className="OrginalPrice">
                <div
                  style={{
                    marginRight: "-43px",
                    marginLeft: "-18px",
                  }}
                >
                  Percentage{" "}
                </div>
                <div className="quation">:</div>
                <div
                  style={{
                    fontSize: "18px",
                  }}
                >
                  {percentage}%
                </div>
              </div>
              <div className="OrginalPrice">
                <div>Savings</div>
                <div className="quation">:</div>

                <div>
                  {" "}
                  <img
                    style={{
                      display: "inline-block",
                    }}
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-outlined/24/rupee.png"
                    alt="rupee"
                  />
                  <span
                    style={{
                      fontSize: "25px",
                    }}
                  >
                    {savings}
                  </span>
                </div>
              </div>
              <div className="OrginalPrice">
                <div>FinalPrice</div>
                <div className="quation">:</div>

                <div>
                  {" "}
                  <img
                    style={{
                      display: "inline-block",
                    }}
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-outlined/24/rupee.png"
                    alt="rupee"
                  />
                  <span
                    style={{
                      fontSize: "25px",
                    }}
                  >
                    {finalPrice}
                  </span>
                </div>
              </div>
              <div className="DeleteIcon">
                <div
                  onClick={() => deleteItem(id)}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <img
                    width="28"
                    height="28"
                    src="https://img.icons8.com/plasticine/100/filled-trash.png"
                    alt="filled-trash"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
