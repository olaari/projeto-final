import "./classificacao.css";
import CarrosselImagens from "../../components/carrossel-imagens/CarrosselImagens";
import rotuloAlimento from "../../assets/rotulo-alimento.png";
import frutasInNatura from "../../assets/frutas-in-natura.png";
import ovosInNatura from "../../assets/ovos-in-natura.png";
import saladaInNatura from "../../assets/salada-in-natura.png";
import cafe from "../../assets/Cafe.png";
import leite from "../../assets/leite.png";
import manga from "../../assets/manga.png";
import manteiga from "../../assets/manteiga.png";
import oleo from "../../assets/oleo.png";
import acucar from "../../assets/acucar.png";
import pao from "../../assets/pao.png";
import conservas from "../../assets/conservas.png";
import enlatados from "../../assets/enlatados.png";
import refrigerante from "../../assets/refrigerante.png";
import salgadinho from "../../assets/salgadinho.png";
import bolachaRecheada from "../../assets/bolacha-recheada.png";
import embalagem from "../../assets/embalagem.png";

function Classificacao() {
  return (
    <>
      <div className="main">
        <img className="rotulo-alimento" src={rotuloAlimento} alt="Rótulo alimento"></img>
        <div className="background-classificacao"></div>
      </div>
      <div className="main-classificacao">
        <h1 className="titulo-classificacao">Classificação dos Alimentos</h1>
        <p>
          {" "}
          O guia alimentar classifica os alimentos conforme o nível do
          processamento realizado antes de chegar na mesa do consumidor. O
          processamento pode influenciar vários fatores, como os nutrientes, gosto e
          sabor, durabilidade, impacto social, etc. Nesse sentido, os alimentos
          podem ser divididos em 4 categorias: alimentos in natura e minimamente
          processados; ingredientes culinários processados; alimentos
          processados; alimentos ultraprocessados.
        </p>
        <div className="caixa-alimentos">
          <h3>ALIMENTOS IN NATURA E MINIMAMENTE PROCESSADOS</h3>
          <p>
            Os alimentos in natura são obtidos na sua forma natural, diretamente
            de plantas ou de animais, e não sofrem nenhuma alteração após
            deixar a natureza, como adição de sódio, conservantes,
            aromatizantes. Alguns exemplos são: frutas, verduras, legumes, ovos,
            raízes, tubérculos, carnes, etc.
          </p>
          <CarrosselImagens
            images={[
              { src: frutasInNatura, alt: "cesta de fruta" },
              { src: ovosInNatura, alt: "ovos vermelhos" },
              { src: saladaInNatura, alt: "foto de legumes" },
            ]}
          />
          <p>
            Já os minimamente processados são alimentos in natura que passaram
            por processos mínimos, como limpeza, remoção de
            partes não comestíveis, fracionamento, moagem, secagem, fermentação,
            pasteurização, refrigeração, congelamento, embalagens e processos
            similares que não envolvam a adição de sal, açúcar, óleos e
            gorduras. Alguns exemplos são: arroz, feijão, leite, graõs (milho,
            soja), trigo, frutas picadas, café, farinhas, etc.
          </p>
          <CarrosselImagens
            images={[
              { src: cafe, alt: "foto café" },
              { src: leite, alt: "foto de um copo de leite" },
              { src: manga, alt: "foto de uma manga picada" },
            ]}
          />
          <p>
            Os alimentos in natura e minimamente processados são boas fontes de
            carboidratos, proteínas, vitaminas e minerais. Os alimentos de
            origem vegetal costumam ser boas fontes de fibra e ter uma menor
            quantidade de calorias em relação aos de origem animal, que costumam
            ser um pouco mais calóricos por conta da gordura e pela baixa
            quantidade de fibra.
          </p>
          <h4>
            A combinação dos alimentos desse grupo representa a base para uma
            alimentação adequada.
          </h4>
        </div>
        <div className="caixa-alimentos">
          <h3>ÓLEOS, GORDURAS, SAL E AÇÚCAR</h3>
          <p>
            São produtos extraídos de alimentos in natura ou da natureza por
            processos, como prensagem, moagem, trituração, pulverização e
            refino. São utilizados para temperar ou cozinhar alimentos e para
            criar preparações culinárias variadas. Alguns exemplos são: óleos
            vegetais (girassol, canola, milho), manteiga, banha de porco, açúcar,
            sal.
          </p>
          <CarrosselImagens
            images={[
              { src: manteiga, alt: "foto manteiga" },
              { src: oleo, alt: "foto óleo" },
              { src: acucar, alt: "foto açúcar" },
            ]}
          />
          <p>
            Esses produtos são bastante acessíveis, porém, em excesso podem, ser
            prejudiciais à saúde. O consumo de elevadas quantidades sódio e de
            gordura saturada, que estão presentes em óleo e gorduras, podem
            levar ao aparecimento de doenças crônicas, principalmente aquelas
            relacionadas ao coração. Já o açúcar pode levar ao aparecimento de
            cáries, obesidade, diabetes etc.
          </p>
          <h4>
            Por isso, esses alimentos devem ser utilizados com moderação!
          </h4>
        </div>
        <div className="caixa-alimentos">
          <h3>ALIMENTOS PROCESSADOS</h3>
          <p>
            São alimentos in natura ou minimamente processados com a adição de
            um ingrediente culinário, como sal, açúcar, óleo ou gordura, com o
            objetivo de aumentar a durabilidade desses alimentos e torná-los
            mais agradáveis ao paladar. Seu processo de fabricação se assemelha
            às técnicas culinárias. Geralmente são fabricados pela indústria e consumidos como parte ou acompanhamento de preparações.
            culinárias. Alguns exemplos desses alimentos são: frutas em
            conserva, carnes e peixes conservadas ao sal ou óleo, alimentos
            enlatados, queijos, pães feitos de farinha, água e sal.
          </p>
          <CarrosselImagens
            images={[
              { src: pao, alt: "pao" },
              { src: conservas, alt: "conservas" },
              { src: enlatados, alt: "enlatados" },
            ]}
          />
          <p>
            Por serem derivados dos alimentos in natura, muito produtos
            dessa categoria são comercializados como alimentos saudáveis, porém,
            deve-se tomar cuidado, já que eles possuem vários ingredientes
            culinários como açúcar, gorduras e sódio, que podem modificá-los
            nutricionalmente.
          </p>
          <h4>
            Os alimentos processados devem ser utilizados com moderação e
            devem ser consumidos como acompanhamentos dos alimentos in natura,
            não em lugar deles.
          </h4>
        </div>
        <div className="caixa-alimentos">
          <h3>ALIMENTOS ULTRAPROCESSADOS</h3>
          <p>
            São alimentos que passam por diversos processos industriais, com
            adição de sal, açúcar e gorduras para intensificar do sabor,
            mascarar o gosto dos aditivos químicos e aumentar a
            durabilidade na prateleira. Além disso, recebem grandes
            quantidades de substâncias sintetizadas em laboratórios
            como corantes, aromatizantes e realçadores de sabores. A fabricação
            desses produtos é geralmente realizada por grandes indústrias.
            Devido a sua formulação, esses alimentos costumam ser consumidos em
            excesso e tendem a substituir os alimentos in natura e minimamente
            processados.
          </p>
          <CarrosselImagens
            images={[
              { src: refrigerante, alt: "refrigerante" },
              { src: salgadinho, alt: "salgadinho" },
              { src: bolachaRecheada, alt: "bolacha recheada" },
            ]}
          />
          <p>
            Esses alimentos apresentam baixo valor nutricional e excessiva
            quantidade de calorias.
          </p>
          <h4>Os alimentos ultraprocessados devem ser evitados!</h4>
        </div>
      </div>

      <div className="main-rotulos">
        <h1>Dicas para a leitura da lista de ingredientes dos alimentos</h1>
        <p>
          Quando você vai ao mercado costuma ler a lista de ingredientes? Você sabe
          o que é? Compara os mesmo alimentos de diferentes marcas?
        </p>
        <br />
        <p>
          Praticamente todos os alimentos industrializados possuem rótulos,
          uma importante fonte de comunicação entre consumidor e produto. Lá,
          há várias informações, como nome do alimento, gramagem, porções,
          valor nutricional, etc. Geralmente, essas informações ficam na parte
          de trás do rótulo e é nela que você deve ficar de
          olho na hora de comprar os alimentos. É nessa região que fica
          localizada a tabela nutricional e a lista de ingredientes do produto.{" "}
        </p>
        <div className="embalagem"> 
        <img src={embalagem} alt="" /></div>
        <div className="lista-de-ingredientes">
          <h3>O que é a lista de ingredientes? </h3>
          <p>
            É aquela que contém todos os ingredientes utilizados na composição
            daquele produto. A lista é feita na ordem de quantidade de
            composição, sendo que o primeiro ingrediente é o que apresenta maior
            quantidade e o último, o que menos. Quando a lista passa de
            mais de 5 ingredientes e tem corantes, aromatizantes, conservantes e
            substâncias com nomes desconhecidos, esse alimento pode ser
            considerado como ultraprocessado. Quanto menor a lista,
            mais próximo esse produto é dos alimentos in natura e
            minimamente processados.
          </p>{" "}
          <br />
          <br />
          <div className="exemplo-lista-ingredientes">
            <img src= "https://br.openfoodfacts.org/images/products/789/608/086/2132/ingredients_pt.7.full.jpg" alt="" /> </div>
        </div>
        <div>
          <p className="dicas-listas">
            {" "}
            DICA: se a lista de ingredientes for grande, diminua o consumo desse
            alimento e evite comprar e comer com tanta frequência.
          </p>
          <p className="dicas-listas">
            {" "}
            DICA: compare o mesmo alimento de diferentes marcas. Muitas marcas
            possuem diferentes formulações para um mesmo produto, sendo o
            produto de uma mais adequado nutricionalmente em relação ao outro.
          </p>
          <p className="dicas-listas">
            {" "}
            DICA: comece a praticar a leitura de rótulo na sua casa, assim,
            quando for comprar um produto e ler a lista de ingredientes fora de
            casa, a leitura será bem mais rápida.
          </p>
          <p className="dicas-listas">
            {" "}
            DICA: use o aplicativo <a className="link-dicas" href="https://desrotulando.com/" target="blank">Desrotulando</a>,
             com ele você escaneia o produto e ele
            te dá uma nota sobre esse alimento.{" "}
          </p>
          <p className="dicas-listas">
            {" "}
            DICA: tome cuidado com o marketing nutricional. Muitos alimentos são
            vendidos como saudáveis, porém, ao ler a lista de ingredientes, é possível
            perceber que não, pois, pela composição, são ultraprocessados.
          </p>
          <p className="dicas-listas">
            {" "}
            DICA: cuidado com o açúcar invertido, ele está presente em várias
            formulações de alimentos, porém não deixa de ser mais um tipo de
            açúcar, que, em excesso, pode levar ao desenvolvimento de doenças
            crônicas.
          </p>
          <p className="dicas-listas">
            DICA: caso tenha alguma alergia alimentar, verifique cuidadosamente os rótulos para ver se não têm o que pode te causar alergia. Muitas vezes, no momento da fabricação, pode ocorrer a contaminação cruzada, consequentemente levando ao aparecimento de sintomas a quem tem alergia a determinados ingredientes.
          </p>
        </div>
      </div>
    </>
  );
}

export default Classificacao;
