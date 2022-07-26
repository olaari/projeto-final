import "./home.css";
import iconeAlimento from "../../assets/icone-alimento.png";
import iconeGlutenFree from "../../assets/icone-gluten-free.png";
import iconeInfo from "../../assets/icone-info.png";

function Home() {
  return (
    <>
      <div className="main">
        <img className="icone-alimento" src={iconeAlimento} alt="Ícone alimento"></img>
        <img className="icone-gluten-free" src={iconeGlutenFree} alt="Ícone Gluten Free"></img>
        <img className="icone-info" src={iconeInfo} alt="Ícone informações nutricionais"></img>
        <div className="background"></div>
      </div>

      <div className="sobre">
        <h2>Sobre</h2>
        <p>
          Você já foi no mercado e comprou produtos achando que eram saudáveis,
          mas no final descobriu que não? Você sabe o que é uma alimentação
          saudável? Conhece o guia alimentar?<br />
          <br /> Esse site é para você que quer
          aprender a ter uma alimentação equilibrada de modo simples e sem
          modismos.
          <br />
          <br /> Essa página tem como principal objetivo ajudar a população a
          ter uma maior autonomia na escolha dos seus alimentos com base nas suas crenças,
          sentimentos, comportamentos e conhecimentos básicos sobre nutrição.
        </p>

        <h3>O que é alimentação saudável?</h3>
        <p>
          Alimentação saudável é aquela que vai além da ingestão de todos os nutrientes necessários para o bom funcionamento do corpo, ela pode envolver a combinação dos ingredientes, o preparo dos alimentos, a cultura, os hábitos alimentares e as preferências dos indivíduos, a higiene dos alimentos, enfim, não é uma alimentação apenas restrita a legumes e frutas, mas é aquela que permite comer de tudo um pouquinho com moderação.
          <br />
          <br /> A ingestão de nutrientes pode auxiliar na promoção da saúde e na prevenção de doenças, principalmente, quando combinados entre si. E essa combinação pode ser feita através do preparo dos alimentos e o modo particular que cada pessoa irá comê-los, trazendo em si suas particularidades, como hábitos e tradições.
        </p>
      </div>
      <div className="imagens-saudaveis">
        <div className="imagem-prato-feito"></div>
        <div className="imagem-pizza"></div>
        <div className="imagem-frutas"></div>
        <div className="imagem-pao-de-queijo"></div>
      </div>
      <div className='sobre'>
        <p>Os comportamentos e hábitos também podem influenciar na alimentação, por exemplo, o modo de comer sozinho ou acompanhado, assistindo TV ou sentado à mesa, a mastigação rápida ou lenta, ou seja, vários fatores podem influenciar no tipo de alimento escolhido para as refeições e também a quantidade ingerida. </p>
      </div>

      <div className="container-guia">
        <h3>Você já ouviu falar sobre o guia alimentar?</h3>
        <div className="guia-alimentar">
          <div className="imagem-guia"></div>
          <p>
            O guia alimentar é um documento criado pelo Ministério da Saúde e publicado em 2014 que esclarece o que é uma “alimentação adequada e saudável” e mostra o caminho para cada indivíduo adotar escolhas alimentares mais apropriadas, considerando particularidades regionais, etárias, culturais, sociais, econômicas e biológicas. Com isso, espera-se melhorar os padrões de alimentação e nutrição e contribuir para a promoção da saúde da população. <br />
            <br /> O guia propõe que os indivíduos tenham um bom relacionamento com a comida através da autonomia alimentar.
            Ele pode ser dividido em 5 partes: princípios, a escolha dos alimentos, a refeição, o ato de comer e a comensalidade, compreensão e a superação de obstáculos. <br />
            <br /> A leitura do guia é super simples e rápida e é muito recomendada principalmente para aquelas pessoas que querem se alimentar melhor. Esse documento também traz a classificação NOVA dos alimentos, que foi realizada com base na qualidade e grau de processamento dos alimentos.
            Além disso, o guia alimentar também traz os 10 passos de como ter uma alimentação saudável.
          </p>
        </div>
      </div>

      <div className="dez-passos">
        <h2>
          10 passos para uma alimentação saúdavel segundo o guia alimentar:
        </h2>
        <ul>
          <li>
            Fazer de alimentos in natura ou minimamente processados a base da
            alimentação.
          </li>
          <li>
            Utilizar óleos, gorduras, sal e açúcar em pequenas quantidades ao
            temperar e cozinhar alimentos e criar preparações culinárias.
          </li>
          <li> Limitar o consumo de alimentos ultraprocessados.</li>
          <li> Evitar o consumo de alimentos ultraprocessados.</li>
          <li>
            Comer com regularidade e atenção, em ambientes apropriados e, sempre
            que possível, com companhia.
          </li>
          <li>
            Fazer compras em locais que ofertem variedades de alimentos in
            natura ou minimamente processados.
          </li>
          <li> Desenvolver, exercicitar e partilhar habilidades culinárias</li>
          <li>
            Panejar o uso do tempo para dar à alimentação o espaço que ela merece.
          </li>
          <li>
            Dar preferência, quando fora de casa, a locais que servem refeições
            feitas na hora.
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
