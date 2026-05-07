import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import Landing from "./pages/Landing.jsx";
import NeedHelp from "./pages/NeedHelp.jsx";
import NeedHelpCategory from "./pages/NeedHelpCategory.jsx";
import GiveHelp from "./pages/GiveHelp.jsx";
import GoodNewsPage from "./pages/GoodNewsPage.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main className="page-shell">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/need-help" element={<NeedHelp />} />
          <Route path="/need-help/:categoryId" element={<NeedHelpCategory />} />
          <Route path="/give-help" element={<GiveHelp />} />
          <Route path="/good-news" element={<GoodNewsPage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
