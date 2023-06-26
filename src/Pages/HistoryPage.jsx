import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Services from "../Services/Services";

export default function HistoryPage() {
  const HistoryPage = useSelector((state) => state.counterStore.calleffect);
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
  return (
    <div>
      <div className="HistoryCardOveflow">
        {getapi.map((elm) => {
          const { date,orginalPrice,percentage,savings,finalPrice } = elm;
          const dataTimeSplit = date.split("at");
          const Date = dataTimeSplit[0];
          const Time = dataTimeSplit[1];

          return (
            <div className="HistoryCardLayout">
              <div className="DateTimeLayoutFlex">
                <div className="ItemDateTime">{Date}</div>
                <div className="ItemDateTime">{Time}</div>
              </div>
              <div className="OrginalPrice">
                <div>orginalPrice</div>
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
