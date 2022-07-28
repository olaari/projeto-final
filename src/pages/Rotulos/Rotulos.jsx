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
                <h1>Dicas para a leitura de Rótulos nutricionais dos alimentos </h1>
                <p>Quando você vai ao mercado costuma ter a lista de alimento? Você sabe o que é lista de alimentos? Compara os alimentos de diferentes marcas?</p>
                
                <p> Práticamente todos os alimentos industrializados possuem rótulos que é uma importante fonte de comunicação entre consumidor e produto. Lá contém várias informações como nome do alimento, gramagem, porções, valor nutricional etc. Geralmente na parte de trás do produto é onde fica as informações nutricionais e é nela que você deve focar na hora de comprar os alimentos.É nessa região que fica localizada a tabela nutricional e a lista de ingrediente do produto. </p>
                <h3>O que é a lista de ingredientes? </h3>
                <p>É aquela que contém todos os ingredientes utilizados na composição daquele produto. A lista é feita na ordem de quantidade de composição, sendo que o primeiro ingrediente é o que tem maior quantidade e o último é o que tem menos.
                    Quando a lista passa de mais de 5 ingredientes geralmente faz parte do grupo de alimentos chamados de ultraprocessados (<a href="https://nutri-desrotula.netlify.app/rotulos">Clique aqui para saber mais</a>)
                </p>






            </div>
        </>
    )

}

export default Rotulos