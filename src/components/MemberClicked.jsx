import React from "react";
import AddForm from "./AddForm";
import LetterList from "./LetterList";
import styled from "styled-components";
import { useState } from "react";
import fakeData from "fakeData.json"

const FanletterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
  margin-bottom: 35px;
`;
function MemberClicked({ activeMember }) {
  const [letters, setLetters] = useState(fakeData);

  return (
    <FanletterBox>
      {activeMember}이 클릭됐을 때 나오는 내용
      <AddForm letters={letters} setLetters={setLetters} />
      <LetterList activeMember={activeMember} letters={letters} />
    </FanletterBox>
  );
}

export default MemberClicked;