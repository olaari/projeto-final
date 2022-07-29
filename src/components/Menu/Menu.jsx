import { Link } from 'react-router-dom';
import './menu.css';

function Menu() {
  return (
    <div className="menu">
        {[
          { rota: '/', nome: 'Home' },
          { rota: '/classificacao', nome: 'Classificação' },
          { rota: '/rotulos', nome: 'Rótulos' },
          { rota: '/quiz', nome: 'Quiz' },
          { rota: '/contatos', nome: 'Contatos' },
        ].map(
          ({ rota, nome }) =>
            <Link key={rota} className="link" to={rota}>
              {nome}
            </Link>
        )}
    </div>
  );
}

export default Menu;
