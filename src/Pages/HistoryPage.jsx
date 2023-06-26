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

  console.log(getapi, "getapi");
  return (
    <div>
      <h1>{HistoryPage}</h1>
    </div>
  );
}
