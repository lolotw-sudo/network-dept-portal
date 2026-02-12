import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CategoriesTabs from "./pages/CategoriesTabs";
import NewbieGuide from "./pages/NewbieGuide";
import OrgGuide from "./pages/OrgGuide";
import YearFocus from "./pages/YearFocus";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategoriesTabs />} />
        <Route path="/guide/newbie" element={<NewbieGuide />} />
        <Route path="/guide/org" element={<OrgGuide />} />
        <Route path="/focus/yearly" element={<YearFocus />} />
      </Routes>
    </BrowserRouter>
  );
}