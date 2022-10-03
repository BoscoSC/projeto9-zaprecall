import styled from "styled-components";
import play from "../assets/img/seta_play.png";
import virar from "../assets/img/seta_virar.png";

import certo from "../assets/img/icone_certo.png";
import quase from "../assets/img/icone_quase.png";
import erro from "../assets/img/icone_erro.png";

export default function Pergunta(props) {
  const { id, pergunta, resposta } = props.deck;
  const { idAberto, selecionarPergunta, virado, virarPergunta, concluido, estilo } = props;

  function abrirPergunta() {
    selecionarPergunta(id);
    virarPergunta(false);
  }

  function mostrarResposta() {
    virarPergunta(true);
  }

  return (
    <>
      {idAberto === id ? (
        !virado ? (
          <PerguntaAberta>
            <p>{pergunta}</p>
            <BotaoVirar src={virar} alt="" onClick={mostrarResposta} />
          </PerguntaAberta>
        ) : (
          <PerguntaAberta>
            <p>{resposta}</p>
          </PerguntaAberta>
        )
      ) : (
        <PerguntaFechada>
          <NomePergunta concluido={concluido} estilo={estilo}>Pergunta {id}</NomePergunta>
          {estilo === "cinza" && <Botao src={play} alt="" onClick={abrirPergunta} temCursor={true}/>}
          {estilo === "verde" && <Botao src={certo} alt="" />}
          {estilo === "amarelo" && <Botao src={quase} alt="" />}
          {estilo === "vermelho" && <Botao src={erro} alt="" />}
        </PerguntaFechada>
      )}
    </>
  );
}

const PerguntaFechada = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NomePergunta = styled.p`
  font-family: "Recursive";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  ${(props) => (props.concluido && props.estilo === "cinza") && `
    color: #333333;
    text-decoration: line-through;
  `}

  ${(props) => (props.concluido && props.estilo === "verde") && `
    color: #2FBE34;
    text-decoration: line-through;
  `}

  ${(props) => (props.concluido && props.estilo === "vermelho") && `
    color: #FF3030;
    text-decoration: line-through;
  `}

  ${(props) => (props.concluido && props.estilo === "amarelo") && `
    color: #FF922E;
    text-decoration: line-through;
  `}
`;

const Botao = styled.img`
${(props) => props.temCursor && `
    cursor: pointer;
  `}
`;

const PerguntaAberta = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BotaoVirar = styled.img`
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;
