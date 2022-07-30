import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../App";
import Classificacao from "../pages/Classificacao/Classificacao";
import Home from "../pages/Home/Home";
import Menu from "../components/Menu/Menu";
import Footer from "../components/Footer/Footer";
import PaginaQuiz from "../pages/Quiz/PaginaQuiz.jsx";
import MaisDicas from "../pages/Mais-dicas/maisdicas";

function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classificacao" element={<Classificacao />} />
        <Route path="/quiz" element={<PaginaQuiz />} />
        <Route path="/maisdicas" element={<MaisDicas />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default ApplicationRoutes;
