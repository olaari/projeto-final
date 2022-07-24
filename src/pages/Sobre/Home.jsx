import "./home.css";

import iconeAlimento from "../../assets/icone-alimento.png";
import iconeGlutenFree from "../../assets/icone-gluten-free.png";
import iconeInfo from "../../assets/icone-info.png";
import pizza from "../../assets/pizza.png";
import frutas from "../../assets/frutas.png";
import pratoFeito from "../../assets/prato-feito.png";
import paoDeQueijo from "../../assets/pao-de-queijo.png";

function Home() {
  return (
    <>
      <div className="main">
        <img className="icone-alimento" src={iconeAlimento}></img>
        <img className="icone-gluten-free" src={iconeGlutenFree}></img>
        <img className="icone-info" src={iconeInfo}></img>
        <div className="background"></div>
      </div>

      <div className="sobre">
        <h2>Sobre</h2>
        <p>
          Você já foi no mercado e comprou produtos achando que era saudável,
          mas no final descobriu que nao era? Você sabe o que é uma alimentação
          saúdavel? Conhece o guia alimentar? Esse site é para Você que quer
          aprender a ter uma alimentação equilibrada de modo simples e sem
          modismos.
          <br />
          <br /> Essa página tem como principal objetivo ajudar a população a
          ter uma maior autonomia na escolha alimentar, ou seja, a terem o
          direito de escolher seus alimentos com base nas suas crenças,
          sentimentos, comportamento e conhecimento básicos sobre nutrição.
        </p>

        <h3>O que é alimentação saudável?</h3>
      </div>

      <div className="imagens-saudaveis">
        <div className="imagem-prato-feito"></div>
        <div className="imagem-pizza"></div>
        <div className="imagem-frutas"></div>
        <div className="imagem-pao-de-queijo"></div>
      </div>
    </>
  );
}

export default Home;
