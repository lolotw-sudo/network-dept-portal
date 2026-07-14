import { HashRouter, Routes, Route } from "react-router-dom"; // 👈 改用 HashRouter
import Home from "./pages/Home";
import CategoriesTabs from "./pages/CategoriesTabs";
import NewbieGuide from "./pages/NewbieGuide";
import OrgGuide from "./pages/OrgGuide";
import YearFocus from "./pages/YearFocus";
import LearningMap from "./pages/LearningMap";
import LearningMapModal from "./pages/LearningMapModal";
import StrategyMap from "./pages/StrategyMap";
import TeacherGuide from "./pages/TeacherGuide";
import CourseMap from "./pages/CourseMap";

export default function App() {
  return (
    <HashRouter> {/* 👈 這裡也要同步改為 HashRouter */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategoriesTabs />} />
        <Route path="/guide/newbie" element={<NewbieGuide />} />
        <Route path="/guide/org" element={<OrgGuide />} />
        <Route path="/learning-map" element={<LearningMap />} />
        <Route path="/learning-map-modal" element={<LearningMapModal />} />
        <Route path="/strategy-map" element={<StrategyMap />} />
        <Route path="/guide/teachers" element={<TeacherGuide />} />
        <Route path="/focus/yearly" element={<YearFocus />} />
        <Route path="/course-map" element={<CourseMap />} />
      </Routes>
    </HashRouter>
  );
}
