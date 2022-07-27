import { Link } from "react-router-dom";
import "./menu.css";
import logo from "../../assets/logo.png"

function Menu() {
  return (
    <div className="container-menu">
      <ul className="menu">
        <li className="item">
          <Link className="link" to="/">
            {" "}
            Home
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/classificacao">
            Classificação
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/quiz">
            Quiz
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/contatos">
            Contatos
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default Menu;
