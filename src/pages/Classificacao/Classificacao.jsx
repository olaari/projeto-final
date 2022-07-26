import "./classificacao.css";
import rotuloAlimento from "../../assets/rotulo-alimento.png";

function Classificacao() {
    return (
        <>
            <div className="main">
                <img className="rotulo-alimento" src={rotuloAlimento}></img>
                <div className="background-classificacao"></div>
            </div>
            <div>
                <h1>Classificação dos Alimentos</h1>
                <h3>Sendo o guia alimentar os alimentos podem ser dividido em: </h3>
            </div>
        </>
    )

}

export default Classificacao