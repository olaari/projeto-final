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
        <p>
          Alimentação saúdavel nao é aquela onde a pessoa come apenas salada e
          frutas, mas é aquela que a pessoa pode comer de tudo um pouco, seja,
          pizza, hambuerguer, legumes, etc. Além disso, é aquela que envolve
          diversos fatores, como a cultura, o que a pessoa gosta de comer, o
          conhecimento que as pessoas possuem sobre nutricao, enfim de tudo um
          pouquinho.
        </p>
      </div>

      <div className="imagens-saudaveis">
        <div className="imagem-prato-feito"></div>
        <div className="imagem-pizza"></div>
        <div className="imagem-frutas"></div>
        <div className="imagem-pao-de-queijo"></div>
      </div>

      <div className="container-guia">
        <h3>Você já ouviu falar sobre o guia alimenar?</h3>
        <div className="guia-alimentar">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            tempora impedit voluptatem debitis a illum veritatis optio at minima
            excepturi enim nesciunt delectus, cumque blanditiis soluta aperiam
            sunt accusantium. Ipsum. Nostrum sequi iusto autem vel praesentium
            labore! Consequatur beatae accusantium architecto quia incidunt quae
            facilis, ullam distinctio exercitationem aut dolorum dolores fuga
            officia cum nisi odit pariatur veritatis soluta amet. Maxime
            provident nobis, rerum deleniti rem pariatur accusantium inventore
            dolorum. Ratione impedit ipsum, fuga eius, natus ex doloribus ipsam
            incidunt esse maiores, harum aperiam earum aspernatur voluptatum!
            Saepe, deleniti obcaecati.
          </p>
          <div className="imagem-guia"></div>
        </div>
      </div>

      <div className="dez-passos">
        <h2>
          10 passos para uma alimentação saúdavel segundo o guia alimentar:
        </h2>
        <ul>
          <li>
            Fazer de alimentos in natura ou minimamente processados a base da
            alimentação
          </li>
          <li>
            Fazer de alimentos in natura ou minimamente processados a base da
            alimentação
          </li>
          <li>
            Utilizar óleos gorduras, sal e açúcar em pequenas quantidades ao
            tempera e cozinhas alimentos e criar preparações culinárias
          </li>
          <li> Limitar o consumo de alimentos ultraprocessados</li>
          <li> Evitar o consumo de alimentos ultraprocessados</li>
          <li>
            Comer com regularidade e atenção, em ambientes apropriados e, sempre
            que possível, com companhia{" "}
          </li>
          <li>
            Fazer compras em locais que ofertem variedades de alimentos in
            natura ou natura ou minimamente processados
          </li>
          <li> Desenvolver, exercicitar e partilhar habilidades culinárias</li>
          <li>
            Panejar o uso do tempo para dar alimentação o espaço que ela merece
          </li>
          <li>
            Dar preferência quando fora de casa, a locais que servem refeições
            feitas na hora
          </li>
          <li>
            Ser crítico quanto a informações, orientações e mensagens sobre
            alimentação veiculadas em propagandas comerciais.
          </li>
        </ul>
      </div>
    </>
  );
}

export default Home;
