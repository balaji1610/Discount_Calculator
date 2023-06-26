import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Services from "../Services/Services";
import redClock from "../assests/images/redClock.png";
import { callUserEffect } from "../features/History/HistorySlice";
export default function HistoryPage() {
  const HistoryPage = useSelector((state) => state.counterStore.calleffect);
  const dispatch = useDispatch();
  const [getapi, setGETApi] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let getApiRes = await Services.getApi();
      let getUserDetails = getApiRes.map((item) => item);
      setGETApi(getUserDetails);
    };
    getData();
  }, [HistoryPage]);

  // console.log(getapi, "getapi");

  const deleteItem = async (getid) => {
    alert(getid);
    const deleteapiitems = await Services.deleteApi(getid);
    dispatch(callUserEffect());
  };
  return (
    <div>
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
                <div>orginalPrice{HistoryPage}</div>
                <div>:</div>
                <div>{orginalPrice}</div>
              </div>
              <div className="OrginalPrice">
                <div>percentage</div>
                <div>:</div>
                <div>{percentage}</div>
              </div>
              <div className="OrginalPrice">
                <div>savings</div>
                <div>:</div>
                <div>{savings}</div>
              </div>
              <div className="OrginalPrice">
                <div>finalPrice</div>
                <div>:</div>
                <div>{finalPrice}</div>
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
