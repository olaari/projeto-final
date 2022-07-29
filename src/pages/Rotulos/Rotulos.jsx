import "./rotulos.css"
import alimentosRotulos from "../../assets/alimentos-rotulos.png"

function Rotulos() {
    return (
        <>
            <div className="main-background">
                <img className="alimento-rotulos" src={alimentosRotulos}></img>
                <div className="background-rotulo"></div>
            </div>

            <div className="main-rotulo">
                <h1>Dicas para a leitura de Rótulos nutricionais dos alimentos</h1>
                <p>Quando você vai ao mercado costuma ter a lista de alimento? Você sabe o que é lista de alimentos? Compara os alimentos de diferentes marcas?</p> <br />

                <p> Praticamente todos os alimentos industrializados possuem rótulos que é uma importante fonte de comunicação entre consumidor e produto. Lá, contém várias informações como nome do alimento, gramagem, porções, valor nutricional, etc. Geralmente, na parte de trás do rótulo é onde fica as informações nutricionais e é nela que você deve deve ficar de olho na hora de comprar os alimentos. É nessa região que fica localizada a tabela nutricional e a lista de ingrediente do produto. </p>

                <div className="lista-de-ingredientes">
                    <h3>O que é a lista de ingredientes? </h3>
                    <p>É aquela que contém todos os ingredientes utilizados na composição daquele produto. A lista é feita na ordem de quantidade de composição, sendo que o primeiro ingrediente é o que tem maior quantidade e o último é o que tem menos.
                        Quando a lista passa de mais de 5 ingredientes e tem corantes, aromatizantes, conservantes e substências com nomes desconhecidos, esse alimento pode ser considerado como ultraprocessado (<a className="link" href="https://nutri-desrotula.netlify.app/classificacao">Saiba mais sobre a classificação dos alimentos</a>), porém quanto menor a lista de ingredientes mais próximo esse produto é dos alimentos in natura e minimamente processados.</p> <br /><br />
                    <div className="exemplo-lista-ingredientes"> </div>
                </div>
                <div>
                    <p className="dicas-listas"> DICA: Se a lista de ingredientes for grande diminuia o consumo desse alimento e evite comprar e comer com tanta frequência.</p>
                    <p className="dicas-listas"> DICA: Compare o mesmo alimento de diferentes marcas. Muitas marcas possui diferentes formulações para um mesmo produto, muitas vezes um produto de uma é mais adequado nutricionalmente em relação ao outro.</p>
                    <p className="dicas-listas"> DICA: Comece a praticar a leitura de rótulo na sua casa, assim quando for comprar um produto e ler a lista de ingredientes fora de casa, a leitura será bem mais rápida.</p>
                    <p className="dicas-listas"> DICA: Use o aplicativo <a className="link"href="https://desrotulando.com/">Desrotulando</a> , com esse app você consegue escanear o produto e através disso ele te da uma nota sobre esse alimento. </p>
                    <p className="dicas-listas"> DICA: </p>
                    <p className="dicas-listas"> DICA: </p>


                </div>




            </div>
        </>
    )

}

export default Rotulos