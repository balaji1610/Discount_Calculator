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
          const { date } = elm;
          const dataTimeSplit = date.split("at");
          const Date = dataTimeSplit[0];
          const Time = dataTimeSplit[1];

          return (
            <div className="HistoryCardLayout">
              <h2
                style={{
                  textAlign: "center",
                  color: "#ffffff",
                }}
              >
                {Date}
                {Time}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
