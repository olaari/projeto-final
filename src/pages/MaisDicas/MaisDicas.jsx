import "./maisdicas.css"
import lampada from "../../assets/lampada.png"

function MaisDicas() {
    return (
        <>
            <div className="background-mais-dicas">
                 <img className="icone-lampada" src={lampada} alt="Ícone lâmpada"></img>
                <div className="background-foto-dicas"></div>
            </div>
            <div className="main-outras-dicas">
                <h1>Dicas</h1>
                <div className="card-dicas">
                    <h3>Leia o Guia Alimentar para a População Brasileira</h3>
                    <p>Essa página foi baseada no guia alimentar para a população brasileira que é um documento criado pelo Ministério da Saúde e publicado em 2014 que esclarece o que é uma “alimentação adequada e saudável” e mostra o caminho para cada indivíduo adotar escolhas alimentares mais apropriadas, considerando particularidades regionais, etárias, culturais, sociais, econômicas e biológicas. Com isso, espera-se melhorar os padrões de alimentação e nutrição e contribuir para a promoção da saúde da população. </p>
                    <a href="https://bvsms.saude.gov.br/bvs/publicacoes/guia_alimentar_populacao_brasileira_2ed.pdf" target="blank" >Guia Alimentar</a>
                    <img src="https://www.fsp.usp.br/nupens/wp-content/uploads/2019/07/Screen-Shot-2019-07-04-at-15.52.25-1-360x468.png" alt="" />
                </div>

                <div className="card-dicas">
                    <h3>Baixe o aplicativo desrotulando</h3>
                    <p>Através desse app você pode escanear o código de barra dos produtos e ter acesso a tabela nutricional, análise dos ingredientes e um sistema de avaliação com notas de 0 a 100 que considera se os ingredientes são saudáveis. </p>
                    <a href="https://bvsms.saude.gov.br/bvs/publicacoes/guia_alimentar_populacao_brasileira_2ed.pdf" target="blank" >Desrotulando</a>
                    <img src="data:image/png;base64,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" alt="" />
                </div>

                <div className="card-dicas">
                    <h3> Assista o vídeo: Os rótulos estão gritando a mensagem errada</h3>
                    <p>Esse vídeo mostra a relação entre as embalagens do produtos e a dificuldades dos consumidores para achar e ler as informações nutricionais dos alimentos. </p>
                    <div className="video-flex">
                        <iframe className="videos-dicas" width="560" height="315" src="https://www.youtube.com/embed/bLVMocEcsU0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>

                <div className="card-dicas">
                    <h3>Assista o vídeo: Educação Nutricional USP - Rotulagem</h3>
                    <p>Esse vídeo ensina de forma simples e super didática como ler os rótulos dos alimentos. </p>
                    <div className="video-flex">
                        <iframe className="videos-dicas" width="560" height="315" src="https://www.youtube.com/embed/ww34UrMsJFw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>


            </div>
        </>
    )

}

export default MaisDicas
