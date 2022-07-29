import './classificacao.css';
import CarrosselImagens from '../../components/carrossel-imagens/CarrosselImagens';
import rotuloAlimento from '../../assets/rotulo-alimento.png';
import frutasInNatura from '../../assets/frutas-in-natura.png'
import ovosInNatura from '../../assets/ovos-in-natura.png'
import saladaInNatura from '../../assets/salada-in-natura.png'
import cafe from '../../assets/Cafe.png'
import leite from '../../assets/leite.png'
import manga from '../../assets/manga.png'
import manteiga from '../../assets/manteiga.png'
import oleo from '../../assets/oleo.png'
import acucar from '../../assets/acucar.png'
import pao from '../../assets/pao.png'
import conservas from '../../assets/conservas.png'
import enlatados from '../../assets/enlatados.png'
import refrigerante from '../../assets/refrigerante.png'
import salgadinho from '../../assets/salgadinho.png'
import bolachaRecheada from '../../assets/bolacha-recheada.png'


function Classificacao() {
    return (
        <>
            <div className="main">
                <img className="rotulo-alimento" src={rotuloAlimento}></img>
                <div className="background-classificacao"></div>
            </div>
            <div className="main-classificacao">
                <h1 className='titulo-classificacao'>Classificação dos Alimentos</h1>
                <p> O guia alimentar classifica os alimentos de acordo com o nível do processamento dos alimentos antes de chegar na mesa do consumidor, isso pode influenciar em vários fatores, como nos nutrientes, gosto e sabor, durabilidade, impacto social, etc. Nesse sentido, os alimentos podem ser divididos em 4 categorias: Alimentos in natura e minimamente processados;
                    ingredientes culinários processados; alimentos processados; alimentos
                    ultraprocessados.</p>
                <div className="caixa-alimentos">
                    <h3>ALIMENTOS IN NATURA E MINIMMENTE PROCESSADOS</h3>
                    <p>Os alimentos in natura são obtidos na sua forma natural, diretamente de plantas ou de animais, e não sofrem
                        qualquer alteração após deixar a natureza, como adição de sódio, conservantes, aromatizantes. Alguns exemplos são:
                        frutas, verduras, legumes, ovos, raizes, tuberculos, carnes, etc.</p>
                    <CarrosselImagens images={[
                        { src: frutasInNatura, alt: 'cesta de fruta' },
                        { src: ovosInNatura, alt: 'ovos vermelhos' },
                        { src: saladaInNatura, alt: 'foto de legumes' }
                    ]} />
                    <p>Já os minimamente processados são alimentos in natura que passaram por processos mínimos de processamento, como
                        limpeza, remoção de partes não comestíveis, fracionamento,
                        moagem, secagem, fermentação, pasteurização, refrigeração, congelamento, embalagens e processos
                        similares que não envolvam a adição de sal, açúcar, óleos e gorduras. Alguns exemplos
                        são arroz, feijão, leite, graõs(milho, soja), trigo, frutas picadas, café, farinhas, etc.</p>
                    <CarrosselImagens images={[
                        { src: cafe, alt: 'foto café' },
                        { src: leite, alt: 'foto de um copo de leite' },
                        { src: manga, alt: 'foto de uma manga picada' }
                    ]} />
                    <p>Os alimentos in natura e minimamente processados são boas fontes de carboidratos, proteínas, vitaminas e minerais. Os alimentos de origem vegetal costumam ser boas fontas de fibra e ter menos quantidade de calorias em relação aos de origem animal que costumam ser um pouco mais caloricos por conta da gordura e com baixa quantidade de fibra.</p>
                    <h4>A combinação dos alimentos desse grupo representam a base para uma alimentação adequada.</h4>
                </div>
                <div className="caixa-alimentos">
                    <h3>ÓLEOS, GORDURAS, SAL E AÇÚCAR</h3>
                    <p>São produtos extraídos de alimentos in natura ou da natureza por processos, como
                        prensagem, moagem, trituração, pulverização e refino. São utilizados para temperar ou
                        cozinhar alimentos e para criar preparações culinárias variadas. Alguns exemplos são: óleos vegetais(girasol, canola, milho), manteiga, banha de porco, açúcar, sal</p>
                    <CarrosselImagens images={[
                        { src: manteiga, alt: 'foto manteiga', },
                        { src: oleo, alt: 'foto oleo', },
                        { src: acucar, alt: 'foto acucar' }
                    ]} />
                    <p>Esses produtos são bastante acessíveis, porém em excesso podem ser prejudiciais a saúde. O consumo de elevadas quantidade sódio e de gordura saturada , que estam presentes em óleo e gorduras, podem levar ao aparecimento de doenças crônicas, principalmente aquelas relacionadas ao coração. Já o açúcar pode levar ao aparecimento de cáries, obesidade, diabetes, etc.</p>
                    <h4> Por isso, esses alimentos devem ser utilizados com moderação!</h4>
                </div>
                <div className="caixa-alimentos">
                    <h3>ALIMENTOS PROCESSADOS</h3>
                    <p>São alimentos in natura ou minimamente processados com a adição de um ingrediente
                        culinário, como sal, açúcar, óleo ou gordura com objetivo de aumentar a durabilidade desses alimentos e torna-los mais agradáveis ao paladar. Seu processo de fabricação se assemelham as técnicas culinárias. Geralmente são fabricados pela
                        indústria e usualmente consumidos como parte ou acompanhamento de preparações.
                        culinárias. Alguns exemplos desses alimentos são: frutas em conserva, carnes e peixes conservadas ao sal ou óleo, alimentos enlatados, queijos, pães feitos de farinha, água e sal.</p>
                    <CarrosselImagens images={[
                        { src: pao, alt: 'pao' },
                        { src: conservas, alt: 'conservas' },
                        { src: enlatados, alt: 'enlatados' }
                    ]} />
                    <p>Por conta de ser derivados dos alimentos in natura, muito produtos dessa categoria são comercializados como alimentos saudáveis, porém deve-se tomar cuidado pois como eles possuí vários ingredientes culinários como açúcar, gorduras e sódio que podem modificar nutricionalmente esses alimentos.   </p>
                    <h4>Os alimentetos processados devem ser utilizados com moderação e devem ser consumidos como acompanhamentos dos alimentos in natura e não substítui-los. </h4>
                </div>
                <div className="caixa-alimentos">
                    <h3>ALIMENTOS ULTRAPROCESSADOS</h3>
                    <p>São alimentos que passam por diversos processos industriais, com adição de sal, açúcar e gorduras para intensificação do sabor, mascarar o gosto dos adivivos químicos e para aumentar a durabilidade do tempo de prateleira, além disso recebem grandes quantidades de substâncias que foram sintetizadas em
                        laboratórios como corantes, aromatizantes e realçadores de sabores. A fabricação desses produtos geralmente é realizada por grandes indústrias. Devido a sua formulação, esses alimentos constumam ser consumidos em excesso e tendem a substituir os alimentosa in natura e minimamente processados.</p>
                    <CarrosselImagens images={[
                        { src: refrigerante, alt: 'pao' },
                        { src: salgadinho, alt: 'conservas' },
                        { src: bolachaRecheada, alt: 'enlatados' }
                    ]} />
                    <p>Esses alimentos aprensentam baixo valor nutricional  e com excessiva quantidade de calorias.</p>
                    <h4>Os alimentos ultraprocessados devem ser evitados!</h4>
                </div>


                <h1 className='titulo-quiz'>Quiz dos Alimentos</h1>
                <p>Bora ver se você absorveu as informações dessa página? Esse quiz será composto de 4 questões e com 4 alternativas cada. Tenho</p>
            </div>
        </>
    )

}

export default Classificacao


