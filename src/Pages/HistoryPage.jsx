import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Services from "../Services/Services";
import redClock from "../assests/images/redClock.png";
import { callUserEffect } from "../features/History/HistorySlice";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import ToastCom from "../Resusable_Compoents/ToastCom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function HistoryPage() {
  const mobile = useMediaQuery("(min-width:600px)");
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

  const [deleteToast, setDeleteToast] = useState(false);

  const handleDeleteToast = () => {
    setDeleteToast(false);
  };

  const deleteItem = async (getid, e) => {
    e.preventDefault();

    const deleteapiitems = await Services.deleteApi(getid);

    dispatch(callUserEffect());
    setDeleteToast(true);
  };
  const [showbtn, setshowbtn] = useState(-1);
  const hoverMouseEnter = (id) => {
    setshowbtn(id);
  };

  const hoverMouseLeave = () => {
    setshowbtn(-1);
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
      <div
        className={
          mobile ? "HistoryCardOveflow" : "Mobile___HistoryCardOveflow"
        }
      >
        {getapi.map((elm) => {
          const { id, date, orginalPrice, percentage, savings, finalPrice } =
            elm;
          const dataTimeSplit = date.split("at");
          const Date = dataTimeSplit[0];
          const Time = dataTimeSplit[1];

          return (
            <div
              className="HistoryCardLayout"
              onMouseEnter={() => hoverMouseEnter(id)}
              onMouseLeave={hoverMouseLeave}
            >
              <div
                style={{
                  height: "30px",
                }}
              >
                <div
                  style={{
                    display: showbtn === id ? "inline-block" : "none",
                  }}
                >
                  {" "}
                  <img
                    width="35"
                    height="35"
                    src="https://img.icons8.com/fluency/48/checked.png"
                    alt="checked"
                  />
                </div>
              </div>

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
                      fontSize: "20px",
                    }}
                  >
                    {Number(orginalPrice).toLocaleString()}
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
                    {savings.toLocaleString()}
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
                    {finalPrice.toLocaleString()}
                  </span>
                </div>
              </div>
              <div
                className="DeleteIcon"
                style={{
                  display: showbtn === id ? "block" : "none",
                }}
              >
                <Tooltip
                  title="DELETE"
                  arrow
                  placement="bottom"
                  TransitionComponent={Zoom}
                >
                  <div
                    onClick={(e) => deleteItem(id, e)}
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
                </Tooltip>
              </div>
            </div>
          );
        })}
      </div>

      <ToastCom
        open={deleteToast}
        onClose={handleDeleteToast}
        anchorOrigin={{
          horizontal: "right",
          vertical: "bottom",
        }}
        alertIcon={<DeleteForeverIcon />}
        style={{
          background:
            "linear-gradient(90deg, hsla(29, 92%, 70%, 1) 0%, hsla(0, 87%, 73%, 1) 100%)",
          color: "#ffffff",
          fontSize: "17px",
        }}
        content="Deleted successfully"
      />
    </div>
  );
}
