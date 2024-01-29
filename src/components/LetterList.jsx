import React from "react";
import styled from "styled-components";

const LetterCard = styled.div`
  border: 1px solid gray;
  border-radius: 15px;
  margin-top: 35px;
  width: 650px;
  display: flex;
  flex-direction: row;
  padding: 30px;
`;

const CardContent = styled.div`
    margin-left: 30px;
`
const NickName = styled.p`
    font-weight: bold;
    line-height: 0.1;
`

const Letter = styled.p`
    font-size: 20pt;
    line-height: 1.2;
    margin-top: 15px;
    margin-bottom: 15px;
`

const WriteDate = styled.p`
    text-align: right;
    line-height: 0.1;
    margin-top: 35px;
`

function LetterList() {
  return (
    <section>
      <LetterCard>
        <div><img src="assets/user_icon.png" width="50"/></div>
        <CardContent>
          <NickName>연준아 사랑해</NickName>
          <Letter>키크고 잘생기고 이쁘고 귀엽고 노래도 잘하고 춤도 잘추고 그리고 뤱도잘하꼬우</Letter>
          <WriteDate>2024. 1. 29 오후 4:26</WriteDate>
        </CardContent>
      </LetterCard>
    </section>
  );
}

export default LetterList;
