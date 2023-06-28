import Header from "../Containers/Header";
import DiscountCalculatorPage from "./DiscountCalculatorPage";
import HistoryPage from "./HistoryPage";
import { Routes, Route } from "react-router-dom";
import Footer from "../Containers/Footer";
import MobileHeader from "../Containers/MobileHeader";
import useMediaQuery from "@mui/material/useMediaQuery";
export default function HomePage() {
  const mobile = useMediaQuery("(min-width:600px)");
  return (
    <div>
      {mobile ? <Header /> : <MobileHeader />}

      <div>
        <Routes>
          <Route path="/" element={<DiscountCalculatorPage />} />
          <Route path="/History" element={<HistoryPage />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
