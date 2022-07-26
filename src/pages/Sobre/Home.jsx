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
          Alimentação saudável é aquela que vai além da ingestão de todos os nutrientes necessários para o bom funcionamento do corpo. Ela pode envolver a combinação dos ingredientes, o preparo dos alimentos, a cultura, os hábitos alimentares e as preferências dos indivíduos, a higiene dos alimentos, enfim,não é uma alimentação apenas restrita a legumes e frutas, mas é aquela que pode comer de tudo um pouquinho com moderação.
          <br />
          <br /> A ingestão de nutrientes pode auxiliar na promoção da saúde e na prevenção de doenças principalmente quando combinados entre si.E essa combinação pode ser feita através do preparo dos alimentos e o modo particular que cada pessoa irá comê-los, trazendo em si suas particularidades, como hábitos e tradições.
        </p>

        <div className="imagens-saudaveis">
          <div className="imagem-prato-feito"></div>
          <div className="imagem-pizza"></div>
          <div className="imagem-frutas"></div>
          <div className="imagem-pao-de-queijo"></div>
        </div>

        <p className="main">Padrões de alimentação e comportamentos também podem influenciar na alimentação como comer sozinho ou acompanhado, assistindo TV ou comer sentado à mesa, mastigação rápida ou lenta tudo isso pode influenciar o modo como você come, qual tipo de alimento é escolhido para determinada refeição e também a quantidade a ser ingerida.
        </p>
      </div>

      <div className="container-guia">
        <h3>Você já ouviu falar sobre o guia alimentar?</h3>
        <div className="guia-alimentar">
          <p>
            O guia alimentar é um documento criado pelo Ministério da Saúde e publicado em 2014 que esclarece o que é uma “alimentação adequada e saudável” e mostra o caminho para cada indivíduo adotar escolhas alimentares mais apropriadas, considerando particularidades regionais, etárias, culturais, sociais, econômicas e biológicas.  Com isso, espera-se melhorar os padrões de alimentação e nutrição e contribuir para a promoção da saúde da população. <br />
            <br /> O guia propõe que os indivíduos tenham um bom relacionamento com a comida através da autonomia alimentar que é o poder de escolhas dos alimentos a partir desse documento e dos conhecimentos adquiridos ao longo da vida.
            Ele pode ser dividido em 5 partes: princípios, a escolha dos alimentos, a refeição, o ato de comer e a comensalidade e a compreensão e a superação de obstáculos. <br />
            <br /> A leitura do guia é super simples e rápida e é muito recomendada principalmente para aquelas pessoas que querem se alimentar melhor. Também traz a classificação NOVA dos alimentos a partir da qualidade e grau de processamento deles, que é o conteúdo principal deste site.
            Além disso, o guia alimentar também traz os 10 passos de como ter uma alimentação saudável.

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
