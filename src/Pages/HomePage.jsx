import Header from "../Containers/Header";
import DiscountCalculatorPage from "./DiscountCalculatorPage";
import HistoryPage from "./HistoryPage";
import { Routes, Route } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<DiscountCalculatorPage />} />
          <Route path="/History" element={<HistoryPage />} />
        </Routes>
      </div>
    </div>
  );
}
