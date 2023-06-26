import { useSelector } from "react-redux";

export default function HistoryPage() {
  const HistoryPage = useSelector((state) => state.counterStore.HistoryArray);
  console.log(HistoryPage, "HistoryPage");
  return (
    <div>
      <h1>History Page</h1>
    </div>
  );
}
