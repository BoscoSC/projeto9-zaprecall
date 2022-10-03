import styled from "styled-components";
import logo from "./assets/img/logo.png";
import DECK from "./deck";
import Pergunta from "./components/Pergunta";
import GlobalStyle from "./global";
import { useState } from "react";

export default function App() {
  const [idAberto, setIdAberto] = useState(0);
  const [virado, setVirado] = useState(false);
  const [idFinalizados, setIdFinalizados] = useState([]);
  const qntdFinalizados = idFinalizados.length;

  function concluirPergunta(corBotao){
    if(virado === true){
      setIdAberto(0);
      const novoFinalizado = {id: idAberto, cor: corBotao};
      setIdFinalizados([...idFinalizados, novoFinalizado]);
    }
  }

  return (
    <>
      <GlobalStyle />
      <ScreenContainer>
        <LogoContainer>
          <img src={logo} alt="" />
          <h1>ZapRecall</h1>
        </LogoContainer>

        {DECK.map((item) => {
          const idFinalizado = idFinalizados.find(obj => obj.id === item.id);

          return (
            <Pergunta
              key={item.id}
              deck={item}
              idAberto={idAberto}
              selecionarPergunta={setIdAberto}
              virado={virado}
              virarPergunta={setVirado}
              concluido={idFinalizado ? true : false}
              estilo={idFinalizado ? idFinalizado.cor : "cinza"}
            />
        )})}

        <FooterConcluidos>
          <ContainerBotoes>
            <Botao color="#FF3030" onClick={() => concluirPergunta("vermelho")}>Não lembrei</Botao>
            <Botao color="#FF922E" onClick={() => concluirPergunta("amarelo")}>Quase Lembrei</Botao>
            <Botao color="#2FBE34" onClick={() => concluirPergunta("verde")}>Zap!</Botao>
          </ContainerBotoes>

          <p>{qntdFinalizados}/8 CONCLUÍDOS</p>
        </FooterConcluidos>
      </ScreenContainer>
    </>
  );
}

const ScreenContainer = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;

  img {
    width: 52px;
  }

  h1 {
    font-family: "Righteous";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #ffffff;
    margin-left: 20px;
  }
`;

const FooterConcluidos = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Recursive";
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
`;

const ContainerBotoes = styled.div`
  display: flex;
  width: 100%;
  max-width: 300px;
  justify-content: space-around;
  margin: 20px;
`;

const Botao = styled.button`
  cursor: pointer;
  width: 90px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  background: blue;
  border-radius: 5px;
  border: 1px solid blue;
  padding: 5px;
  background-color: ${(props) => props.color};
`;
