
import { Route, Routes } from "react-router-dom";

import About from "../pages/About";
import CareerCounselling from "../pages/CareerCounselling";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import StudyAbroad from "../pages/StudyAbroad";
import SuccessStories from "../pages/SuccessStories";
import TestPreparation from "../pages/TestPreparation";

import NotFound from "../pages/NotFound";
import Schools from "../pages/Schools";
import Services from "../pages/Services";
import Blog from "../pages/Blog";


const AppRoutes = () => {
  return (
    <Routes>
      {/* MAIN PAGES */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/career-counselling" element={<CareerCounselling />} />
      <Route path="/study-abroad" element={<StudyAbroad />} />
      <Route path="/test-preparation" element={<TestPreparation />} />
      <Route path="/blog" element={<Blog />} />

      <Route path="/success-stories" element={<SuccessStories />} />
      <Route path="/contact" element={<Contact />} />

      {/* OPTIONAL / EXTRA */}
      <Route path="/schools" element={<Schools />} />
      <Route path="/services" element={<Services />} />

      {/* 404 PAGE (ALWAYS LAST) */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;

