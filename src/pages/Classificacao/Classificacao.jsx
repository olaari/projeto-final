import "./classificacao.css";
import rotuloAlimento from "../../assets/rotulo-alimento.png";


function Classificacao() {
    return (
        <>
            <div className="main">
                <img className="rotulo-alimento" src={rotuloAlimento}></img>
                <div className="background-classificacao"></div>
            </div>
            <div className="main-classificacao">
                <h1>Classificação dos Alimentos</h1>
                <p> O guia alimentar classifica os alimentos de acordo com o nível de processamento dos alimentos e podem ser divididos em:</p>
                <ul className="lista-alimentos">
                    <li className="categorias-alimentos">Alimentos in natura e minimamente processados.</li>
                    <li className="categorias-alimentos">Alimentos ingredientes culinários processados.</li>
                    <li className="categorias-alimentos" >Alimentos processados.</li>
                    <li className="categorias-alimentos">Alimentos ultraprocessados.</li>
                </ul>

                <h3>Alimentos in natura e minimamente processados</h3>
                <p> </p>
                <h3>Alimentos ingredientes culinários processados</h3>
                <p></p>
                <h3>Alimentos processados</h3>
                <p></p>
                <h3>Alimentos ultraprocessados</h3>
            </div>
        </>
    )

}

export default Classificacao