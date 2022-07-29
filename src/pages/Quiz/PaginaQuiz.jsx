import { useState } from "react";
import simboloQuiz from "../../assets/simbolo-quiz.png";
import "./quiz.css";
import quizzes from "./quiz.json";

function PaginaQuiz() {

  const [numeroQuiz, setNumeroQuiz] = useState(0);
  const [acertos, setAcertos] = useState({});
  const [clicou, setClicou] = useState(false);
  const [classNames, setClassNames] = useState({});

  function Opcao(props) {
    const { pergunta, correta, explicacao } = props.quiz;
    const { resposta } = props;
    return (
      <div
        className={classNames[resposta] ?? "opcao"}
        onClick={() => {
          if (clicou) {
            return;
          }
          setClassNames({
            ...classNames,
            [resposta]: resposta === correta ? "opcao correta" : "opcao errada",
            [correta]: "opcao correta",
          });
          setClicou(true);
          setAcertos({
            ...acertos,
            [pergunta]: resposta === correta,
          });
        }}
      >
        {clicou && resposta === correta ? resposta + explicacao : resposta}
      </div>
    );
  }

  function Quiz(props) {
    const { pergunta, respostas } = props.quiz;
    return (
      <div className="quiz">
        <p>{pergunta}</p>
        {respostas.map((resposta) => (
          <Opcao key={resposta} quiz={props.quiz} resposta={resposta} />
        ))}
        <div
          className={clicou ? "proximo btn" : "proximo btn hidden"}
          onClick={() => {
            setClicou(false);
            setClassNames({});
            setNumeroQuiz(numeroQuiz + 1);
          }}
        >
          {numeroQuiz === quizzes.length - 1 ? "Fim" : "Próximo Quiz"} →
        </div>
      </div>
    );
  }

  function Resumo() {
    const numeroAcertos = Object.values(acertos).filter(
      (val) => val === true
    ).length;
    const conteudo = (() => {
      switch (numeroAcertos) {
        case 0:
          return "Poxa, não foi dessa vez!";
        case 1:
          return "Que legal, você acertou uma pergunta!";
        case 2:
          return "Olha só, 2 respostas corretas! Já está sabendo 🥳";
        case 3:
          return "Uauu!! Acertou todas! 😱";
      }
    })();
    return (
      <div className="quiz resumo">
        <h2>Resumo</h2>
        <p>{conteudo}</p>
        <div
          className="btn"
          onClick={() => {
            setNumeroQuiz(0);
            setAcertos({});
          }}
        >
          Jogar novamente
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="main-background-rotulos">
        <img className="simbolo-quiz" src={simboloQuiz}></img>
        <div className="background-rotulo"></div>
      </div>
      <div className="texto-quiz">
        <p > Bora ver se você absorveu as informações dessa página. Esse quiz será composto por 3 questões e com 4 alternativas cada.</p>
      </div>
      <div className="main-quiz">
        {numeroQuiz < quizzes.length ? (
          <Quiz quiz={quizzes[numeroQuiz]} />
        ) : (
          <Resumo />
        )}
      </div>
    </>
  );
}

export default PaginaQuiz;
