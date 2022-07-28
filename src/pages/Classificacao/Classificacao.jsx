import "./classificacao.css";
import CarrosselImagens from "../../components/carrossel-imagens/CarrosselImagens";
import rotuloAlimento from "../../assets/rotulo-alimento.png";
import frutasInNatura from "../../assets/frutas-in-natura.png"
import ovosInnatura from "../../assets/ovos-in-natura.png"


function Classificacao() {
    return (
        <>
            <div className="main">
                <img className="rotulo-alimento" src={rotuloAlimento}></img>
                <div className="background-classificacao"></div>
            </div>
            <div className="main-classificacao">
                <h1>Classificação dos Alimentos</h1>
                <p> O guia alimentar classifica os alimentos de acordo com o nível de processamento dos alimentos e podem ser divididos em: Alimentos in natura e minimamente processados; ingredientes culinários processados; alimentos processados; alimentos ultraprocessados.</p>
                <div className="caixa-alimentos">
                    <h3>Alimentos in natura e minimamente processados:</h3>
                    <p>"Alimentos in natura são obtidos diretamente de plantas ou de animais e não sofrem qualquer alteração após deixar a natureza" (guia alimentar). Alguns exemplos são: frutas, legumes, ovos, etc.</p>
                    {/* <CarrosselImagens image={frutasInNatura}
                        description="ilustração mulher fazendo checklist"
                        image={ovosInnatura}
                        description="ilustração mulher fazendo checklist"> </CarrosselImagens> */}


                    <div className="imagens-tipo-alimentos">
                        <div className="frutas-in-natura"></div>
                        <div className="ovos-in-natura"></div>
                        <div className="salada-in-natura"></div>
                    </div>
                    <p>Já os minimamente processados correspondem a alimentos in natura que foram submetidos a processos de limpeza, remoção de partes não comestíveis ou indesejáveis, fracionamento, moagem, secagem, fermentação, pasteurização, refrigeração, congelamento e processos similares que não envolvam a adição de sal, açúcar, óleos e gorduras. Alguns exemplos são leite, frutas picadas, café, etc.</p>
                    < div className="imagens-tipo-alimentos">
                        <div className="cafe"></div>
                        <div className="leite"></div>
                        <div className="manga"></div>
                 </div>

                </div>
                <div className="caixa-alimentos">
                    <h3>Alimentos ingredientes culinários processados</h3>
                    <p>São produtos extraídos de alimentos in natura ou da natureza por processos, como prensagem, moagem, trituração, pulverização e refino. São utilizados para temperar ou cozinhar alimentos e para criar preparações culinárias variadas. </p>
                    < div className="imagens-tipo-alimentos">
                        <div className="manteiga"></div>
                        <div className="oleo"></div>
                        <div className="acucar"></div>
                        </div>
                </div>
                <div className="caixa-alimentos">
                    <h3>Alimentos processados</h3>
                    <p>São alimentos in natura ou minimamente processados com a adição de um ingrediente culinário para torná-los duráveis e mais agradáveis ao paladar. São fabricados pela indústria e usualmente consumidos como parte ou acompanhamento de preparações culinárias.</p>
                    < div className="imagens-tipo-alimentos">
                        <div className="pao"></div>
                        <div className="conservas"></div>
                        <div className="enlatados"></div>
                        </div>
                </div>
                <div className="caixa-alimentos">
                    <h3>Alimentos ultraprocessados</h3>
                    <p>São formulações industriais feitas inteiramente ou majoritariamente de substâncias extraídas de alimentos derivados de constituintes de alimentos ou sintetizadas em laboratório (corantes, aromatizantes e realçadores de sabores).</p>
                    < div className="imagens-tipo-alimentos">
                        <div className="refrigerante"></div>
                        <div className="salgadinho"></div>
                        <div className="bolacha-recheada"></div>
                        </div>
                </div>


                <h1>Dicas práticas para ler Rótulos</h1>

            </div>
        </>
    )

}

export default Classificacao