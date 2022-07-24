import { BrowserRouter,Routes,Route} from "react-router-dom"
import "../App"
import Classificacao from "../pages/Classificacao/Classificacao"
import Contatos from "../pages/Contatos/Contatos"
import Quiz from "../pages/Quiz/Quiz"
import Home from "../pages/Sobre/Home"
import Menu from "../components/Menu/Menu"
import Footer from "../components/Footer/Footer"

function ApplicationRoutes(){
    return(
        <BrowserRouter> 
        <Menu/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/classificacao" element={<Classificacao/>}/>
            <Route path="/quiz" element={<Quiz/>}/>
            <Route path="/contatos" element={<Contatos/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter> 
    )

}
export default ApplicationRoutes