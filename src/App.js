import styled from "styled-compenents";
import { useState } from "react";
import DECK from "./deck"
import Pergunta from "./components/Pergunta";

export default function App() {
  const {deck} = DECK;
  return (
    <ScreenContainer>
      <LogoCcontainer>
        <img src="assets/img/logo.png" alt="" />
        <h1>ZapRecall</h1>
      </LogoCcontainer>

      {deck.map((item) => <Pergunta key={item.id} deck={item} />)}

      <FooterConcluidos>
        <ContainerBotoes>
          <button></button>
          <button></button>
          <button></button>
        </ContainerBotoes>
      </FooterConcluidos>
    </ScreenContainer>
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

const LogoCcontainer = styled.div`
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
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Recursive';
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
`;

const ContainerBotoes = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 20px;
`;